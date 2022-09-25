import React from 'react';
import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { Input } from '@pilot/admin-ui';

const Login = () => {
  return (
    <Grid gridTemplateColumns="1fr 500px" h="100vh">
      <Box h="full" p="20px" position="relative">
        <Image
          src="/login.jpg"
          rounded="10px"
          alt=""
          w="full"
          h="full"
          objectFit="cover"
        />

        <Box
          position="absolute"
          bgColor="#333"
          w="500px"
          // h="500px"
          rounded="10px"
          bottom="40px"
          left="40px"
          p="20px"
          boxShadow="7px 7px 5px 0px rgba(0,0,0,0.3)"
        >
          <Text
            fontSize="4xl"
            fontWeight="medium"
            color="white"
            lineHeight="40px"
            mb="20px"
          >
            Administrador de contenido
          </Text>

          <Text fontSize="20px" color="white">
            Inicia sesión para realizar cambios en el sitio web
          </Text>
        </Box>
      </Box>
      <Flex
        alignItems="center"
        flexDir="column"
        justifyContent="center"
        h="full"
        p="20px"
        pr="40px"
      >
        <Box w="full" mb="20px">
          <Input w="full" label="Email" />
        </Box>
        <Box w="full">
          <Input label="Contraseña" w="full" type="password" />
        </Box>

        <Button
          h="50px"
          color="white"
          rounded="3px"
          mt="20px"
          w="full"
          bgColor="#333"
          _hover={{ color: '#fff' }}
          _focus={{ bgColor: '#666' }}
        >
          Ingresar
        </Button>
      </Flex>
    </Grid>
  );
};

export default Login;
