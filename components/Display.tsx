import Link from "next/link";
import ItemCard from "./ItemCard";

import styles from "../styles/display.module.css";
import { Category } from "../util/types";

const Display = ({ category = Category.womens}: { category?: Category}) => {

  return <section className={styles.container} >
    <div className={styles.link_container} style={
      category === Category.womens ? { backgroundImage: "url(" + `/pictures/${category}/links/collegewear.jpg` + ")" } : 
      category === Category.mens ? { backgroundImage: "url(" + `/pictures/${category}/links/classywear.webp` + ")" } : 
      category === Category.kids ? { backgroundImage: "url(" + `/pictures/${category}/links/collegewear.jpg` + ")" } : {}
      }>
        <div className={styles.link__caption_container}>
          <p>New Collection</p>
          {category === Category.womens && <h2>COLLEGE<wbr/>WEAR</h2>}
          {category === Category.mens && <h2>CLASSY<wbr/>WEAR</h2>}
          {category === Category.kids && <h2>COLLEGE<wbr/>WEAR</h2>}
          <Link href="#">SHOP NOW</Link>
        </div>
      </div>

    <ItemCard category={category} index={0} />
    <ItemCard category={category} index={1} hasSale={true} />
    <ItemCard category={category} index={2} />
    <ItemCard category={category} index={3} />

    <div className={styles.link_container} style={
      category === Category.womens ? { backgroundImage: "url(" + `/pictures/${category}/links/summer.jpg` + ")" } : 
      category === Category.mens ? { backgroundImage: "url(" + `/pictures/${category}/links/coats.webp` + ")" } : 
      category === Category.kids ? { backgroundImage: "url(" + `/pictures/${category}/links/collegewear.jpg` + ")" } : {}
      }>
        <div className={styles.link__caption_container}>
          {category === Category.womens && <p>Swimsuit Collection</p>}
          {category === Category.mens && <p>Editor&#39;s Collection</p>}
          {category === Category.kids && <p>Swimsuit Collection</p>}
          {category === Category.womens && <h2>SUMMER&#39;S HERE</h2>}
          {category === Category.mens && <h2>COATS IN TREND</h2>}
          {category === Category.kids && <h2>SUMMER&#39;S HERE</h2>}
          <Link href="#">SHOP NOW</Link>
        </div>
      </div>
  </section>
}





export default Display;