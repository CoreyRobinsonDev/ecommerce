import Link from "next/link";
import Image from "next/image";
import ItemCard from "./ItemCard";

const Display = ({category = "womens"}) => {
  return <section>
    <figure>
      <Link href="#">
        <a>
          <Image src={`/pictures/${category}/links/collegewear.jpg`} alt="Collegewear" width={10} height={10} layout="responsive" />
        </a>
      </Link>
      <figcaption>
        <p>New Collection</p>
        <h2>COLLEGEWEAR</h2>
        <Link href="#">SHOP NOW</Link>
      </figcaption>
    </figure>
    <ItemCard/>
    <ItemCard index={2} />
  </section>
}





export default Display;