import type { SearchParams } from '@/types';

export function toQueryString(input: SearchParams) {
  const params = new URLSearchParams();

  Object.entries(input).forEach(([key, value]) => {
    if (!value) return;

    if (Array.isArray(value)) {
      value.forEach(v => params.append(key, v));
    } else {
      params.set(key, value);
    }
  });

  return params.toString();
}

export function updateQueryString(current: URLSearchParams, updates: SearchParams): string {
  return toQueryString({ ...Object.fromEntries(current.entries()), ...updates });
}
