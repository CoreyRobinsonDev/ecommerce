import { BsHeart, BsBag, BsTruck, BsTag, BsClipboard } from "react-icons/bs";
import { GoGift } from "react-icons/go";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { useAppSelector, useAppDispatch } from "../util/hooks";
import styles from "../styles/itemPopout.module.css";
import { toggleVisibility, incrementCount, decrementCount } from "../lib/features/userSlice";

const ItemPopout = () => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(state => state.user.isCartVisible);
  const cart = useAppSelector(state => state.user.cart);
  const wishlist = useAppSelector(state => state.user.wishlist);
  const [checked, setChecked] = useState(false);
  const totalPrice = cart.reduce((acc, cur) => {
    const price = cur.hasSale ? cur.product.salePrice : cur.product.price;
    return (price * cur.count) + acc;
  }, 0);

  return <AnimatePresence>
    {
      isVisible && <motion.aside
        className={styles.backdrop}
        onClick={() => dispatch(toggleVisibility())}
          transition={{type: "tween"}}
          initial={{opacity: 0}}
          animate={isVisible ? {opacity: 1} : {opacity: 0}}
          exit={{opacity: 0}}
        >
        <motion.div className={styles.container}
        onClick={() => dispatch(toggleVisibility())}
          transition={{type: "tween"}}
          initial={{opacity: 0}}
          animate={isVisible ? {opacity: 1, x: 0} : {opacity: 0}}
          exit={{opacity: 0}}
        >
        <button className={styles.close_btn} onClick={() => dispatch(toggleVisibility())}>&#215;</button>
        <div>
          <h2 className={styles.title}><BsBag/> Shopping Cart</h2>
          {cart.map(({ product, count, hasSale, selectedColor }) => <motion.article
            className={styles.item_container} key={product.id}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0 }}
          >
            <Image src={product.img1} alt="" width={175} height={260} />
            <div className={styles.info_container}>
                <p className={styles.item__name}>{product.name}</p>
                {
                  hasSale
                    ? <span>
                      <span className={styles.item__sale_price}>${product.salePrice}.00</span>
                      <span className={styles.strikethrough}>${ product.price}.00</span> 
                    </span>
                    : <p className={styles.item__price}>${product.price}</p>
                }
                <button className={styles.item__color} style={{backgroundColor: selectedColor}}></button>
            
              <span className={styles.input_container}>
                <button className={styles.input__minus_btn} onClick={() => dispatch(decrementCount({source: "cart", product})) }>-</button>
                <p className={styles.input__number}>{ count }</p>
                <button className={styles.input__plus_btn} onClick={() => dispatch(incrementCount({source: "cart", product}))} >+</button>
              </span>
            </div>
          </motion.article>)}
        </div>
        <hr/>
        <div>
          <h2 className={styles.title}><BsHeart/> Wishlist</h2>
          {wishlist.map(({ product, count, hasSale, selectedColor }) => <motion.article
            className={styles.item_container} key={product.id}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
          >
            <Image src={product.img1} alt="" width={100} height={160} />
            <div className={styles.info_container}>
                <p className={styles.item__name}>{product.name}</p>
                {
                  hasSale
                    ? <span>
                      <span className={styles.item__sale_price}>${product.salePrice}.00</span>
                      <span className={styles.strikethrough}>${ product.price}.00</span> 
                    </span>
                    : <p className={styles.item__price}>${product.price}</p>
                }
                <button className={styles.item__color} style={{backgroundColor: selectedColor}}></button>
              <span className={styles.input_container}>
                <button className={styles.input__minus_btn} onClick={() => dispatch(decrementCount({source: "wishlist", product}))}>-</button>
                <p className={styles.input__number}>{ count }</p>
                <button className={styles.input__plus_btn} onClick={() => dispatch(incrementCount({source: "wishlist", product}))}>+</button>
              </span>
            </div>
          </motion.article>)}
        </div>
        </motion.div>
        <motion.footer
          className={styles.footer}
        onClick={() => dispatch(toggleVisibility())}
          transition={{type: "tween"}}
          initial={{opacity: 0}}
          animate={isVisible ? {opacity: 1, x: 0} : {opacity: 0}}
          exit={{opacity: 0}}
        >
            <ul className={styles.footer__btn_container}>
              <li><button className={styles.footer__btn}><BsClipboard size={ 30 } /></button></li>
              <li><button className={styles.footer__btn}><GoGift/></button></li>
              <li><button className={styles.footer__btn}><BsTruck/></button></li>
              <li><button className={styles.footer__btn}><BsTag/></button></li>
            </ul>  
          <span className={styles.price_container}>
              <h4>Subtotal</h4>
              <h3 className={styles.total_price}>${ totalPrice }.00</h3>
            </span>
            <span className={styles.checkbox}>
              <input  type="checkbox" onClick={() => setChecked(!checked)} required />
              <label>
                <span className={styles.form__terms}></span >
                I agree with <span className={styles.underline}>Terms & Conditions.</span>
              </label>
            </span>
          <button
            className={`${styles.footer__checkout_btn} ${checked ? "" : styles.disabled} `}
            disabled={!checked}
          >CHECKOUT</button>
          </motion.footer>
      </motion.aside>
    }
  </AnimatePresence>
}
export default ItemPopout;