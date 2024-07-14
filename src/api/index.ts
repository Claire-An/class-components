import { ApiResponse, Character } from './types';

const urlApi = 'https://rickandmortyapi.com/api/character';

export const getData = async (value: string = '') => {
  try {
    const response: Response = value
      ? await fetch(urlApi + `/?name=${value}`)
      : await fetch(urlApi);
    if (response.ok) {
      const data: Promise<ApiResponse> = await response.json();
      const result: Character[] = (await data).results;
      return { data: result };
    }
    return;
  } catch (err) {
    console.error(err);
  }
};
