export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

export const petsApiConfig = {
  url: `${BASE_URL}/api/pets`,
  speciesUrl: `${BASE_URL}/api/pets/species`,
};
