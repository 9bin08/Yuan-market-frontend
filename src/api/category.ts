import apiClient from '@api/client';

export const requestCategory = async () => {
  return await apiClient.get('/category');
};


