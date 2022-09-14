import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { Box, Text } from '@chakra-ui/react';
import { Input, Textarea } from '@pilot/admin-ui';

import Layout from '../../../components/admin/Layout';
import { getUser } from '../../../utils/users';
import { UserProps } from '../../../interfaces/user';

const UsuarioAdmin: NextPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<UserProps | null>(null);

  const { data, isSuccess } = useQuery(['user', router?.query.id], () =>
    getUser(router?.query.id as string)
  );

  useEffect(() => {
    setUser(data?.data);
  }, [isSuccess, data]);

  return (
    <Layout>
      <Box mb="20px">
        <Input label="Nombre" value={user?.name} />
      </Box>

      <Box>
        <Input label="Email" value={user?.email} />
      </Box>

      <Box w="50%" mt="20px">
        {user?.description && (
          <Textarea array={user.description} label="Description" />
        )}
      </Box>
    </Layout>
  );
};

export default UsuarioAdmin;
