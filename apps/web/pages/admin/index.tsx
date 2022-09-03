import React from 'react';
import { NextPage } from 'next';
import { Box, Flex } from '@chakra-ui/react';

import Navbar from '../../components/Navbar';

const Admin: NextPage = () => {
  return (
    <Flex h="100vh">
      <Navbar />
      <Box w="full">hello</Box>
    </Flex>
  );
};

export default Admin;
