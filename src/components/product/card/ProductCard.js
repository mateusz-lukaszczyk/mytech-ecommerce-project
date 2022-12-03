import Image from "next/image";
import Link from "next/link";
import arrow from "../../../assets/images/arrow.png";
import stars from "../../../assets/images/stars.png";
import { insertDecimal } from "../../../utils/constants";
import { ButtonAddCart } from "../../buttons/buttonAddCart/ButtonAddCart";
import styles from "./ProductCard.module.css";

export const ProductCard = ({
  title,
  price,
  oldPrice,
  discountPercent,
  slug,
  image,
  isProductNew,
  isProductSale,
}) => {
  price = insertDecimal(price);
  oldPrice = insertDecimal(oldPrice);

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
      <div className={styles.new__products__card__price__wrapper}>
        <p className={styles.new__products__card__price}>${price}</p>
        <p
          className={
            isProductSale
              ? styles.new__products__card__old__price
              : styles.new__products__card__old__price__hidden
          }
        >
          ${oldPrice}
        </p>
      </div>
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
        {isProductNew ? "NEW" : isProductSale && `- ${discountPercent} %`}
      </span>
    </div>
  );
};
