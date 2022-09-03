import NextLink from 'next/link';
import { Link, LinkProps } from '@chakra-ui/react';

interface NavLinkProps extends LinkProps {
  href: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  ...rest
}) => {
  return (
    <NextLink href={href} passHref>
      <Link
        w="max-content"
        display="block"
        fontWeight="semibold"
        color="#555"
        mb="5px"
        py="4px"
        {...rest}
      >
        {children}
      </Link>
    </NextLink>
  );
};
