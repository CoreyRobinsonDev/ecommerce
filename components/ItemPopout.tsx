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
    animate={{ display: isVisible ? "block" : "none" }}
    >
    <button className={styles.close_btn} onClick={() => dispatch(toggleVisibility())}>&#215;</button>
    <div>
      <h2 className={styles.title}><BsBag/> Shopping Cart</h2>
      {cart.map(({product, count}) => <article className={styles.item_container} key={product.id}>
        <Image src={product.img1} alt="" width={100} height={160} />
        <div>
          <p>{product.name}</p>
          <p>${product.price}</p>
          <span>
            <button>-</button>
            <input type="number" value={count} min="1" />
            <button>+</button>
          </span>
        </div>
      </article>)}
    </div>
    <div>
      <h2 className={styles.title}><BsHeart/> Wishlist</h2>
    </div>

  </motion.aside>
}
export default ItemPopout;