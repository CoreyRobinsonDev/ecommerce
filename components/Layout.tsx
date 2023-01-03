import Head from "next/head";
import Footer from "./Footer";

import Navbar from "./Navbar";

const Layout = ({children}: {children: JSX.Element}) => {
  return <>
    <Head>
      <meta name="copyright" content="2022 Artisan, Inc. All rights reserved"/>
      <meta name="description" content="Artisan, Inc has the latest fashion brands on Women's and Men's Clothing, Accessories, Jewelry, Beauty, and Shoes." />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <title>Artisan</title>
    </Head>
    <Navbar />
    {children}
    <Footer/>
  </>
}
export default Layout;