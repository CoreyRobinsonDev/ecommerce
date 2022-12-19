import { BsHeart, BsBag } from "react-icons/bs";
import Image from "next/image";
import { motion } from "framer-motion";

import { useAppSelector, useAppDispatch } from "../util/hooks";
import styles from "../styles/itemPopout.module.css";
import { toggleVisibility } from "../lib/features/userSlice";

const ItemPopout = () => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(state => state.user.isCartVisible);
  const cart = useAppSelector(state => state.user.cart);
  const wishlist = useAppSelector(state => state.user.wishlist);
  const totalPrice = cart.reduce((acc, cur) => (cur.product.price * cur.count) + acc, 0);

  return <motion.aside
    className={styles.container}
    transition={{type: "tween"}}
    initial={{opacity: 0, x: "50vw"}}
    animate={isVisible ? {opacity: 1, x: 0} : {opacity: 0, zIndex: 0, x: "50vw"}}
    exit={{opacity: 0, x: "50vw"}}
    >
    <button className={styles.close_btn} onClick={() => dispatch(toggleVisibility())}>&#215;</button>
    <div>
      <h2 className={styles.title}><BsBag/> Shopping Cart</h2>
      {cart.map(({ product, count }) => <motion.article
        className={styles.item_container} key={product.id}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0 }}
      >
        <Image src={product.img1} alt="" width={100} height={160} />
        <div className={styles.info_container}>
          <div>
            <p className={styles.item__name}>{product.name}</p>
            <p className={styles.item__price}>${product.price}</p>
          </div>
          <span className={styles.input_container}>
            <button className={styles.input__minus_btn}>-</button>
            <p className={styles.input__number}>{ count }</p>
            <button className={styles.input__plus_btn}>+</button>
          </span>
        </div>
      </motion.article>)}
      <p className={styles.total_price}>${ totalPrice }.00</p>
    </div>
    <hr/>
    <div>
      <h2 className={styles.title}><BsHeart/> Wishlist</h2>
      {wishlist.map(({ product, count }) => <motion.article
        className={styles.item_container} key={product.id}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
        <Image src={product.img1} alt="" width={100} height={160} />
        <div className={styles.info_container}>
          <div>
            <p className={styles.item__name}>{product.name}</p>
            <p className={styles.item__price}>${product.price}</p>
          </div>
          <span className={styles.input_container}>
            <button className={styles.input__minus_btn}>-</button>
            <p className={styles.input__number}>{ count }</p>
            <button className={styles.input__plus_btn}>+</button>
          </span>
        </div>
      </motion.article>)}
    </div>

  </motion.aside>
}
export default ItemPopout;