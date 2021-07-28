import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";
import { makeServer } from "../services/mirage";
import { theme } from "../styles/theme";

// variável setada de forma automática pelo next
if (process.env.NODE_ENV === "development") {
  makeServer();
}

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
