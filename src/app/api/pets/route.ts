import type { NextRequest } from 'next/server';

import { data as petsData } from './data';
import type { Pet } from '@/types';

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  let filteredData: Pet[] = [...petsData];

  searchParams.forEach((searchValue, searchKey) => {
    if (searchKey === 'sortBy' || searchKey === 'order') return;

    filteredData = filteredData.filter(pet => {
      if (!isPetKey(searchKey, pet)) return true;

      const petValue = pet[searchKey];
      if (typeof petValue === 'number') return petValue === Number(searchValue);
      if (typeof petValue === 'boolean') return String(petValue) === searchValue;
      if (typeof petValue === 'string') {
        return petValue.toLowerCase().includes(searchValue.toLowerCase());
      }
      return false;
    });
  });

  const sortBy = searchParams.get('sortBy') ?? 'name';

  filteredData = getSortedPets(filteredData, sortBy);

  const order = searchParams.get('order');
  if (order === 'desc') {
    return Response.json(filteredData.toReversed());
  }

  return Response.json(filteredData);
}

function getSortedPets(pets: Pet[], sortBy: string) {
  return pets.toSorted((petA, petB) => {
    if (!isPetKey(sortBy, petA) || !isPetKey(sortBy, petB)) return 0;

    const valueA = petA[sortBy];
    const valueB = petB[sortBy];

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      if (isValidDate(valueA) && isValidDate(valueB)) {
        return parseDate(valueA).getTime() - parseDate(valueB).getTime();
      }
      return valueA.localeCompare(valueB);
    } else if (typeof valueA === 'number' && typeof valueB === 'number') {
      return valueA - valueB;
    } else if (typeof valueA === 'boolean' && typeof valueB === 'boolean') {
      return Number(valueA) - Number(valueB);
    }
    return 0;
  });
}

function isPetKey(key: string, pet: Pet): key is keyof Pet {
  return key in pet;
}

function parseDate(dateString: string) {
  const [day, month, year] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date;
}

function isValidDate(dateString: string) {
  return /\d{2}-\d{2}-\d{4}/.test(dateString);
}
