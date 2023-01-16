import Link from "next/link";
import { BsTwitter, BsInstagram,BsYoutube } from "react-icons/bs";
import { FaPinterestP, FaFacebookF } from "react-icons/fa";
import styles from "../styles/footer.module.css";
import FX from "../styles/FX.module.css";

const Footer = () => {
  return <footer className={styles.container}>
    <div className={styles.newsletter}>
      <h3 className={styles.newsletter__title}>SIGN UP FOR NEWSLETTER</h3>
      <form className={styles.newsletter__form}>
        <div className={styles.form__input_container}>
          <input className={styles.form__input} type="text" placeholder="Don't miss this offer!" required />
          <button className={styles.form__submit} type="submit">SIGN UP</button>
        </div>
          <input  type="checkbox" required />
        <label>
          <span className={styles.form__terms}></span>
          By providing your email, you consent to our <span className={styles.underline}>Privacy Policy</span> and <span className={styles.underline}>Terms & Conditions.</span>
        </label>
      </form>
      <p>FOLLOW US</p>
      <ul className={styles.socials_list}>
        <li><a className={`${styles.socials_list__item} ${styles["--facebook"]}`} href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebookF/></a></li>
        <li><a className={`${styles.socials_list__item} ${styles["--twitter"]}`} href="https://twitter.com/" target="_blank" rel="noreferrer"><BsTwitter/></a></li>
        <li><a className={`${styles.socials_list__item} ${styles["--instagram"]}`} href="https://www.instagram.com/" target="_blank" rel="noreferrer"><BsInstagram/></a></li>
        <li><a className={`${styles.socials_list__item} ${styles["--pinterest"]}`} href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><FaPinterestP/></a></li>
        <li><a className={`${styles.socials_list__item} ${styles["--youtube"]}`} href="https://www.youtube.com/" target="_blank" rel="noreferrer"><BsYoutube /></a></li>
      </ul>
      <small className={styles.copyright}>&#169; 2022 Artisan, Inc. All rights reserved. This is a non-functional front-end theme showcase. <a href="https://github.com/CoreyRobinsonDev/ecommerce" target="_blank" rel="noreferrer">{"<View Code>"}</a></small>
    </div>
    <div className={styles.links_container}>
      <div className={styles.links_child}>
        <h3>SHOP</h3>
        <ul className={styles.links_list}>
          <li><Link href="#"><a className={`${styles.links_list__item} ${FX.hover}`}>New In</a></Link></li>
          <li><Link href="#"><a className={`${styles.links_list__item} ${FX.hover}`}>Trend</a></Link></li>
          <li><Link href="#"><a className={`${styles.links_list__item} ${FX.hover}`}>Shoes</a></Link></li>
          <li><Link href="#"><a className={`${styles.links_list__item} ${FX.hover}`}>Bags & Accessories</a></Link></li>
          <li><Link href="#"><a className={`${styles.links_list__item} ${FX.hover}`}>Sales & Specials</a></Link></li>
        </ul>
      </div>
      <div className={styles.links_child}>
        <h3>INFORMATION</h3>
        <ul className={styles.links_list}>
          <li><Link href="/about-us"><a className={`${styles.links_list__item} ${FX.hover}`}>About Us</a></Link></li>
          <li><Link href="#"><a className={`${styles.links_list__item} ${FX.hover}`}>Customer Service</a></Link></li>
          <li><Link href="#"><a className={`${styles.links_list__item} ${FX.hover}`}>New Collection</a></Link></li>
          <li><Link href="#"><a className={`${styles.links_list__item} ${FX.hover}`}>Best Sellers</a></Link></li>
          <li><Link href="#"><a className={`${styles.links_list__item} ${FX.hover}`}>Manufacturers</a></Link></li>
          <li><Link href="#"><a className={`${styles.links_list__item} ${FX.hover}`}>Privacy Policy</a></Link></li>
          <li><Link href="#"><a className={`${styles.links_list__item} ${FX.hover}`}>Terms & Condition</a></Link></li>
        </ul>
      </div>
      <div className={styles.links_child}>
        <h3>CUSTOMER SERVICE</h3>
        <ul className={styles.links_list}>
          <li><Link href="#"><a className={`${styles.links_list__item} ${FX.hover}`}>Search Term</a></Link></li>
          <li><Link href="#"><a className={`${styles.links_list__item} ${FX.hover}`}>Advanced Search</a></Link></li>
          <li><Link href="#"><a className={`${styles.links_list__item} ${FX.hover}`}>Orders & Returns</a></Link></li>
          <li><Link href="/contact"><a className={`${styles.links_list__item} ${FX.hover}`}>Contact Us</a></Link></li>
          <li><Link href="#"><a className={`${styles.links_list__item} ${FX.hover}`}>Store Locations</a></Link></li>
        </ul>
      </div>
    </div>
  </footer>
}

export default Footer;