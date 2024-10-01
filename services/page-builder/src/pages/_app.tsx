import type { AppProps } from "next/app";
import { ToastProvider } from "@fastcampus/react-components-toast";
import "@/src/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
};

export default App;
