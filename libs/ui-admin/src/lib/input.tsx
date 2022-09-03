import { Input as InputUI, InputProps } from '@chakra-ui/react';

export const Input: React.FC<InputProps> = ({ ...rest }) => {
  return <InputUI {...rest} />;
};
