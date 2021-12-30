import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { MovieContextProvider } from "../context/MovieContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MovieContextProvider>
      <Component {...pageProps} />
    </MovieContextProvider>
  );
}

export default MyApp;
