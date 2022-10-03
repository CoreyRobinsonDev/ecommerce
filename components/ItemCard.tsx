import Link from "next/link";
import { BsHeart } from "react-icons/bs";

import styles from "../styles/itemCard.module.css";
import FX from "../styles/FX.module.css";
import { useAppSelector } from "../util/hooks";
import { Category } from "../util/types";

const ItemCard = ({ category = Category.womens, index = 1, hasSale = false }: {category?: Category, index?: number, hasSale?: boolean }) => {
  const inventory = useAppSelector(state => state.inventory);
  const item = inventory[category]
  
  return <article className={styles.container}>
    
    <Link href="#">
      <a className={styles.img} style={{
        backgroundImage: "url(" + `/pictures/${category}/${item}/fit${index}.webp` + ")",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
       backgroundSize: "cover"
      }}>
        {hasSale && <p className={styles.sale}>SALE</p>}
        <div className={styles.btn_container}>
          <button className={styles.cart_btn}>ADD TO CART</button>
          <button className={styles.wishlist_btn}><BsHeart/>Add to wishlist</button>
        </div>
      </a>
    </Link>
    
    <div className={styles.info_container}>
      <h5 className={FX.hover}>LOREM</h5>
      <p className={`${styles.info__description} ${FX.hover}`}>Lamcorper Ostique Amattis Drosele</p>
      {hasSale
        ? <span>
          <span className={styles.strikethrough}>$99.00</span>
          <span className={styles.info__sale_price}>$79.00</span>
        </span> 
        : <p className={styles.info__price}>$99.00</p>
      }
      
      <button className={styles.info__color}></button>
    </div>
  </article>
}
export default ItemCard;