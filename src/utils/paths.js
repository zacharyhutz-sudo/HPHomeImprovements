const base = import.meta.env.BASE_URL || '/';

const externalPattern = /^(https?:|mailto:|tel:|#)/i;

export function withBase(path = '/') {
  if (externalPattern.test(path)) return path;

  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  if (cleanPath === '/') return `${cleanBase || ''}/`;

  return `${cleanBase}${cleanPath}`;
}
