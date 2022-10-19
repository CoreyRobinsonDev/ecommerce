import Link from "next/link";
import { BsPerson, BsHeart, BsBag } from "react-icons/bs";
import { RiHeadphoneLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { motion } from "framer-motion";

import SearchBar from "./SearchBar";
import styles from "../styles/navbar.module.css";
import FX from "../styles/FX.module.css";
import CollectionsMenu from "./CollectionsMenu";
import NewInMenu from "./NewInMenu";

const Navbar = () => {
  const [focus, setFocus] = useState("");
  const [collectionsActive, setCollectionsActive] = useState(false);
  const [newInActive, setNewInActive] = useState(false);

  return <nav className={styles.container}>
    <div className={styles.nav__top_container}>
      <ul className={styles.top__style_list}>
        <li><Link href="/"><a className={`${styles["--women"]} ${styles.top__item}`} onClick={() => setFocus("women")}>WOMEN</a></Link></li>
        <li><Link href="/mens"><a className={`${styles["--men"]} ${styles.top__item}`} onClick={() => setFocus("men")}>MEN</a></Link></li>
        <li><Link href="#"><a className={`${styles["--kids"]} ${styles.top__item}`} onClick={() => setFocus("kids")}>KIDS</a></Link></li>
      </ul> 
      <span className={styles.top__carts}>
        <div className={styles.sale}><span>EXTRA 10% OFF</span> ON FIRST ORDER</div>
        <button><BsPerson /></button>
        <button className={styles.favorites_container}><BsHeart /><span className={styles.favorites_num}>0</span></button>
        <button className={styles.cart_container}><BsBag /><span className={styles.cart_num}>0</span></button>
        <button><RiHeadphoneLine/></button>
      </span>
    </div>
    <div className={styles.nav__bottom_container} data-style={focus}>
      <Link href="/"><a className={styles.brand}>ARTISAN</a></Link>
      <ul className={styles.bottom__nav_list}>
        <motion.li
          onHoverStart={() => setNewInActive(true)}
          onHoverEnd={() => setTimeout(() => setNewInActive(false), 300)}
        ><Link href="#"><a className={`${styles.bottom__item} ${FX.hover}`}>NEW IN</a></Link></motion.li>
        <li><Link href="#"><a className={`${styles.bottom__item} ${FX.hover}`}>TREND</a></Link></li>
        <motion.li
          onHoverStart={() => setCollectionsActive(true)}
          onHoverEnd={() => setTimeout(() => setCollectionsActive(false), 300)}
        ><Link href="#"><a className={`${styles.bottom__item} ${FX.hover}`}>COLLECTIONS</a></Link></motion.li>
        <li><Link href="/about-us"><a className={`${styles.bottom__item} ${FX.hover}`}>ABOUT US</a></Link></li>
        <li><Link href="/contact"><a className={`${styles.bottom__item} ${FX.hover}`}>CONTACT</a></Link></li>
        <li><Link href="#"><a className={`${styles.bottom__item} ${FX.hover}`}>FAQ</a></Link></li>
      </ul>
      <SearchBar />
      <span className={styles.hamburger}>
        <GiHamburgerMenu size={30} />
      </span>
      <CollectionsMenu isActive={collectionsActive} />
      <NewInMenu isActive={newInActive} />
    </div>
  </nav>
}

export default Navbar;