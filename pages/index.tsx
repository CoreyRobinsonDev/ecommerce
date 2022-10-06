import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import Display from '../components/Display'
import Sale from '../components/Sale'
import StyleLinks from '../components/StyleLinks'
import styles from '../styles/home.module.css'
import { useAppSelector } from '../util/hooks'

const Home: NextPage = () => {

  return <>
    <Head>
      <title>Artisan | Women&#39;s Clothing</title>
    </Head>
    <main>
      <Link href="#">
        <Image
          src={"/pictures/womens/banner/women_banner.webp"}
          alt=""
          width={20}
          height={10}
          layout="responsive"
        />
      </Link>
      
      <p className={styles.sale}>FIRST PURCHASE OFFER: TAKE 30% OFF SHOPWIDE. CODE APPLIED AT CHECKOUT*</p>
      <Link href="#">
        <Image
          src={"/pictures/womens/banner/women_banner1.webp"}
          alt=""
          width={20}
          height={10}
          layout="responsive"
        />
      </Link>
      
      <Display />
      <Link href="#">
        <Image
          src={"/pictures/membership.jpg"}
          alt=""
          width={20}
          height={7}
          layout="responsive"
          />
      </Link>
      <Sale />
      <Link href="#">
        <Image
          src={"/pictures/womens/links/best.jpg"}
          alt=""
          width={20}
          height={10}
          layout="responsive"
        />
      </Link>
      <StyleLinks />
      <About/>
    </main>
  </>
}

export default Home
