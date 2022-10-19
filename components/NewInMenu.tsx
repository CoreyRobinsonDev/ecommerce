import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import FX from "../styles/FX.module.css";
import menu from "../styles/menu.module.css";
import styles from "../styles/newInMenu.module.css";

const NewInMenu = ({isActive}: {isActive: boolean}) => {
  const [isHover, setIsHover] = useState(false);

  return <AnimatePresence>
    {(isActive || isHover) && <motion.section
      className={menu.container}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      <ul className={menu.list}>
        <li><Link href="#"><a className={`${styles.link} ${FX.hover}`}><strong>WHAT&#39;S NEW</strong></a></Link></li>
        <li><Link href="#"><a className={`${styles.link} ${FX.hover}`}><strong>BEST SELLING</strong></a></Link></li>
        <li><Link href="#"><a className={`${styles.link} ${FX.hover}`}><strong>TOP RATED</strong></a></Link></li>
        <li><Link href="#"><a className={`${styles.link} ${FX.hover}`}><strong>MOST POPULAR</strong></a></Link></li>
        <li><Link href="#"><a className={`${styles.link} ${FX.hover}`}><strong>EDITOR&#39;S CHOICE</strong></a></Link></li>
        <li><Link href="#"><a className={`${styles.link} ${styles["link--sale"]} ${FX.hover}`}><strong>ON SALE</strong></a></Link></li>
      </ul>  
      <ul className={menu.list}>
        <li><strong>HARUM QUIDEM</strong></li>
        <li className={menu.list_item}><Link href="#"><a className={`${menu.list_item__content} ${FX.hover}`}>Cosmopolis</a></Link></li>
        <li className={menu.list_item}><Link href="#"><a className={`${menu.list_item__content} ${FX.hover}`}>Suito</a></Link></li>
        <li className={menu.list_item}><Link href="#"><a className={`${menu.list_item__content} ${FX.hover}`}>Milancelos</a></Link></li>
        <li className={menu.list_item}><Link href="#"><a className={`${menu.list_item__content} ${FX.hover}`}>Blazero</a></Link></li>
        <li className={menu.list_item}><Link href="#"><a className={`${menu.list_item__content} ${FX.hover}`}>Glamos</a></Link></li>
        <li className={menu.list_item}><Link href="#"><a className={`${menu.list_item__content} ${FX.hover}`}>Metropolis</a></Link></li>
      </ul>
      <ul className={menu.list}>
        <li><strong>POSSIMUS</strong></li>
        <li className={menu.list_item}><Link href="#"><a className={`${menu.list_item__content} ${FX.hover}`}>Cosmopolis</a></Link></li>
        <li className={menu.list_item}><Link href="#"><a className={`${menu.list_item__content} ${FX.hover}`}>Suito</a></Link></li>
        <li className={menu.list_item}><Link href="#"><a className={`${menu.list_item__content} ${FX.hover}`}>Milancelos</a></Link></li>
        <li className={menu.list_item}><Link href="#"><a className={`${menu.list_item__content} ${FX.hover}`}>Blazero</a></Link></li>
        <li className={menu.list_item}><Link href="#"><a className={`${menu.list_item__content} ${FX.hover}`}>Glamos</a></Link></li>
        <li className={menu.list_item}><Link href="#"><a className={`${menu.list_item__content} ${FX.hover}`}>Metropolis</a></Link></li>
      </ul>
      <ul className={menu.list}>
        <li><strong>NECESSITATIBUS</strong></li>
        <li className={menu.list_item}><Link href="#"><a className={`${menu.list_item__content} ${FX.hover}`}>Cosmopolis</a></Link></li>
        <li className={menu.list_item}><Link href="#"><a className={`${menu.list_item__content} ${FX.hover}`}>Suito</a></Link></li>
        <li className={menu.list_item}><Link href="#"><a className={`${menu.list_item__content} ${FX.hover}`}>Milancelos</a></Link></li>
        <li className={menu.list_item}><Link href="#"><a className={`${menu.list_item__content} ${FX.hover}`}>Blazero</a></Link></li>
        <li className={menu.list_item}><Link href="#"><a className={`${menu.list_item__content} ${FX.hover}`}>Glamos</a></Link></li>
        <li className={menu.list_item}><Link href="#"><a className={`${menu.list_item__content} ${FX.hover}`}>Metropolis</a></Link></li>
      </ul>
    </motion.section>}
  </AnimatePresence>
}
export default NewInMenu;