import NextLink from 'next/link';
import { Link as LinkChakraUI, LinkProps } from '@chakra-ui/react';

interface NavLinkProps extends LinkProps {
  href: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  ...rest
}) => {
  return (
    <NextLink href={href}>
      <LinkChakraUI
        w="max-content"
        display="block"
        fontWeight="semibold"
        color="#555"
        mb="5px"
        py="4px"
        {...rest}
      >
        {children}
      </LinkChakraUI>
    </NextLink>
  );
};

export default NavLink;
