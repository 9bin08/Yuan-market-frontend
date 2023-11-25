import apiClient from '@api/client';

export const requestSearch = async (keyword: string) => {
  return await apiClient.post('/search', keyword);
};


