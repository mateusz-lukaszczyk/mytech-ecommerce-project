import { HiShoppingCart } from "react-icons/hi";
import styles from "./ButtonAddCart.module.css";

export const ButtonAddCart = () => (
  <button className={styles.button}>
    <HiShoppingCart className={styles.newProductsCard__icon} />
    Add to cart
  </button>
);
