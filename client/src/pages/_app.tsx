import { CurrentUserProvider } from "@/components/CurretnUserProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Searchcontext } from "@/components/context/Searchcontext";
import { ToastContainer } from "react-toastify";
import FacebookCustomerChat from "@/components/FacebookCustomerChat";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CurrentUserProvider>
      <Searchcontext>
        <Component {...pageProps} />
        <FacebookCustomerChat />
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Searchcontext>
    </CurrentUserProvider>
  );
}
