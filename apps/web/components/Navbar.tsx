import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { GiCardboardBoxClosed } from 'react-icons/gi';

// import { NavLink } from '@pilot/ui-admin';

const Navbar: React.FC = () => {
  return (
    <Box width="340px" h="100vh" bgColor="gray.50">
      <Flex
        as="header"
        alignItems="center"
        p="20px"
        cursor="pointer"
        onClick={() => console.log('index')}
      >
        <Text fontSize="48px">
          <GiCardboardBoxClosed />
        </Text>
        <Text
          ml="10px"
          fontSize="20px"
          fontWeight="semibold"
          textTransform="uppercase"
        >
          Admin
        </Text>
      </Flex>

      <Box p="20px">
        <Text fontWeight="semibold" mb="14px" color="#999">
          Páginas
        </Text>

        {/* <NavLink href="/">Inicio</NavLink>
        <NavLink href="/">Nosotros</NavLink> */}
      </Box>
    </Box>
  );
};

export default Navbar;
