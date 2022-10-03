// utils/utils.js

// return a formatted date
export function getDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function removeHTMLTags(str) {
  return str.replace(/<[^>]*>?/gm, "");
}
