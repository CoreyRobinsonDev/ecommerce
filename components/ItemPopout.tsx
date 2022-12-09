import { useState, useEffect } from "react";
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

  return <motion.aside className={styles.container} animate={{ display: isVisible ? "block" : "none"}}>
    <button className={styles.close_btn} onClick={() => dispatch(toggleVisibility())}>&#215;</button>
    <div>
      <h2><BsBag/> Shopping Cart</h2>
      {cart.map(({product, count}) => <article key={product.id}>
        <Image src={product.img1} alt="" width={70} height={100} />
        <div>
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>
        <span>{count}</span>
      </article>)}
    </div>
    <div>
      <h2><BsHeart/> Wishlist</h2>
    </div>

  </motion.aside>
}
export default ItemPopout;