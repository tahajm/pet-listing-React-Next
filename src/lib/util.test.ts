import { describe, expect, it } from 'vitest';

import { toQueryString, updateQueryString } from './util';

describe('toQueryString', () => {
  it('returns empty string for empty input', () => {
    expect(toQueryString({})).toBe('');
  });

  it('serializes a single string value', () => {
    expect(toQueryString({ species: 'cat' })).toBe('species=cat');
  });

  it('serializes multiple string values', () => {
    const result = toQueryString({ species: 'cat', sortBy: 'name' });
    expect(result).toBe('species=cat&sortBy=name');
  });

  it('appends multiple entries for array values', () => {
    const result = toQueryString({ species: ['cat', 'dog'] });
    expect(result).toBe('species=cat&species=dog');
  });

  it('omits undefined values', () => {
    expect(toQueryString({ species: undefined })).toBe('');
  });

  it('omits empty string values', () => {
    expect(toQueryString({ species: '' })).toBe('');
  });
});

describe('updateQueryString', () => {
  it('merges updates over existing params', () => {
    const current = new URLSearchParams('species=cat&sortBy=dateAdded');
    expect(updateQueryString(current, { sortBy: 'name' })).toBe('species=cat&sortBy=name');
  });
});
