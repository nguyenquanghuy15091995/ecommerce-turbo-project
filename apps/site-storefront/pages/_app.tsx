import "../styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "ui/styles/index.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
