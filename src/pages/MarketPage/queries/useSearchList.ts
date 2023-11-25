import { useQuery } from 'react-query';
import { requestSearch } from '@api/search';

const fetchSearchList = async (keyword: string) => {
  const response = await requestSearch(keyword);
  return response.data.data;
};

export const useSearchListQuery = (keyword: string) => {
  return useQuery(['search', keyword], () => fetchSearchList(keyword), {
    enabled: (keyword.length > 0),
  });
};
