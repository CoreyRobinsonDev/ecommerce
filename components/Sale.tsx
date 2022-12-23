import ItemCard from "./ItemCard";
import styles from "../styles/sale.module.css";
import { Category } from "../util/types";

const Sale = ({ category = Category.womens}: { category?: Category}) => {
  return <section className={styles.container}>
    <h2 className={styles.title}>FLASH SALE</h2>
    <div className={styles.card_container}>
      <ItemCard category={category} index={4} hasSale={true} />
      <ItemCard category={category} index={5} hasSale={true} />
      <ItemCard category={category} index={6} hasSale={true} />
      <ItemCard category={category} index={2} hasSale={true} />
      <ItemCard category={category} index={7} hasSale={true} />
      <ItemCard category={category} index={1} hasSale={true} />
      <ItemCard category={category} index={0} hasSale={true} />
      <ItemCard category={category} index={3} hasSale={true} />
    </div>
  </section>
}
export default Sale;