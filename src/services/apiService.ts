import * as RTKQueryPackage from '@reduxjs/toolkit/dist/query/react/index.js';
import getUrlSearchParams from 'helpers/getUrlSearchParams';
import { CharacterResponse, CharacterType } from 'types/types';
import { fetch, Headers, Request, Response } from 'cross-fetch';

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
  globalThis.Headers = Headers;
  globalThis.Request = Request;
  globalThis.Response = Response;
}

const isProduction = process.env.NODE_ENV === 'production';

type RTKQueryType = typeof RTKQueryPackage;

interface DefaultQuery extends RTKQueryType {
  default: unknown;
}
const { fetchBaseQuery, buildCreateApi, coreModule, reactHooksModule } = isProduction
  ? ((RTKQueryPackage as DefaultQuery).default as RTKQueryType)
  : (RTKQueryPackage as RTKQueryType);

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

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
