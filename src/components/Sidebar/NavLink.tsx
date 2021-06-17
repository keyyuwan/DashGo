import { ElementType } from "react";
import {
  Link as ChakraLink,
  Text,
  Icon,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import Link from "next/link";

import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

// ...rest -> todas as props que o Link pode receber
// (ex: se eu tiver que passar alguma estilização adicional por exemplo)
export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
