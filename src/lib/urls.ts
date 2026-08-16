/** URLs placeholder (# ou vazias) não devem abrir nova aba. */
export function isPlaceholderUrl(url: string): boolean {
  return !url || url === "#";
}

/** Prefixa arquivos de `public/` com o base path (GitHub Pages em subpasta). */
export function publicUrl(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return `${normalizedBase}${normalizedPath}`;
}
