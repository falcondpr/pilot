import NextLink from 'next/link';
import { Link as LinkChakraUI, LinkProps } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface NavLinkProps extends LinkProps {
  href: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  ...rest
}) => {
  const router = useRouter();

  return (
    <NextLink href={href}>
      <LinkChakraUI
        borderBottom="1px solid"
        borderColor={href === router.pathname ? '#333' : 'transparent'}
        w="max-content"
        display="block"
        fontWeight="semibold"
        color="#555"
        mb="5px"
        py="4px"
        pb="0px"
        {...rest}
        _hover={{ textDecor: 'none', borderColor: '#a0a0a0' }}
      >
        {children}
      </LinkChakraUI>
    </NextLink>
  );
};

export default NavLink;
