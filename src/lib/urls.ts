/** URLs placeholder (# ou vazias) não devem abrir nova aba. */
export function isPlaceholderUrl(url: string): boolean {
  return !url || url === "#";
}
