import { itemsData } from './searchCategoryResultData';
import { baseUrl } from '@api/endpoints';
import { rest } from 'msw';

const handlers = [
  rest.post(baseUrl + '/category', async (req, res, ctx) => {
    const searchKeyword = await req.text()

    const responseData = itemsData.filter(({ title }) => title.includes(searchKeyword))
    return await res(ctx.status(200), ctx.json({ message: 'success', data: responseData }));
  }),
];

export default handlers;
