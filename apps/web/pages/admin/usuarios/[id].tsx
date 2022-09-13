import React from 'react';
import { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { Input } from '@pilot/admin-ui';

import Layout from '../../../components/admin/Layout';

const UsuarioAdmin: NextPage = () => {
  return (
    <Layout>
      <Box mb="20px">
        <Input label="Nombre" />
      </Box>

      <Box>
        <Input label="Apellido" />
      </Box>
    </Layout>
  );
};

export default UsuarioAdmin;
