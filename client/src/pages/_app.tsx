import { CurrentUserProvider } from "@/components/CurretnUserProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Searchcontext } from "@/components/context/Searchcontext";
import { ToastContainer } from "react-toastify";
import FacebookCustomerChat from "@/components/FacebookCustomerChat";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CurrentUserProvider>
      <Searchcontext>
        <Component {...pageProps} />
        <FacebookCustomerChat />
        <ToastContainer />
      </Searchcontext>
    </CurrentUserProvider>
  );
}
