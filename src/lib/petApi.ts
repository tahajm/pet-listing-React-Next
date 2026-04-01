import { Pet } from '@/types';
import { PETS_API_URL } from '@/lib/config';

export async function getPets(params?: string): Promise<Pet[]> {
  const response = await fetch(`${PETS_API_URL}?${params}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch pets: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
