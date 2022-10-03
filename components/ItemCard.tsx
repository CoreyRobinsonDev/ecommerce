import Image from "next/image";
import Link from "next/link";
import { BsHeart } from "react-icons/bs";

const ItemCard = ({category = "womens", item = "clothes", index = 1}) => {
  return <article>
    <Link href="#"><Image src={`/pictures/${category}/${item}/fit${index}.webp`} alt={`${category} ${item}`} width={10} height={20} layout="responsive" /></Link>
    <div>
      <button>ADD TO CART</button>
      <button><BsHeart/>Add to wishlist</button>
    </div>
    <div>
      <h4>LOREM</h4>
      <p>Lamcorper Ostique Amattis Drosele</p>
      <p>$99.00</p>
      <button></button>
    </div>
  </article>
}
export default ItemCard;