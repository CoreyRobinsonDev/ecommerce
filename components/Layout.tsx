import Head from "next/head";
import Footer from "./Footer";

import Navbar from "./Navbar";

const Layout = ({children}: {children: JSX.Element}) => {
  return <>
    <Head>
      <meta httpEquiv="content-language" content="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="copyright" content="2022 Artisan, Inc. All rights reserved"/>
      <meta name="description" content="Artisan, Inc has the latest fashion brands on Women's and Men's Clothing, Accessories, Jewelry, Beauty, and Shoes."/>
      <title>Artisan</title>
    </Head>
    <Navbar />
    {children}
    <Footer/>
  </>
}
export default Layout;