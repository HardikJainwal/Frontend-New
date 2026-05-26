/**
 * Vercel serverless proxy (CommonJS for reliable deployment with "type": "module").
 * POST /api/chat → http://65.2.21.144:8001/chat
 */

const BACKEND_URL =
  process.env.CHAT_API_URL || "http://65.2.21.144:8001/chat";

const REQUEST_TIMEOUT_MS = Number(process.env.CHAT_API_TIMEOUT_MS) || 55_000;
const MAX_QUERY_LENGTH = 4_000;

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function sendJson(res, status, payload) {
  Object.entries(CORS_HEADERS).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.status(status).json(payload);
}

function normalizeQuery(body) {
  if (!body || typeof body !== "object") return null;
  const query = body.query;
  if (typeof query !== "string") return null;
  const trimmed = query.trim();
  if (!trimmed || trimmed.length > MAX_QUERY_LENGTH) return null;
  return trimmed;
}

async function readJsonBody(req) {
  if (req.body !== undefined && req.body !== null) {
    if (typeof req.body === "string") {
      try {
        return JSON.parse(req.body);
      } catch {
        return null;
      }
    }
    if (typeof req.body === "object") return req.body;
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const raw = Buffer.concat(chunks).toString("utf8");
  if (!raw.trim()) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") {
    Object.entries(CORS_HEADERS).forEach(([key, value]) => {
      res.setHeader(key, value);
    });
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return sendJson(res, 405, { error: "Method not allowed. Use POST." });
  }

  const body = await readJsonBody(req);
  const query = normalizeQuery(body);
  if (!query) {
    return sendJson(res, 400, {
      error: 'Invalid request body. Expected JSON: { "query": "your question" }',
    });
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const upstream = await fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query }),
      signal: controller.signal,
    });

    const raw = await upstream.text();
    let data;

    try {
      data = raw ? JSON.parse(raw) : {};
    } catch {
      console.error("[api/chat] Non-JSON upstream:", raw.slice(0, 200));
      return sendJson(res, 502, {
        error: "Chat service returned an invalid response.",
      });
    }

    Object.entries(CORS_HEADERS).forEach(([key, value]) => {
      res.setHeader(key, value);
    });
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.status(upstream.status).json(data);
  } catch (err) {
    const isTimeout = err.name === "AbortError";
    console.error("[api/chat] Proxy error:", err.message);
    return sendJson(res, isTimeout ? 504 : 502, {
      error: isTimeout
        ? "Chat service timed out. Please try again."
        : "Unable to reach chat service. Please try again later.",
    });
  } finally {
    clearTimeout(timeoutId);
  }
};
