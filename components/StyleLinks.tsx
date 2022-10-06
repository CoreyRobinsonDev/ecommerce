import Link from "next/link";
import { Category } from "../util/types";
import styles from "../styles/styleLinks.module.css";

const StyleLinks = ({category = Category.womens}) => {
  return <section className={styles.container}>
      <div className={styles.link} >
      <Link href="#"><a className={styles.link_btn}>TOPS</a></Link>
      <span className={styles.img} style={{
        backgroundImage: `url(/pictures/${category}/clothes/tops.webp)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}></span>
      </div>    
      <div className={styles.link}>
      <Link href="#"><a className={styles.link_btn}>BOTTOMS</a></Link>
      <span className={styles.img} style={{
        backgroundImage: `url(/pictures/${category}/clothes/fit1.webp)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}></span>
      </div>    
      <div className={styles.link}>
      <Link href="#"><a className={styles.link_btn}>CASUAL</a></Link>
      <span className={styles.img} style={{
        backgroundImage: `url(/pictures/${category}/clothes/casual.webp)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}></span>
      </div>    
      <div className={styles.link}>
      <Link href="#"><a className={styles.link_btn}>DRESSES</a></Link>
      <span className={styles.img} style={{
        backgroundImage: `url(/pictures/${category}/clothes/fit9.webp)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}></span>
      </div>    
      <div className={styles.link}>
      <Link href="#"><a className={styles.link_btn}>FORMAL</a></Link>
      <span className={styles.img} style={{
        backgroundImage: `url(/pictures/${category}/clothes/formal.webp)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}></span>
      </div>    
      <div className={styles.link}>
      <Link href="#"><a className={styles.link_btn}>SWIMWEAR</a></Link>
      <span className={styles.img} style={{
        backgroundImage: `url(/pictures/${category}/clothes/fit12.webp)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}></span>
      </div>    
      <div className={styles.link}> 
      <Link href="#"><a className={styles.link_btn}>SHOES</a></Link>
      <span className={styles.img} style={{
        backgroundImage: `url(/pictures/${category}/clothes/fit15.webp)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}></span>
      </div>    
      <div className={styles.link}>
      <Link href="#"><a className={styles.link_btn}>ACCESSORIES</a></Link>
      <span className={styles.img} style={{
        backgroundImage: `url(/pictures/${category}/clothes/bag.webp)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}></span>
      </div>    
    
  </section>
}
export default StyleLinks;