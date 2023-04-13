import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CharacterResponse, CharacterType } from 'types/types';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CharacterResponse, string>({
      query: (search) => {
        return search ? `/character?name=${search}` : '/character';
      },
    }),
    getCharacter: builder.query<CharacterType, number>({
      query: (characterId) => `/character/${characterId}`,
    }),
  }),
});

export default apiSlice;
