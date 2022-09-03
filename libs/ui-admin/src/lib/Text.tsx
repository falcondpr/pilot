import { Text as TextUI, TextProps } from '@chakra-ui/react';

export const Text: React.FC<TextProps> = ({ children, ...rest }) => {
  return <TextUI {...rest}>{children}</TextUI>;
};
