import { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { Text } from '@pilot/admin-ui';

const Home: NextPage = () => {
  return (
    <Box>
      {/* <Input /> */}
      <Text color="primary" border="1px solid" borderColor="blue.600">
        Hello world from Libs nx workspace
      </Text>
    </Box>
  );
};

export default Home;
