import { rest } from 'msw';
import { BASE_URL, CHARACTER_ENDPOINT } from 'services/characterService';
import { allCharacterStub, characterStub } from './mockData';

export const handlers = [
  rest.get(`${BASE_URL}${CHARACTER_ENDPOINT}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(allCharacterStub));
  }),
  rest.get(`${BASE_URL}${CHARACTER_ENDPOINT}/:characterId`, (req, res, ctx) => {
    const { characterId } = req.params;
    return res(
      ctx.status(200),
      ctx.json({ ...characterStub, id: characterId, name: `user${characterId}` })
    );
  }),
];
