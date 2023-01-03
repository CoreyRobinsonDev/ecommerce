import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import styles from "../styles/mobileMenu.module.css";
import FX from "../styles/FX.module.css";

const MobileMenu = ({isActive}: {isActive: boolean}) => {
  return <AnimatePresence>
    {
      isActive && <motion.ul
        className={styles.container}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <li><Link href="#"><a className={`${styles.item} ${FX.hover}`}>NEW IN</a></Link></li>
        <li><Link className={`${styles.item} ${FX.hover}`} href="#"><a className={`${styles.item} ${FX.hover}`}>TREND</a></Link></li>
        <li><Link className={`${styles.item} ${FX.hover}`} href="#"><a className={`${styles.item} ${FX.hover}`}>COLLECTIONS</a></Link></li>
        <li><Link className={`${styles.item} ${FX.hover}`} href="/about-us"><a className={`${styles.item} ${FX.hover}`}>ABOUT US</a></Link></li>
        <li><Link className={`${styles.item} ${FX.hover}`} href="/contact"><a className={`${styles.item} ${FX.hover}`}>CONTACT</a></Link></li>
        <li><Link className={`${styles.item} ${FX.hover}`} href="/faq"><a className={`${styles.item} ${FX.hover}`}>FAQ</a></Link></li>
      </motion.ul> 
    }
  </AnimatePresence>
}

export default MobileMenu;