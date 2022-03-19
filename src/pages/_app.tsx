import type { AppProps } from "next/app";

import AppLayout from "../layouts/AppLayout";

import "assets/css/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
