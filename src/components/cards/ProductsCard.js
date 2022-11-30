import Image from "next/image";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi";
import arrow from "../../assets/images/arrow.png";
import stars from "../../assets/images/stars.png";
import styles from "./ProductsCard.module.css";

const ProductsCard = ({ title, price, slug, image, statusNew, statusSale }) => {
  const insertDecimal = (num) => {
    return (num / 100).toFixed(2);
  };
  price = insertDecimal(price);

  return (
    <Link href={slug} style={{ textDecoration: "none" }}>
      <div className={styles.newProductsCard__box}>
        <h1 className={styles.newProductsCard__title}>{title}</h1>
        <Image
          className={styles.newProductsCard__image}
          src={image}
          alt={title}
          width={200}
          height={200}
        />
        <Image
          src={stars}
          className={styles.reviews__stars}
          alt="reviews stars"
        />
        <p className={styles.newProductsCard__price}>${price}</p>
        <button className={styles.button}>
          <HiShoppingCart className={styles.newProductsCard__icon} />
          Add to cart
        </button>
        <Image
          className={styles.newProductsCard__arrow}
          src={arrow}
          alt="Arrow picture"
        />
        <span
          className={
            statusNew
              ? styles.newProductsCard__new__tag
              : statusSale
              ? styles.newProductsCard__sale__tag
              : styles.newProductsCard__regular__tag
          }
        >
          {statusNew ? "NEW" : statusSale ? "ON SALE" : ""}
        </span>
      </div>
    </Link>
  );
};

export default ProductsCard;
