import type { NextRequest } from 'next/server';

import { data as petsData } from './data';

type PetsData = Record<string, string | number | boolean>[];

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  let filteredData: PetsData = [...petsData];

  searchParams.forEach((searchValue, searchKey) => {
    if (filteredData.some(pet => searchKey in pet)) {
      filteredData = filteredData.filter(pet => {
        if (typeof pet[searchKey] === 'number') {
          return pet[searchKey] === Number(searchValue);
        }
        if (typeof pet[searchKey] === 'boolean') {
          return String(pet[searchKey]) === searchValue;
        }
        return pet[searchKey].toLowerCase().includes(searchValue.toLowerCase());
      });
    }
  });

  const sortBy = searchParams.get('sortBy');
  if (!sortBy) {
    return Response.json(filteredData);
  }

  filteredData = getSortedPets(filteredData, sortBy);

  const order = searchParams.get('order');
  if (order === 'desc') {
    return Response.json(filteredData.toReversed());
  }

  return Response.json(filteredData);
}

function getSortedPets(pets: PetsData, sortBy: string) {
  return pets.toSorted((petA, petB) => {
    if (!(sortBy in petA) && !(sortBy in petB)) {
      return 0;
    }

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

function parseDate(dateString: string) {
  const [day, month, year] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date;
}

function isValidDate(dateString: string) {
  return /\d{2}-\d{2}-\d{4}/.test(dateString);
}
