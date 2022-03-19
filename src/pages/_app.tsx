import type { AppProps } from "next/app";

import AppLayout from "../layouts/AppLayout";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "assets/css/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
