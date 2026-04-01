import { Pet } from '@/types';
import { petsApiConfig } from '@/lib/config';

export async function getPets(params?: string): Promise<Pet[]> {
  const response = await fetch(`${petsApiConfig.url}?${params}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch pets: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function getSpecies(): Promise<string[]> {
  const response = await fetch(`${petsApiConfig.speciesUrl}`, {
    next: { revalidate: petsApiConfig.speciesRevalidateTime },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch species: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
