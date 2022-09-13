import {
  Box,
  Input as InputChakraUI,
  InputProps as InputChakraUIProps,
  Text,
} from '@chakra-ui/react';
import React, { useRef } from 'react';

interface InputProps extends InputChakraUIProps {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, children, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Box>
      <Text
        fontSize="14px"
        color="#333"
        mb="7px"
        onClick={() => inputRef.current?.focus()}
      >
        {label}
      </Text>
      <InputChakraUI
        rounded="2px"
        borderColor="#b3b3b3"
        _hover={{ borderColor: '#b3b3b3' }}
        _focus={{ borderColor: '#222' }}
        _focusVisible={{ borderColor: '#222' }}
        boxShadow="5px 5px 8px 0px rgba(0,0,0,0.08)"
        outline="0"
        ref={inputRef}
        {...rest}
      />
    </Box>
  );
};

export default Input;
