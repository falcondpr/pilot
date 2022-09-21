import axios from '../config/axios';

export const getUsers = async () => {
  const response = await axios({
    method: 'GET',
    url: '/users',
  });

  return response.data;
};

export const getUser = async (id: string) => {
  const response = await axios({
    method: 'GET',
    url: `/users/${id}`,
  });

  return response.data;
};

export const updateUser = async (id: string, data: any) => {
  const response = await axios({
    method: 'PATCH',
    url: `/users/${id}`,
    data: JSON.stringify(data),
  });

  return response.data;
};
