import { useState, useRef, useEffect, useCallback } from "react";

/** Same-origin proxy (Vercel /api/chat in prod, Vite dev proxy locally) */
const DEFAULT_API_URL = "/api/chat";
const CHATBOT_NAME = "Hunar";
const HUNAR_ICON = "/hunar icon dseu.png";
const MOBILE_TAGLINE = `I'm ${CHATBOT_NAME}! Ask about DSEU admissions, courses & fees.`;

const QUICK_REPLIES = [
  { label: "📋 Diploma Programs", query: "Diploma programs kya hain?" },
  { label: "💰 Fee Structure", query: "Fee structure kya hai?" },
  { label: "🎓 B.Tech Admission", query: "B.Tech admission process kya hai?" },
  { label: "🏫 All Campuses", query: "DSEU ke sabhi campuses kahan hain?" },
];

const MD_TABLE = "w-full border-collapse my-1.5 text-[11.5px]";
const MD_TH =
  "bg-blue-50 px-2 py-1 border border-blue-200 font-semibold text-[#005CB9] text-left";
const MD_TD = "px-2 py-1 border border-blue-200";
const MD_H1 = "text-base font-semibold my-1.5 text-[#005CB9]";
const MD_H2 = "text-sm font-semibold my-1.5 text-[#005CB9]";
const MD_H3 = "text-[13px] font-semibold my-1.5 text-[#005CB9]";
const MD_UL = "pl-4 my-1 list-disc";
const MD_LI = "my-0.5 text-[12.5px]";

const GRADIENT = "bg-gradient-to-br from-[#005CB9] to-[#0471B5]";
const MOBILE_MQ = "(max-width: 767px)";

function isMobileViewport() {
  return typeof window !== "undefined" && window.matchMedia(MOBILE_MQ).matches;
}

function isEmbeddedFrame() {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
}

function shouldOpenOnDesktopLoad() {
  return (
    typeof window !== "undefined" &&
    !isMobileViewport() &&
    !isEmbeddedFrame()
  );
}

function resolveChatApiUrl(pathOrUrl) {
  const path = pathOrUrl || DEFAULT_API_URL;
  if (/^https?:\/\//i.test(path)) return path;
  if (typeof window !== "undefined") {
    return new URL(path, window.location.origin).href;
  }
  return path;
}

function getTime() {
  return new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function renderMarkdown(text) {
  let html = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  html = html.replace(/(\|.+\|\n?)+/g, (tableBlock) => {
    const rows = tableBlock
      .trim()
      .split("\n")
      .filter((r) => r.trim());
    let result = `<table class="${MD_TABLE}">`;
    rows.forEach((row, i) => {
      if (/^\|[\s\-|:]+\|$/.test(row.trim())) return;
      const cells = row
        .split("|")
        .filter((_, ci) => ci > 0 && ci < row.split("|").length - 1);
      const tag = i === 0 ? "th" : "td";
      const cellClass = tag === "th" ? MD_TH : MD_TD;
      result +=
        "<tr>" +
        cells
          .map((c) => `<${tag} class="${cellClass}">${c.trim()}</${tag}>`)
          .join("") +
        "</tr>";
    });
    return result + "</table>";
  });

  html = html
    .replace(/^### (.+)$/gm, `<h3 class="${MD_H3}">$1</h3>`)
    .replace(/^## (.+)$/gm, `<h2 class="${MD_H2}">$1</h2>`)
    .replace(/^# (.+)$/gm, `<h1 class="${MD_H1}">$1</h1>`);

  html = html
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/^- (.+)$/gm, `<li class="${MD_LI}">$1</li>`);

  html = html.replace(
    /(<li class="[^"]*">.*<\/li>\n?)+/g,
    (b) => `<ul class="${MD_UL}">${b}</ul>`,
  );
  html = html.replace(
    /\n(?!<\/?(ul|ol|li|h[1-4]|hr|table|tr|th|td))/g,
    "<br/>",
  );
  html = html.replace(/(<\/(h[1-4]|ul|ol|hr|table)>)<br\/>/g, "$1");
  return html;
}

function HunarAvatar({ className = "h-8 w-8" }) {
  return (
    <img
      src={HUNAR_ICON}
      alt={CHATBOT_NAME}
      className={`object-contain ${className}`}
    />
  );
}

function TypingDots() {
  return (
    <div className="flex w-fit gap-1.5 rounded-[18px] rounded-bl-[4px] border border-blue-200 bg-white px-3.5 py-2.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-[#005CB9] animate-dseu-bounce"
          style={{ animationDelay: `${i * 0.18}s` }}
        />
      ))}
    </div>
  );
}

function Message({ msg }) {
  const isUser = msg.role === "user";
  return (
    <div
      className={`flex max-w-[92%] items-end gap-2 max-md:max-w-[90%] max-md:animate-none md:max-w-[86%] md:animate-dseu-msg-in ${
        isUser ? "flex-row-reverse self-end" : "self-start"
      }`}
    >
      <div
        className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center overflow-hidden rounded-full ${
          isUser ? GRADIENT : "border border-blue-200 bg-white"
        }`}
      >
        {isUser ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
        ) : (
          <HunarAvatar className="h-7 w-7" />
        )}
      </div>
      <div>
        <div
          className={`rounded-[18px] px-3.5 py-2.5 text-[14px] leading-snug [&_em]:italic [&_strong]:font-semibold md:text-[13px] ${
            isUser
              ? `${GRADIENT} rounded-br-[4px] text-white`
              : "rounded-bl-[4px] border border-blue-200 bg-white text-gray-900 shadow-sm"
          }`}
          dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.text) }}
        />
        <div
          className={`mt-1 text-[10px] text-[#718096] ${isUser ? "text-right" : ""}`}
        >
          {msg.time}
        </div>
      </div>
    </div>
  );
}

/**
 * Hunar — DSEU AI chat widget. Use on any page via embed script or React import.
 * @param {{ apiUrl?: string }} props
 */
export default function Chatbot({ apiUrl }) {
  const chatApiUrl = resolveChatApiUrl(
    apiUrl || import.meta.env.VITE_CHAT_API_URL,
  );

  const [open, setOpen] = useState(shouldOpenOnDesktopLoad);
  const [showNotif, setShowNotif] = useState(() => !shouldOpenOnDesktopLoad());
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "bot",
      text: `Namaste! 👋 Main **${CHATBOT_NAME}** hoon — DSEU ka AI assistant.\n\nAdmission, programs, fees, campuses — kuch bhi poochh sakte hain!`,
      time: getTime(),
    },
  ]);

  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const panelRef = useRef(null);
  const textareaRef = useRef(null);
  const scrollRafRef = useRef(null);
  const savedScrollYRef = useRef(0);
  const showQR = messages.length === 1 && !loading;

  const scrollMessagesToBottom = useCallback((smooth = true) => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const run = () => {
      const top = container.scrollHeight - container.clientHeight;
      const useSmooth =
        smooth &&
        !isMobileViewport() &&
        window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
      if (useSmooth) {
        container.scrollTo({ top, behavior: "smooth" });
      } else {
        container.scrollTop = top;
      }
    };

    if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current);
    scrollRafRef.current = requestAnimationFrame(run);
  }, []);

  useEffect(() => {
    if (!open) return;
    scrollMessagesToBottom();
    return () => {
      if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current);
    };
  }, [messages, loading, open, scrollMessagesToBottom]);

  useEffect(() => {
    if (!open) {
      if (!isEmbeddedFrame()) {
        document.body.classList.remove("chatbot-open");
        document.body.style.top = "";
        window.scrollTo(0, savedScrollYRef.current);
      }
      if (panelRef.current) {
        panelRef.current.style.height = "";
        panelRef.current.style.maxHeight = "";
      }
      return;
    }

    if (!isEmbeddedFrame()) {
      savedScrollYRef.current = window.scrollY;
      document.body.classList.add("chatbot-open");
      if (isMobileViewport()) {
        document.body.style.top = `-${savedScrollYRef.current}px`;
      }
    }

    const t = setTimeout(() => scrollMessagesToBottom(false), 80);
    return () => {
      clearTimeout(t);
      if (!isEmbeddedFrame()) {
        document.body.classList.remove("chatbot-open");
        document.body.style.top = "";
        window.scrollTo(0, savedScrollYRef.current);
      }
    };
  }, [open, scrollMessagesToBottom]);

  useEffect(() => {
    if (!open || !isMobileViewport()) return;

    const panel = panelRef.current;
    const vv = window.visualViewport;
    if (!panel || !vv) return;

    const syncPanelToViewport = () => {
      const keyboardGap = Math.max(
        0,
        window.innerHeight - vv.height - vv.offsetTop,
      );
      const keyboardOpen = keyboardGap > 50;
      const sheetHeight = keyboardOpen
        ? vv.height - 8
        : Math.min(vv.height * 0.92, window.innerHeight * 0.92);
      panel.style.height = `${sheetHeight}px`;
      panel.style.maxHeight = `${sheetHeight}px`;
      panel.style.bottom = keyboardOpen ? `${keyboardGap}px` : "0px";
    };

    syncPanelToViewport();
    vv.addEventListener("resize", syncPanelToViewport);
    vv.addEventListener("scroll", syncPanelToViewport);

    return () => {
      vv.removeEventListener("resize", syncPanelToViewport);
      vv.removeEventListener("scroll", syncPanelToViewport);
      panel.style.height = "";
      panel.style.maxHeight = "";
      panel.style.bottom = "";
    };
  }, [open]);

  const handleOpen = () => {
    setOpen((v) => {
      const next = !v;
      if (next) {
        setShowNotif(false);
        if (!isMobileViewport()) {
          setTimeout(() => textareaRef.current?.focus(), 300);
        }
      }
      return next;
    });
  };

  const sendMessage = useCallback(
    async (queryText) => {
      const query = (queryText ?? input).trim();
      if (!query || loading) return;

      setInput("");
      if (textareaRef.current) textareaRef.current.style.height = "auto";

      setMessages((prev) => [
        ...prev,
        { id: Date.now(), role: "user", text: query, time: getTime() },
      ]);
      setLoading(true);

      try {
        const res = await fetch(chatApiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ query }),
        });

        const contentType = res.headers.get("content-type") || "";
        if (!contentType.includes("application/json")) {
          throw new Error(
            "Chat API returned HTML instead of JSON. Redeploy with /api/chat proxy.",
          );
        }

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            role: "bot",
            text:
              data.answer ||
              "Maafi chahta hoon, jawab nahi mil pa raha. Dobara try karein.",
            time: getTime(),
          },
        ]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            role: "bot",
            text: "⚠️ Server se connect nahi ho pa raha. Thodi der baad try karein.",
            time: getTime(),
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [input, loading, chatApiUrl],
  );

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleResize = (e) => {
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 100) + "px";
    setInput(el.value);
  };

  return (
    <div className="relative z-[99990] font-sans">
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-[99997] cursor-default border-0 bg-black/40 md:bg-black/15 md:backdrop-blur-[1px]"
          onClick={handleOpen}
          aria-label="Close chat"
        />
      )}

      <div
        className={`fixed z-[99999] flex items-center gap-3 transition-opacity duration-300 bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-2.5 max-md:max-w-[calc(100vw-0.75rem)] md:bottom-7 md:right-7 md:gap-0 ${
          open
            ? "max-md:pointer-events-none max-md:animate-none max-md:opacity-0"
            : "opacity-100 max-md:animate-dseu-float"
        }`}
      >
        {!open && (
          <button
            type="button"
            onClick={handleOpen}
            className="relative max-md:flex md:hidden min-w-0 flex-1 text-left"
            aria-label={MOBILE_TAGLINE}
          >
            <span
              className={`block rounded-2xl rounded-br-sm border-2 border-[#F4981D] px-3 py-2.5 shadow-[0_6px_22px_rgba(0,92,185,0.55)] ${GRADIENT}`}
            >
              <span className="block text-[13px] font-semibold leading-snug text-white">
                <span className="text-[#FFE8C7]">{CHATBOT_NAME}</span>
                <span className="font-normal text-white/95">
                  {" "}
                  · Ask about admissions, courses & fees
                </span>
              </span>
            </span>
            <span
              className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-[#F4981D] bg-[#0471B5]"
              aria-hidden
            />
          </button>
        )}

        <button
          type="button"
          className={`relative flex h-[4.5rem] w-[4.5rem] shrink-0 touch-manipulation items-center justify-center rounded-full border-[3px] transition-[transform,box-shadow] duration-300 md:h-[72px] md:w-[72px] ${
            open
              ? `max-md:pointer-events-none max-md:scale-90 max-md:opacity-0 md:scale-105 md:opacity-100 border-transparent shadow-[0_8px_32px_rgba(0,92,185,0.55),0_0_0_4px_rgba(255,255,255,0.9)] ${GRADIENT}`
              : "border-[#005CB9] bg-white opacity-100 shadow-[0_10px_28px_rgba(0,92,185,0.45),0_4px_12px_rgba(244,152,29,0.35),0_0_0_4px_rgba(255,255,255,0.95)] md:hover:scale-105 md:animate-dseu-float md:hover:animate-none"
          }`}
          onClick={handleOpen}
          aria-label={`Open ${CHATBOT_NAME} chat`}
          aria-expanded={open}
          tabIndex={open ? -1 : 0}
        >
          {!open && (
            <span className="pointer-events-none absolute inset-0 rounded-full border-2 border-[#F4981D]/70 animate-dseu-ping" />
          )}
          {showNotif && !open && (
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-orange-500 text-[10px] font-bold text-white shadow-md">
              1
            </span>
          )}
          {open ? (
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="white"
              className="max-sm:h-6 max-sm:w-6"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          ) : (
            <HunarAvatar className="h-[3.25rem] w-[3.25rem] md:h-14 md:w-14" />
          )}
        </button>
      </div>

      <div
        ref={panelRef}
        className={`chatbot-sheet fixed z-[99998] flex touch-auto flex-col overflow-hidden bg-white shadow-[0_-8px_40px_rgba(0,92,185,0.22)] transition-[opacity,transform] duration-300 ease-out max-md:inset-x-0 max-md:bottom-0 max-md:w-full max-md:max-w-none max-md:origin-bottom max-md:rounded-none max-md:border-0 max-md:border-t-2 max-md:border-blue-300 md:bottom-[7.75rem] md:right-7 md:h-[560px] md:max-h-[calc(100dvh-10rem)] md:w-[375px] md:max-w-[calc(100vw-20px)] md:origin-bottom-right md:rounded-[22px] md:border-2 md:border-blue-300 md:shadow-[0_16px_48px_rgba(0,92,185,0.28)] ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none max-md:translate-y-full max-md:opacity-0 md:translate-y-3 md:opacity-0 md:scale-[0.92]"
        }`}
        style={
          open && isMobileViewport()
            ? { height: "min(92dvh, 100%)", maxHeight: "92dvh" }
            : undefined
        }
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
        aria-label={`${CHATBOT_NAME} chat`}
      >
        <div
          className="mx-auto mt-2 h-1 w-10 shrink-0 rounded-full bg-blue-200 md:hidden"
          aria-hidden
        />

        <div
          className={`flex shrink-0 items-center gap-3 px-4 py-3 max-md:pt-1 md:px-[18px] md:py-3.5 ${GRADIENT}`}
        >
          <div className="relative flex h-[42px] w-[42px] shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white/50 bg-white p-1">
            <HunarAvatar className="h-full w-full" />
            <span className="absolute right-0 bottom-0 h-[11px] w-[11px] rounded-full border-2 border-[#005CB9] bg-green-400" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold leading-tight text-white">
              {CHATBOT_NAME}
            </div>
            <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-white/80">
              <span className="h-1.5 w-1.5 animate-dseu-float rounded-full bg-green-400" />
              DSEU · AI Assistant
            </div>
          </div>
          <button
            type="button"
            className="flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-full border-0 bg-white/15 p-2 text-white transition-colors active:bg-white/25 md:min-h-0 md:min-w-0 md:bg-transparent md:p-1 md:text-white/70 md:hover:text-white"
            onClick={handleOpen}
            aria-label="Close chat"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="md:h-[18px] md:w-[18px]"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        <div
          ref={messagesContainerRef}
          className="chatbot-messages flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto overflow-x-hidden bg-blue-50 p-3 max-md:px-3.5 md:p-4 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-thumb]:bg-[#005CB9]"
        >
          {messages.map((msg) => (
            <Message key={msg.id} msg={msg} />
          ))}

          {showQR && (
            <div className="flex flex-col gap-2 max-md:animate-none md:flex-row md:flex-wrap md:animate-dseu-msg-in">
              {QUICK_REPLIES.map((qr) => (
                <button
                  key={qr.query}
                  type="button"
                  className="touch-manipulation cursor-pointer rounded-xl border border-[#005CB9] bg-white px-3.5 py-2.5 text-left text-[13px] font-medium text-[#005CB9] transition-colors active:bg-[#005CB9] active:text-white md:rounded-full md:py-1.5 md:text-[11.5px] md:hover:bg-[#005CB9] md:hover:text-white"
                  onClick={() => sendMessage(qr.query)}
                >
                  {qr.label}
                </button>
              ))}
            </div>
          )}

          {loading && (
            <div className="flex max-w-[86%] items-end gap-2 self-start max-sm:animate-none md:animate-dseu-msg-in">
              <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-blue-200 bg-white">
                <HunarAvatar className="h-7 w-7" />
              </div>
              <TypingDots />
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="flex shrink-0 items-end gap-2 border-t border-blue-200 bg-white px-3 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] max-md:gap-2.5 max-md:px-3.5 max-md:pt-3 md:gap-2.5 md:px-3.5 md:pb-[max(1rem,env(safe-area-inset-bottom))]">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleResize}
            onKeyDown={handleKey}
            placeholder={`${CHATBOT_NAME} se apna sawaal likhein...`}
            rows={1}
            enterKeyHint="send"
            autoComplete="off"
            className="min-h-11 max-h-[88px] flex-1 resize-none rounded-2xl border border-blue-200 bg-blue-50 px-3.5 py-3 text-[16px] leading-snug text-gray-900 outline-none transition-colors placeholder:text-gray-500 focus:border-[#005CB9] focus:ring-2 focus:ring-blue-100 md:min-h-10 md:max-h-[100px] md:rounded-[14px] md:py-2.5 md:text-[13px]"
          />
          <button
            type="button"
            onClick={() => sendMessage()}
            disabled={!input.trim() || loading}
            className={`flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-xl border-0 transition-all active:scale-95 enabled:md:hover:scale-105 enabled:md:hover:shadow-[0_4px_12px_rgba(0,92,185,0.4)] disabled:cursor-not-allowed disabled:opacity-40 md:h-10 md:w-10 ${GRADIENT}`}
            aria-label="Send"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
