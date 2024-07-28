import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse, TypeQuery } from '../api/types';

const urlApi = 'https://rickandmortyapi.com/api/character';

export const getData = createApi({
  reducerPath: 'rickandmortyAPI',
  baseQuery: fetchBaseQuery({ baseUrl: urlApi }),
  endpoints: (build) => ({
    getDataApi: build.query<ApiResponse, TypeQuery>({
      query: ({ page, name = '' }) => {
        const valName = name ? `name=${name || ''}` : '';
        const valPage = page ? (name ? `&page=${page}` : `page=${page}`) : '';
        return `/?${valName}${valPage}`;
      },
    }),
  }),
});

// export const useGetDataApi: (arg: TypeQuery) => ReturnType<typeof getData.endpoints.getDataApi.useQuery> = getData.endpoints.getDataApi.useQuery;
