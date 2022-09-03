import { Text as TextUI, TextProps } from '@chakra-ui/react';

const Text: React.FC<TextProps> = ({ children, ...rest }) => {
  return <TextUI {...rest}>{children}</TextUI>;
};

export default Text;
