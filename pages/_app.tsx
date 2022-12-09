import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { store } from "../lib/store";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState<boolean>()

  // skipping hydration step to aviod hydration failed error
  useEffect(() => {
    setShowChild(true)
  },[])

  if (!showChild) return null;
  if (typeof window === "undefined") {
    return <></>;
  } else {
  return <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider >

  }

}

export default MyApp
