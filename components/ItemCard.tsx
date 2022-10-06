import Link from "next/link";
import { BsHeart } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";

import styles from "../styles/itemCard.module.css";
import FX from "../styles/FX.module.css";
import { useAppSelector } from "../util/hooks";
import { Category } from "../util/types";

const ItemCard = ({ category = Category.womens, index = 0, hasSale = false }: {category?: Category, index?: number, hasSale?: boolean }) => {
  const inventory = useAppSelector(state => state.inventory);
  const item: any = inventory[category];
  const clothing = item.clothes[index];
  const [img, setImg] = useState(clothing.img1);

  return <article className={styles.container}>
    
    <Link href="#">
      <motion.a className={styles.img} style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
        onHoverStart={() => setImg(clothing.img2)}
        onHoverEnd={() => setImg(clothing.img1)}
      >
        {hasSale && <p className={styles.sale}>SALE</p>}
        <div className={styles.btn_container}>
          <button className={styles.cart_btn}>ADD TO CART</button>
          <button className={styles.wishlist_btn}><BsHeart/>Add to wishlist</button>
        </div>
      </motion.a>
    </Link>
    
    <div className={styles.info_container}>
      <h5 className={FX.hover}>{clothing.brand}</h5>
      <p className={`${styles.info__description} ${FX.hover}`}>{clothing.name}</p>
      {hasSale
        ? <span>
          <span className={styles.strikethrough}>${clothing.price}.00</span>
          <span className={styles.info__sale_price}>${Math.floor(clothing.price - (clothing.price * .2))}.00</span>
        </span> 
        : <p className={styles.info__price}>${clothing.price}.00</p>
      }
      <div>
        {clothing.colors.map((color:string, key:number) => <button key={key} className={styles.info__color} style={{backgroundColor: color}}></button>)}
      </div>
    </div>
  </article>
}
export default ItemCard;