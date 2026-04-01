import { NextRequest } from 'next/server';
import { describe, expect, it } from 'vitest';

import { GET } from './route';

const makeRequest = (params = '') =>
  new NextRequest(`http://localhost/api/pets${params ? `?${params}` : ''}`);

describe('GET /api/pets', () => {
  it('returns all pets sorted by name by default', async () => {
    const response = await GET(makeRequest());
    const data = await response.json();

    expect(data[0].name).toBe('Ace');
    expect(data[data.length - 1].name).toBe('Toby');
  });

  it('filters by species', async () => {
    const response = await GET(makeRequest('species=Cat'));
    const data = await response.json();

    expect(data).toHaveLength(7);
    expect(data.every((pet: { species: string }) => pet.species === 'Cat')).toBe(true);
  });

  it('sorts by dateAdded descending', async () => {
    const response = await GET(makeRequest('sortBy=dateAdded&order=desc'));
    const data = await response.json();

    expect(data[0].name).toBe('Arlo');
    expect(data[data.length - 1].name).toBe('Ace');
  });

  it('ignores unknown filter keys', async () => {
    const response = await GET(makeRequest('foo=bar'));
    const data = await response.json();

    expect(data).toHaveLength(20);
  });
});
