import Link from "next/link";
import { BsPerson, BsHeart, BsBag } from "react-icons/bs";
import { RiHeadphoneLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

import SearchBar from "./SearchBar";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  const [focus, setFocus] = useState("");

  return <nav className={styles.container}>
    <div className={styles.nav__top_container}>
      <ul className={styles.top__style_list}>
        <li><Link href="/"><a className={`${styles["--women"]} ${styles.top__item}`} onClick={() => setFocus("women")}>WOMEN</a></Link></li>
        <li><Link href="/mens"><a className={`${styles["--men"]} ${styles.top__item}`} onClick={() => setFocus("men")}>MEN</a></Link></li>
        <li><Link href="#"><a className={`${styles["--kids"]} ${styles.top__item}`} onClick={() => setFocus("kids")}>KIDS</a></Link></li>
      </ul> 
      <span className={styles.top__carts}>
        <p className={styles.sale}><span>EXTRA 10% OFF</span> ON FIRST ORDER</p>
        <button><BsPerson /></button>
        <button className={styles.favorites_container}><BsHeart /><span className={styles.favorites_num}>0</span></button>
        <button className={styles.cart_container}><BsBag /><span className={styles.cart_num}>0</span></button>
        <button><RiHeadphoneLine/></button>
      </span>
    </div>
    <div className={styles.nav__bottom_container} data-style={focus}>
      <Link href="/"><a className={styles.brand}>ARTISAN</a></Link>
      <ul className={styles.bottom__nav_list}>
        <li><Link href="#"><a className={styles.bottom__item}>NEW IN</a></Link></li>
        <li><Link href="#"><a className={styles.bottom__item}>TREND</a></Link></li>
        <li><Link href="#"><a className={styles.bottom__item}>COLLECTIONS</a></Link></li>
        <li><Link href="/about-us"><a className={styles.bottom__item}>ABOUT US</a></Link></li>
        <li><Link href="#"><a className={styles.bottom__item}>CONTACT</a></Link></li>
        <li><Link href="#"><a className={styles.bottom__item}>FAQ</a></Link></li>
        <li><Link href="#"><a className={`${styles.bottom__item} ${styles["--sale"]}`}>SALE</a></Link></li>
      </ul>
      <SearchBar />
      <span className={styles.hamburger}>
        <GiHamburgerMenu size={30} />
      </span>
    </div>
  </nav>
}

export default Navbar;