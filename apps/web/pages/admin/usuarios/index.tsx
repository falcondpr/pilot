import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { Box, Text } from '@chakra-ui/react';

import Layout from '../../../components/admin/Layout';
import { getUsers } from '../../../utils/users';
import { UserProps } from '../../../interfaces/user';

const Usuarios: NextPage = () => {
  const router = useRouter();
  const { data: users, isFetching } = useQuery(['users'], getUsers);

  return (
    <Layout>
      <Box>
        {isFetching ? (
          <Box>
            <Text>Cargando..</Text>
          </Box>
        ) : (
          users?.data.map((user: UserProps, index: number) => (
            <Box
              key={user?._id}
              border="1px solid #999"
              borderTop={
                users?.data.length === 1
                  ? '1px solid #999'
                  : index === users?.data.length - 1 && '0'
              }
              p="10px"
              cursor="pointer"
              onClick={() => router.push(`/admin/usuarios/${user?._id}`)}
            >
              {user?.name}
            </Box>
          ))
        )}
      </Box>
    </Layout>
  );
};

export default Usuarios;
