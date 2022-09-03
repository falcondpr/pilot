import { Input as InputUI, InputProps } from '@chakra-ui/react';

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return <InputUI {...rest} />;
};

export default Input;
