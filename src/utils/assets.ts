/** Resolve public assets under both root and GitHub Pages repository paths. */
export function assetPath(path: string): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
