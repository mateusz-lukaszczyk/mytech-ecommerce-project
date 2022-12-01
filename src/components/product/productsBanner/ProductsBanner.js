import Image from "next/image";
import Link from "next/link";
import arrow from "../../../assets/images/arrow.png";
import productsBannerOne from "../../../assets/images/productsBanner-1.png";
import productsBannerTwo from "../../../assets/images/productsBanner-2.png";
import productsBannerThree from "../../../assets/images/productsBanner-3.png";
import styles from "./ProductsBanner.module.css";

export const ProductsBanner = () => (
  <div className={styles.products__banner__content}>
    <Link href="/products" className={styles.products__banner__box}>
      <div className={styles.products__banner__box__wrapper}>
        <h1 className={styles.products__banner__box__heading}>Watches</h1>
        <h3 className={styles.products__banner__box__subheading}>
          Activity Tracker
        </h3>
        <p className={styles.products__banner__box__description}>
          Check it out now!
        </p>
      </div>
      <div>
        <Image
          className={styles.products__banner__box__image}
          src={productsBannerOne}
          alt="Smart watch picture"
        />
        <Image
          className={styles.products__banner__box__arrow}
          src={arrow}
          alt="Arrow picture"
        />
      </div>
    </Link>
    <Link href="/products" className={styles.products__banner__box}>
      <div className={styles.products__banner__box__wrapper}>
        <h1 className={styles.products__banner__box__heading}>Laptops</h1>
        <h3 className={styles.products__banner__box__subheading}>
          Activity Tracker
        </h3>
        <p className={styles.products__banner__box__description}>
          Check it out now!
        </p>
      </div>
      <div>
        <Image
          className={styles.products__banner__box__image}
          src={productsBannerTwo}
          alt="Laptop picture"
        />
        <Image
          className={styles.products__banner__box__arrow}
          src={arrow}
          alt="Arrow picture"
        />
      </div>
    </Link>
    <Link href="/products" className={styles.products__banner__box}>
      <div className={styles.products__banner__box__wrapper}>
        <h1 className={styles.products__banner__box__heading}>Consoles</h1>
        <h3 className={styles.products__banner__box__subheading}>
          Activity Tracker
        </h3>
        <p className={styles.products__banner__box__description}>
          Check it out now!
        </p>
      </div>
      <div>
        <Image
          className={styles.products__banner__box__image}
          src={productsBannerThree}
          alt="Playstation picture"
        />
        <Image
          className={styles.products__banner__box__arrow}
          src={arrow}
          alt="Arrow picture"
        />
      </div>
    </Link>
  </div>
);
