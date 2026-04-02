import { cacheLife } from 'next/cache';
import { petsApiConfig } from '@/lib/config';

export async function getSpecies(): Promise<string[]> {
  'use cache';
  cacheLife('hours');

  const response = await fetch(`${petsApiConfig.speciesUrl}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch species: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
