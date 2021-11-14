import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/normalize.css";
import "../styles/reset.css";

import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
