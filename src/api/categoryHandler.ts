import { category } from './categoryResultData';
import { baseUrl } from '@api/endpoints';
import { rest } from 'msw';

const handlers = [
  rest.get(baseUrl + '/category', async (req, res, ctx) => {
    return await res(ctx.status(200), ctx.json({ message: 'success', data: category }));
  }),
];

export default handlers;
