import getUrlSearchParams from 'helpers/getUrlSearchParams';
import { CharacterResponse, CharacterType, InfoType } from 'types/types';

const BASE_URL = 'https://rickandmortyapi.com/api';
const CHARACTER_ENDPOINT = '/character';

class CharacterService {
  async getAll(
    search: string | null,
    currentPage: number,
    abortSignal?: AbortSignal
  ): Promise<[InfoType, Array<CharacterType>]> {
    const response = await fetch(
      `${BASE_URL}${CHARACTER_ENDPOINT}${getUrlSearchParams(search, currentPage)}`,
      {
        signal: abortSignal,
      }
    );
    const { info, results }: CharacterResponse = await response.json();
    return [info, results];
  }

  async getCharacterById(cracterId: number, abortSignal?: AbortSignal): Promise<CharacterType> {
    const response = await fetch(`${BASE_URL}${CHARACTER_ENDPOINT}/${cracterId}`, {
      signal: abortSignal,
    });
    const character: CharacterType = await response.json();
    return character;
  }
}

export default new CharacterService();
