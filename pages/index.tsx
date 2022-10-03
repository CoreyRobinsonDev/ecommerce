import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Display from '../components/Display'
import styles from '../styles/home.module.css'

const Home: NextPage = () => {
  return <>
    <Head>
      <title>Artisan | Women&#39;s Clothing</title>
    </Head>
    <main>
      <Image
        src={"/pictures/womens/banner/women_banner.webp"}
        alt=""
        width={20}
        height={10}
        layout="responsive"
      />
      <p className={styles.sale}>FIRST PURCHASE OFFER: TAKE 30% OFF SHOPWIDE. CODE APPLIED AT CHECKOUT*</p>
      <Image
        src={"/pictures/womens/banner/women_banner1.webp"}
        alt=""
        width={20}
        height={10}
        layout="responsive"
      />
      <Display />
    </main>
  </>
}

export default Home
