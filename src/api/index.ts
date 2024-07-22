import { ApiResponse, Character, Info } from './types';

const urlApi = 'https://rickandmortyapi.com/api/character';

export const getData = async (value: string = '', page: number = 1) => {
  try {
    const respTxt: string =
      (value ? `/?name=${value}` : '') + (page > 1 ? `/?page=${page}` : '');
    const response: Response = await fetch(urlApi + respTxt);
    if (response.ok) {
      const data: Promise<ApiResponse> = await response.json();
      const result: Character[] = (await data).results;
      const info: Info = (await data).info;
      return { data: result, info: info };
    }
    return;
  } catch (err) {
    console.error(err);
  }
};
