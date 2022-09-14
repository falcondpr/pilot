import {
  Box,
  TextareaProps as TextareaChakraUIProps,
  Textarea as TextareaChakraUI,
  Text,
  Grid,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ObjectID } from 'bson';
import { FaPlus, FaTrash } from 'react-icons/fa';
import produce from 'immer';

export interface DescriptionUser {
  _id: string;
  text: string;
}

interface TextareaProps extends TextareaChakraUIProps {
  label?: string;
  array?: DescriptionUser[];
}

export const Textarea: React.FC<TextareaProps> = ({
  array,
  label,
  ...rest
}) => {
  const [descriptionArray, setDescriptionArray] = useState<DescriptionUser[]>(
    array || []
  );

  const handleAddDescription = () => {
    setDescriptionArray([
      ...descriptionArray,
      { _id: new ObjectID().toString(), text: '' },
    ]);
  };

  const handleDeleteDescription = (id: string) => {
    setDescriptionArray((description) =>
      description.filter((item) => item._id !== id)
    );
  };

  return (
    <Box>
      <Text fontSize="14px" color="#333" mb="7px">
        {label}
      </Text>

      <Box>
        {descriptionArray.map((description, index: number) => (
          <Grid
            key={description._id}
            gridTemplateColumns="40px 1fr repeat(2, 50px)"
            gap="15px"
            mb="20px"
          >
            <Grid
              bgColor="#b3b3b3"
              placeItems="center"
              rounded="2px"
              boxShadow="5px 5px 8px 0px rgba(0,0,0,0.08)"
            >
              <Text fontWeight="bold" color="white">
                {index + 1}
              </Text>
            </Grid>
            <TextareaChakraUI
              rounded="2px"
              borderColor="#b3b3b3"
              boxShadow="5px 5px 8px 0px rgba(0,0,0,0.08)"
              resize="none"
              h="7rem"
              outline="0"
              {...rest}
              _hover={{ borderColor: '#b3b3b3' }}
              _focus={{ borderColor: '#222' }}
              _focusVisible={{ borderColor: '#222' }}
              value={description.text}
              onChange={(e) => {
                const text = e.target.value;

                setDescriptionArray((currentDescription) =>
                  produce(currentDescription, (v) => {
                    v[index].text = text;
                  })
                );
              }}
            />
            <Button
              rounded="2px"
              bgColor="#a0a0a0"
              h="full"
              fontSize="12px"
              color="white"
              _hover={{ bgColor: '#8c8c8c' }}
              _focus={{ bgColor: '#a0a0a0' }}
              boxShadow="5px 5px 8px 0px rgba(0,0,0,0.08)"
              onClick={handleAddDescription}
            >
              <FaPlus />
            </Button>
            <Button
              rounded="2px"
              bgColor="#333"
              h="full"
              fontSize="12px"
              color="white"
              _hover={{ bgColor: '#111' }}
              _focus={{ bgColor: '#333' }}
              boxShadow="5px 5px 8px 0px rgba(0,0,0,0.08)"
              onClick={() => handleDeleteDescription(description._id)}
            >
              <FaTrash />
            </Button>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default Textarea;
