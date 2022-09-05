import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

import Navbar from '../Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex h="100vh">
      <Navbar />
      <Box w="full">
        <Box px="32px" py="20px" bgColor="gray.50">
          <Text fontSize="20px" color="#333">
            Bienvenido{' '}
            <Text fontWeight="semibold" as="span">
              Lucas
            </Text>
            !
          </Text>
        </Box>
        <Box p="20px 32px">{children}</Box>
      </Box>
    </Flex>
  );
};

export default Layout;
