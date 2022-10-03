import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.css";

const Mens = () => {
  return <>
    <Head>
      <title>Artisan | Men&#39;s Clothing</title>
  </Head>
    <main>
      <Image
        src={"/pictures/men_banner.webp"}
        alt=""
        width={20}
        height={10}
        layout="responsive"
      />
      <p className={styles.sale}>FIRST PURCHASE OFFER: TAKE 30% OFF SHOPWIDE. CODE APPLIED AT CHECKOUT*</p>
      <Image
        src={"/pictures/men_banner1.webp"}
        alt=""
        width={20}
        height={10}
        layout="responsive"
      />
    </main>
  </>
}
export default Mens;