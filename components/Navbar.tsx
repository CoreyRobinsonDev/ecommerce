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
import ItemPopout from "./ItemPopout";
import { useAppSelector, useAppDispatch } from "../util/hooks";
import { toggleVisibility } from "../lib/features/userSlice";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [focus, setFocus] = useState("");
  const [collectionsActive, setCollectionsActive] = useState(false);
  const [newInActive, setNewInActive] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.user.cart).reduce((acc, cur) => acc + cur.count, 0);
  const wishlistItems = useAppSelector(state => state.user.wishlist).reduce((acc, cur) => acc + cur.count, 0);

  return <nav className={styles.container}>
    <div className={styles.nav__top_container}>
      <ItemPopout />
      <ul className={styles.top__style_list}>
        <li><Link href="/"><a className={`${styles["--women"]} ${styles.top__item}`} onClick={() => setFocus("women")}>WOMEN</a></Link></li>
        <li><Link href="/mens"><a className={`${styles["--men"]} ${styles.top__item}`} onClick={() => setFocus("men")}>MEN</a></Link></li>
        <li><Link href="/kids"><a className={`${styles["--kids"]} ${styles.top__item}`} onClick={() => setFocus("kids")}>KIDS</a></Link></li>
        <li><Link href="/"><a className={`${styles["--women"]} ${styles.top__item} ${styles.mobile}`} onClick={() => setFocus("women")}>W</a></Link></li>
        <li><Link href="/mens"><a className={`${styles["--men"]} ${styles.top__item} ${styles.mobile}`} onClick={() => setFocus("men")}>M</a></Link></li>
        <li><Link href="/kids"><a className={`${styles["--kids"]} ${styles.top__item} ${styles.mobile}`} onClick={() => setFocus("kids")}>K</a></Link></li>
      </ul> 
      <span className={styles.top__carts}>
        <div className={styles.sale}><span>EXTRA 10% OFF</span> ON FIRST ORDER</div>
        <button><BsPerson /></button>
        <button><RiHeadphoneLine/></button>
        <button className={styles.favorites_container} onClick={() => dispatch(toggleVisibility())}><BsHeart /><span className={styles.favorites_num}>{wishlistItems}</span></button>
        <button className={styles.cart_container} onClick={() => dispatch(toggleVisibility())}><BsBag /><span className={styles.cart_num}>{cartItems}</span></button>
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
        <li><Link href="/faq"><a className={`${styles.bottom__item} ${FX.hover}`}>FAQ</a></Link></li>
      </ul>
      <SearchBar />
      <button className={styles.hamburger} onClick={() => setMobileMenuActive(!mobileMenuActive)}>
        <GiHamburgerMenu size={30} />
      </button>
      <CollectionsMenu isActive={collectionsActive} />
      <NewInMenu isActive={newInActive} />
      <div className={styles.mobile_menu} onClick={() => setMobileMenuActive(!mobileMenuActive)}><MobileMenu isActive={mobileMenuActive} /></div>
    </div>
  </nav>
}

export default Navbar;