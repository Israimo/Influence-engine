
export function formatDate(date: string) {
  return new Date(date).toLocaleString();
}

export function shortenText(text: string, maxLength = 100) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
