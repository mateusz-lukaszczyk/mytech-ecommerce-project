import { HiShoppingCart } from "react-icons/hi";
import styles from "./ButtonAddCart.module.css";

const ButtonAddCart = () => {
  return (
    <button className={styles.button}>
      <HiShoppingCart className={styles.newProductsCard__icon} />
      Add to cart
    </button>
  );
};

export default ButtonAddCart;
