import { goodsData } from './goodsResultData';
import { baseUrl } from '@api/endpoints';
import { rest } from 'msw';

const handlers = [
  rest.post(baseUrl + '/goods', async (req, res, ctx) => {
    const payload = await req.text()
    const { keyword, categories } = JSON.parse(payload)
    const flatCategories = categories.flatMap((category:string) => category.split('/'));

    const responseData = goodsData.filter(({ title }) => {
      const includesCategory = title.includes(keyword) && (flatCategories.length === 0 || flatCategories.some((category: string) => category.includes(title)));
      return includesCategory;
    });


    return await res(ctx.status(200), ctx.json({ message: 'success', data: responseData }));
  }),
];

export default handlers;
