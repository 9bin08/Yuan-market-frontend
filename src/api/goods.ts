import apiClient from '@api/client';

export const requestGoods = async (keyword: string, categories: string[]) => {
  return await apiClient.post('/goods', { keyword, categories });
};