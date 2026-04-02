import { Pet } from '@/types';
import { petsApiConfig } from '@/lib/config';
import { cacheLife } from 'next/cache';

export async function getPets(params?: string): Promise<Pet[]> {
  const response = await fetch(`${petsApiConfig.url}?${params}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch pets: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function getSpecies(): Promise<string[]> {
  'use cache';
  cacheLife('hours');

  const response = await fetch(`${petsApiConfig.speciesUrl}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch species: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
