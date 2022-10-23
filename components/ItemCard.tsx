import Link from "next/link";
import { BsHeart } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";

import styles from "../styles/itemCard.module.css";
import FX from "../styles/FX.module.css";
import { useAppSelector, useAppDispatch } from "../util/hooks";
import { Category } from "../util/types";
import { addToCart, addToWishlist } from "../lib/features/userSlice";

const ItemCard = ({ category = Category.womens, index = 0, hasSale = false }: {category?: Category, index?: number, hasSale?: boolean }) => {
  const inventory = useAppSelector(state => state.inventory);
  const item: any = inventory[category];
  const clothing = item.clothes[index];
  const [img, setImg] = useState(clothing.img1);
  const dispatch = useAppDispatch();

  const insertToCart = () => dispatch(addToCart(clothing));
  const insertToWishlist = () => dispatch(addToWishlist(clothing));

  return <article className={styles.container}>
    <div>

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
      </motion.a>
    </Link>
        <div className={styles.btn_container}>
          <button className={styles.cart_btn} onClick={insertToCart}>ADD TO CART</button>
          <button className={styles.wishlist_btn} onClick={insertToWishlist}><BsHeart/>Add to wishlist</button>
        </div>
        </div>
    
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