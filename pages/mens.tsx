import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import About from '../components/About'
import Display from '../components/Display'
import Sale from '../components/Sale'
import StyleLinks from '../components/StyleLinks'

import { Category } from "../util/types";
import styles from '../styles/home.module.css'

const Mens = () => {
  return <>
    <Head>
      <title>Artisan | Men&#39;s Clothing</title>
  </Head>
    <main>
      <Link href="#">
        <Image
          src={"/pictures/mens/banner/men_banner.webp"}
          alt=""
          width={20}
          height={10}
          layout="responsive"
        />
      </Link>
      
      <p className={styles.sale}>FIRST PURCHASE OFFER: TAKE 30% OFF SHOPWIDE. CODE APPLIED AT CHECKOUT*</p>
      <Link href="#">
        <Image
          src={"/pictures/mens/banner/men_banner1.webp"}
          alt=""
          width={20}
          height={10}
          layout="responsive"
        />
      </Link>
      
      <Display category={Category.mens} />
      <Link href="#">
        <Image
          src={"/pictures/membership.jpg"}
          alt=""
          width={20}
          height={7}
          layout="responsive"
          />
      </Link>
      <Sale category={Category.mens} />
      <Link href="#">
        <Image
          src={"/pictures/mens/links/suit.webp"}
          alt=""
          width={20}
          height={10}
          layout="responsive"
        />
      </Link>
      <StyleLinks category={Category.mens} />
      <About/>
    </main>
  </>
}
export default Mens;