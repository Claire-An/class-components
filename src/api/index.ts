import { ApiObj, ApiResponse } from './types';

const urlApi = 'https://rickandmortyapi.com/api/character';

export const getData = async (value: string = '') => {
  try {
    const response: Response = value
      ? await fetch(urlApi + `/?name=${value}`)
      : await fetch(urlApi);
    const data: Promise<ApiResponse> = await response.json();
    const result: ApiObj[] = (await data).results;
    return { data: result };
  } catch (err) {
    console.error(err);
  }
};
