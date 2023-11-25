import { requestCategory } from '@api/category';

import { useQuery } from 'react-query';

const fetchCategoryList = async () => {
    const response = await requestCategory();
    return response.data.data;
  };

  export const useCategoryListQuery = () => {
    return useQuery(['categoryList'], () => fetchCategoryList());
  };

export default useCategoryListQuery;
