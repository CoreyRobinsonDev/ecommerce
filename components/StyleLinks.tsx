import Link from "next/link";
import { Category } from "../util/types";
import styles from "../styles/styleLinks.module.css";

const StyleLinks = ({category = Category.womens}) => {
  return <section className={styles.container}>
      <div className={styles.link} >
      <Link href="#"><a className={styles.link_btn}>TOPS</a></Link>
      <span className={styles.img} style={
        category === Category.womens ? { backgroundImage: `url(/pictures/${category}/clothes/tops.webp)` } : 
        category === Category.mens ? { backgroundImage: `url(/pictures/${category}/clothes/tops.webp)` } : 
        category === Category.kids ? { backgroundImage: "url(" + `/pictures/${category}/links/collegewear.jpg` + ")" } : {}
      }></span>
      </div>    
      <div className={styles.link}>
      <Link href="#"><a className={styles.link_btn}>BOTTOMS</a></Link>
      <span className={styles.img} style={
        category === Category.womens ? { backgroundImage: `url(/pictures/${category}/clothes/fit1.webp)` } : 
        category === Category.mens ? { backgroundImage: `url(/pictures/${category}/clothes/pants.webp)` } : 
        category === Category.kids ? { backgroundImage: "url(" + `/pictures/${category}/links/collegewear.jpg` + ")" } : {}
      }></span>
      </div>    
      <div className={styles.link}>
      <Link href="#"><a className={styles.link_btn}>CASUAL</a></Link>
      <span className={styles.img} style={{
        backgroundImage: `url(/pictures/${category}/clothes/casual.webp)`,
      }}></span>
      </div>    
      <div className={styles.link}>
      {category === Category.womens && <Link href="#"><a className={styles.link_btn}>DRESSES</a></Link>}
      {category === Category.mens && <Link href="#"><a className={styles.link_btn}>COATS</a></Link>}
      {category === Category.kids && <Link href="#"><a className={styles.link_btn}>DRESSES</a></Link>}
      <span className={styles.img} style={
        category === Category.womens ? { backgroundImage: `url(/pictures/${category}/clothes/fit9.webp)` } : 
        category === Category.mens ? { backgroundImage: `url(/pictures/${category}/clothes/fit11.webp)` } : 
        category === Category.kids ? { backgroundImage: `url(/pictures/${category}/clothes/fit9.webp)` } : {}
      }></span>
      </div>    
      <div className={styles.link}>
      {category === Category.womens && <Link href="#"><a className={styles.link_btn}>FORMAL</a></Link>}
      {category === Category.mens && <Link href="#"><a className={styles.link_btn}>HOODIES</a></Link>}
      {category === Category.kids && <Link href="#"><a className={styles.link_btn}>DRESSES</a></Link>}
      <span className={styles.img} style={
        category === Category.womens ? { backgroundImage: `url(/pictures/${category}/clothes/formal.webp)` } : 
        category === Category.mens ? { backgroundImage: `url(/pictures/${category}/clothes/hoodies.webp)` } : 
        category === Category.kids ? { backgroundImage: `url(/pictures/${category}/clothes/fit9.webp)` } : {}
      }></span>
      </div>    
      <div className={styles.link}>
      {category === Category.womens && <Link href="#"><a className={styles.link_btn}>SWIMWEAR</a></Link>}
      {category === Category.mens && <Link href="#"><a className={styles.link_btn}>SLIPPERS</a></Link>}
      {category === Category.kids && <Link href="#"><a className={styles.link_btn}>DRESSES</a></Link>}
      <span className={styles.img} style={
        category === Category.womens ? { backgroundImage: `url(/pictures/${category}/clothes/fit12.webp)` } : 
        category === Category.mens ? { backgroundImage: `url(/pictures/${category}/clothes/fit8.webp)` } : 
        category === Category.kids ? { backgroundImage: `url(/pictures/${category}/clothes/fit9.webp)` } : {}
      }></span>
      </div>    
      <div className={styles.link}> 
      <Link href="#"><a className={styles.link_btn}>SHOES</a></Link>
      <span className={styles.img} style={
        category === Category.womens ? { backgroundImage: `url(/pictures/${category}/clothes/fit15.webp)` } : 
        category === Category.mens ? { backgroundImage: `url(/pictures/${category}/clothes/fit9.webp)` } : 
        category === Category.kids ? { backgroundImage: "url(" + `/pictures/${category}/links/collegewear.jpg` + ")" } : {}
      }></span>
      </div>    
      <div className={styles.link}>
      <Link href="#"><a className={styles.link_btn}>ACCESSORIES</a></Link>
      <span className={styles.img} style={
        category === Category.womens ? { backgroundImage: `url(/pictures/${category}/clothes/bag.webp)` } : 
        category === Category.mens ? { backgroundImage: `url(/pictures/${category}/clothes/accessories.webp)` } : 
        category === Category.kids ? { backgroundImage: `url(/pictures/${category}/clothes/fit9.webp)` } : {}
      }></span>
      </div>    
  </section>
}
export default StyleLinks;