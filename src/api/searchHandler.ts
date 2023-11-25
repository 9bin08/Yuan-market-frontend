import { goodsData } from './goodsResultData';
import { baseUrl } from '@api/endpoints';
import { rest } from 'msw';

const handlers = [
  rest.post(baseUrl + '/search', async (req, res, ctx) => {
    const searchKeyword = await req.text()

    const responseData = goodsData
    .filter(({ title }) => title.includes(searchKeyword))
    .map(({title})=> title)

    return await res(ctx.status(200), ctx.json({ message: 'success', data: responseData }));
  }),
];

export default handlers;
