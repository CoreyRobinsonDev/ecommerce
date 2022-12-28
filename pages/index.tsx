import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import Display from '../components/Display'
import Sale from '../components/Sale'
import StyleLinks from '../components/StyleLinks'

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
      
      <p
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff, #fcfaff, #fbf6ff, #fbf0ff, #fcebff, #fcebff, #fcebff, #fcebff, #fbf0ff, #fbf6ff, #fcfaff, #ffffff)",
          textAlign: "center",
          color:"#AF215F" ,
          padding:"1.5rem" 
        }}
      >FIRST PURCHASE OFFER: TAKE 30% OFF SHOPWIDE. CODE APPLIED AT CHECKOUT*</p>
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
