export interface Pet {
  id: number;
  name: string;
  species: string;
  available: boolean;
  birthYear: number;
  dateAdded: string;
  photoUrl: string;
}

export type SearchParams = Record<string, string | string[] | undefined>;
