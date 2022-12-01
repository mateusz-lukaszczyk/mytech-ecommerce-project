import Image from "next/image";
import Link from "next/link";
import arrow from "../../../assets/images/arrow.png";
import stars from "../../../assets/images/stars.png";
import { ButtonAddCart } from "../../buttons/buttonAddCart/ButtonAddCart";
import styles from "./ProductCard.module.css";

export const ProductCard = ({
  title,
  price,
  slug,
  image,
  isProductNew,
  isProductSale,
}) => {
  const insertDecimal = (num) => {
    return (num / 100).toFixed(2);
  };
  price = insertDecimal(price);

  return (
    <div className={styles.new__products__card__box}>
      <Link href={slug} style={{ textDecoration: "none" }}>
        <h1 className={styles.new__products__card__title}>{title}</h1>
      </Link>
      <Link href={slug} style={{ textDecoration: "none" }}>
        <Image
          className={styles.new__products__card__image}
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
      <p className={styles.new__products__card__price}>${price}</p>
      <ButtonAddCart />
      <Image
        className={styles.new__products__card__arrow}
        src={arrow}
        alt="Arrow picture"
      />
      <span
        className={
          isProductNew
            ? styles.new__products__card__new__tag
            : isProductSale
            ? styles.new__products__card__sale__tag
            : styles.new__products__card__regular__tag
        }
      >
        {isProductNew ? "NEW" : isProductSale ? "ON SALE" : ""}
      </span>
    </div>
  );
};
