export const generateSlug = (name) => {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

export const unslugify = (slug) => {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};
