import Link from "next/link";
import ItemCard from "./ItemCard";

import styles from "../styles/display.module.css";
import { Category } from "../util/types";

const Display = ({ category = Category.womens}: { category?: Category}) => {

  return <section className={styles.container} >
    <Link href="#">
      <a className={styles.link_container} style={{
        backgroundImage: "url(" + `/pictures/${category}/links/collegewear.jpg` + ")",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
        <div className={styles.link__caption_container}>
          <p>New Collection</p>
          <h2>COLLEGE<wbr/>WEAR</h2>
          <Link href="#">SHOP NOW</Link>
        </div>
      </a>
    </Link>
    <ItemCard index={0} />
    <ItemCard index={1} hasSale={true} />
    <ItemCard index={2} />
    <ItemCard index={3} />
    <Link href="#">
      <a className={styles.link_container} style={{
        backgroundImage: "url(" + `/pictures/${category}/links/summer.jpg` + ")",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
        <div className={styles.link__caption_container}>
          <p>Swimsuit Collection</p>
          <h2>SUMMER&#39;S HERE</h2>
          <Link href="#">SHOP NOW</Link>
        </div>
      </a>
    </Link>
   
  </section>
}





export default Display;