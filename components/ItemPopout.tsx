import { useEffect } from "react";
import { BsHeart, BsBag } from "react-icons/bs";
import Image from "next/image";

import { useAppSelector } from "../util/hooks";

const ItemPopout = () => {
  const cart = useAppSelector(state => state.user.cart);
  const wishlist = useAppSelector(state => state.user.wishlist);



  return <aside>
    <div>
      <h2><BsBag/> Shopping Cart</h2>
      {cart.map(item => <article key={item.id}>
        <Image src={item.img1} alt="" width={10} height={20} />
        <div>
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      </article>)}
    </div>
    <div>
      <h2><BsHeart/> Wishlist</h2>
    </div>

  </aside>
}
export default ItemPopout;