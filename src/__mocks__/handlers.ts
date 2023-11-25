import searchGoods from '@api/goodsHandler';
import category from '@api/categoryHandler';
import search from '@api/searchHandler';

export const handlers = [...searchGoods, ...category, ...search];
