import { petsApiConfig } from '@/lib/config';
import type { Pet } from '@/types';

export async function getPets(params?: string): Promise<Pet[]> {
  const response = await fetch(`${petsApiConfig.url}?${params}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch pets: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
