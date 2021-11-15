import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import "../styles/normalize.css";
import "../styles/reset.css";

import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import { RecoilRoot } from "recoil";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
