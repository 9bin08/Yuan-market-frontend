import apiClient from '@api/client';

export const requestCategory = async (keyword: string) => {
  return await apiClient.post('/category', keyword);
};


