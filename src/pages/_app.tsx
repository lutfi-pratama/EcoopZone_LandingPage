import { AppProps } from "next/app";

import "swiper/css";
import "swiper/css/navigation";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
