import { requestGoods } from '@api/goods';
import { useQuery } from 'react-query';

const fetchGoodsList = async (keyword: string, categories: string[]) => {
  const response = await requestGoods(keyword, categories);
  return response.data.data;
};

export const useGoodsListQuery = (keyword: string, categories: string[]) => {
  return useQuery(['goods', keyword, categories], () => fetchGoodsList(keyword, categories), {
    enabled: (keyword.length > 0),
  });
};

export default useGoodsListQuery;
