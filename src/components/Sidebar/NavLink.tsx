import { ElementType } from "react";
import {
  Link,
  Text,
  Icon,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}

// ...rest -> todas as props que o Link pode receber
// (ex: se eu tiver que passar alguma estilização adicional por exemplo)
export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
