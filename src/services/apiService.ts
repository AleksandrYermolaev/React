import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getUrlSearchParams from 'helpers/getUrlSearchParams';
import { CharacterResponse, CharacterType } from 'types/types';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CharacterResponse, { search: string; page: number }>({
      query: ({ search, page }) => {
        return `/character${getUrlSearchParams(search, page)}`;
      },
    }),
    getCharacter: builder.query<CharacterType, number>({
      query: (characterId) => `/character/${characterId}`,
    }),
  }),
});

export const { useGetCharacterQuery, useGetCharactersQuery } = apiSlice;

export default apiSlice;
