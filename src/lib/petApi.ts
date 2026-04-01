import { Pet } from '@/types';
import { PETS_API_URL, SPECIES_API_URL } from '@/lib/config';

export async function getPets(params?: string): Promise<Pet[]> {
  const response = await fetch(`${PETS_API_URL}?${params}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch pets: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function getSpecies(): Promise<string[]> {
  const REVALIDATE_TIME = 3600;

  const response = await fetch(`${SPECIES_API_URL}`, {
    next: { revalidate: REVALIDATE_TIME },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch species: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
