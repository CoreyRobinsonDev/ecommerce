import { BsSearch } from "react-icons/bs";
import styles from "../styles/searchbar.module.css";

const SearchBar = () => {
  return <form className={styles.container}>
    <input className={styles.input} type="text" placeholder="SEARCH THE STORE" />
    <button className={styles.submit} type="submit"><BsSearch/></button>
  </form>
}

export default SearchBar;