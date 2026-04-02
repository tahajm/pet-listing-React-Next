import { Pet } from '@/types';
import { petsApiConfig } from '@/lib/config';

export async function getPets(params?: string): Promise<Pet[]> {
  const response = await fetch(`${petsApiConfig.url}?${params}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch pets: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
