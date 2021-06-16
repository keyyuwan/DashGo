import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // ChakraProvider -> contexto: todos meus componentes terão acesso as infos do Chakra (temas)
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
