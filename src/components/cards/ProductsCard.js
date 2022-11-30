import Image from "next/image";
import Link from "next/link";
import arrow from "../../assets/images/arrow.png";
import stars from "../../assets/images/stars.png";
import ButtonAddCart from "../buttons/buttonAddCart/ButtonAddCart";
import styles from "./ProductsCard.module.css";

const ProductsCard = ({ title, price, slug, image, statusNew, statusSale }) => {
  const insertDecimal = (num) => {
    return (num / 100).toFixed(2);
  };
  price = insertDecimal(price);

  return (
    <div>
      <div className={styles.newProductsCard__box}>
        <Link href={slug} style={{ textDecoration: "none" }}>
          <h1 className={styles.newProductsCard__title}>{title}</h1>
        </Link>
        <Link href={slug} style={{ textDecoration: "none" }}>
          <Image
            className={styles.newProductsCard__image}
            src={image}
            alt={title}
            width={200}
            height={200}
          />
        </Link>
        <Image
          src={stars}
          className={styles.reviews__stars}
          alt="reviews stars"
        />
        <p className={styles.newProductsCard__price}>${price}</p>
        <ButtonAddCart />

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
    </div>
  );
};

export default ProductsCard;
