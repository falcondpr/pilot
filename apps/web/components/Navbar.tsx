import React from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { GiCardboardBoxClosed } from 'react-icons/gi';
import { MdLogout } from 'react-icons/md';

import { NavLink } from '@pilot/admin-ui';

const Navbar: React.FC = () => {
  return (
    <Box width="340px" h="100vh" bgColor="gray.50" position="relative">
      <Box h="calc(100vh - 150px)" overflowY="scroll" position="relative">
        {/* TODO: blur bottom */}
        <Box></Box>

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

          <NavLink href="/">Inicio</NavLink>
          <NavLink href="/">Nosotros</NavLink>
          <NavLink href="/">Reseñas</NavLink>
          <NavLink href="/">Productos</NavLink>
          <NavLink href="/">Clientes</NavLink>
          <NavLink href="/">Marcas</NavLink>
        </Box>

        <Box p="20px">
          <Text fontWeight="semibold" mb="14px" color="#999">
            Categorías
          </Text>

          <NavLink href="/">Inicio</NavLink>
          <NavLink href="/">Nosotros</NavLink>
        </Box>
      </Box>

      <Flex
        h="150px"
        position="absolute"
        w="full"
        bottom="0"
        p="24px 20px"
        flexDir="column"
        justifyContent="space-between"
      >
        <Button w="max-content" minW="initial" h="auto" rounded="full" p="0">
          <Image src="/user.png" alt="Profile" w="32px" />
        </Button>

        <Button
          w="max-content"
          minW="initial"
          h="auto"
          p="0"
          fontSize="32px"
          bgColor="transparent"
          color="#555"
          _hover={{ bgColor: 'transparent', color: '#000' }}
          _focus={{ bgColor: 'transparent' }}
        >
          <MdLogout />
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
