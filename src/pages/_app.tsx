import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import client from "../../apolloClient";
import UserContext from "@/Context/UserContext";
import Toast from "@/Components/shared/Toast/ToastContainer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContext>
      <ApolloProvider client={client}>
        <Toast />
        <Component {...pageProps} />
      </ApolloProvider>
    </UserContext>
  );
}
