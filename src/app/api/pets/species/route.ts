import { data as petsData } from '../data';

export function GET() {
  const distinctSpecies: string[] = [...new Set(petsData.map(pet => pet.species))].sort();

  return Response.json(distinctSpecies);
}
