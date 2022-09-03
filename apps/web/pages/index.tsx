import { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { Input, Text } from '@pilot/ui-admin';

const Home: NextPage = () => {
  return (
    <Box>
      <Input />
      <Text color="primary" border="1px solid" borderColor="blue.600">
        Hello world from Libs nx workspace
      </Text>
    </Box>
  );
};

export default Home;
