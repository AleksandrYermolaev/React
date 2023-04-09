import { CharacterResponse } from 'types/types';

export const allCharacterStub: CharacterResponse = {
  info: {
    count: 2,
    pages: 1,
    next: '',
    prev: '',
  },
  results: [
    {
      id: 1,
      name: 'user1',
      status: 'alive',
      species: 'human',
      type: '',
      gender: 'male',
      origin: {
        name: 'Earth',
        url: '',
      },
      location: {
        name: 'Earth',
        url: '',
      },
      image: '',
      episode: ['1', '2', '3'],
      url: '',
      created: '',
    },
    {
      id: 2,
      name: 'user2',
      status: 'dead',
      species: 'alien',
      type: '',
      gender: 'female',
      origin: {
        name: 'Earth',
        url: '',
      },
      location: {
        name: 'Earth',
        url: '',
      },
      image: '',
      episode: ['1', '2'],
      url: '',
      created: '',
    },
  ],
};

export const characterStub = {
  id: 1,
  name: 'user1',
  status: 'alive',
  species: 'human',
  type: '',
  gender: 'male',
  origin: {
    name: 'Earth',
    url: '',
  },
  location: {
    name: 'Earth',
    url: '',
  },
  image: '',
  episode: ['1', '2', '3'],
  url: '',
  created: '',
};
