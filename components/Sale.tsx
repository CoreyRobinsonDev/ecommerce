import ItemCard from "./ItemCard";
import styles from "../styles/sale.module.css";

const Sale = () => {
  return <section className={styles.container}>
    <h2 className={styles.title}>FLASH SALE</h2>
    <div className={styles.card_container}>
      <ItemCard index={4} hasSale={true} />
      <ItemCard index={5} hasSale={true} />
      <ItemCard index={6} hasSale={true} />
      <ItemCard index={2} hasSale={true} />
      <ItemCard index={7} hasSale={true} />
      <ItemCard index={1} hasSale={true} />
      <ItemCard index={0} hasSale={true} />
      <ItemCard index={3} hasSale={true} />
    </div>
  </section>
}
export default Sale;