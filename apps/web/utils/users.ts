import axios from '../config/axios';

export const getUsers = async () => {
  const response = await axios({
    method: 'GET',
    url: '/users',
  });

  return response.data;
};
