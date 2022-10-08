import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import styles from "../styles/menu.module.css";
import FX from "../styles/FX.module.css";

const CollectionsMenu = ({ isActive }: { isActive: boolean }) => {
  const [isHover, setIsHover] = useState(false);

  return <AnimatePresence>
    {(isActive || isHover) && <motion.section
      className={styles.container}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => { setIsHover(false); }}
    >
      <Image
        src="/pictures/menu.jpg"
        alt=""
        width={280}
        height={280}
      />
      <ul className={styles.list}>
        <li><strong>HARUM QUIDEM</strong></li>
        <li className={styles.list_item}><Link href="#"><a className={`${styles.list_item__content} ${FX.hover}`}>Cosmopolis</a></Link></li>
        <li className={styles.list_item}><Link href="#"><a className={`${styles.list_item__content} ${FX.hover}`}>Suito</a></Link></li>
        <li className={styles.list_item}><Link href="#"><a className={`${styles.list_item__content} ${FX.hover}`}>Milancelos</a></Link></li>
        <li className={styles.list_item}><Link href="#"><a className={`${styles.list_item__content} ${FX.hover}`}>Blazero</a></Link></li>
        <li className={styles.list_item}><Link href="#"><a className={`${styles.list_item__content} ${FX.hover}`}>Glamos</a></Link></li>
        <li className={styles.list_item}><Link href="#"><a className={`${styles.list_item__content} ${FX.hover}`}>Metropolis</a></Link></li>
      </ul>
      <Image
        src="/pictures/menu2.webp"
        alt=""
        width={280}
        height={200}
      />
      <ul className={styles.list}>
        <li><strong>POSSIMUS</strong></li>
        <li className={styles.list_item}><Link href="#"><a className={`${styles.list_item__content} ${FX.hover}`}>Cosmopolis</a></Link></li>
        <li className={styles.list_item}><Link href="#"><a className={`${styles.list_item__content} ${FX.hover}`}>Suito</a></Link></li>
        <li className={styles.list_item}><Link href="#"><a className={`${styles.list_item__content} ${FX.hover}`}>Milancelos</a></Link></li>
        <li className={styles.list_item}><Link href="#"><a className={`${styles.list_item__content} ${FX.hover}`}>Blazero</a></Link></li>
        <li className={styles.list_item}><Link href="#"><a className={`${styles.list_item__content} ${FX.hover}`}>Glamos</a></Link></li>
        <li className={styles.list_item}><Link href="#"><a className={`${styles.list_item__content} ${FX.hover}`}>Metropolis</a></Link></li>
      </ul>
    </motion.section>}
  </AnimatePresence>
}
export default CollectionsMenu;