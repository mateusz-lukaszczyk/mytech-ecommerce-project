import Image from "next/image";
import Link from "next/link";
import productsBannerOne from "../../../assets/images/productsBanner-1.png";
import productsBannerTwo from "../../../assets/images/productsBanner-2.png";
import productsBannerThree from "../../../assets/images/productsBanner-3.png";
import styles from "./ProductsBanner.module.css";

const ProductsBanner = () => {
  return (
    <div className={styles.productsBanner}>
      <div className={styles.productsBanner__content}>
        <Link href="/products" className={styles.productsBanner__box}>
          <div className={styles.productsBanner__box__wrapper}>
            <h1 className={styles.productsBanner__box__heading}>Watches</h1>
            <h3 className={styles.productsBanner__box__subheading}>
              Activity Tracker
            </h3>
            <p className={styles.productsBanner__box__description}>
              Check it out now!
            </p>
          </div>
          <div>
            <Image
              className={styles.productsBanner__box__image}
              src={productsBannerOne}
              alt="Smart watch picture"
            />
          </div>
        </Link>
        <Link href="/products" className={styles.productsBanner__box}>
          <div className={styles.productsBanner__box__wrapper}>
            <h1 className={styles.productsBanner__box__heading}>Laptop</h1>
            <h3 className={styles.productsBanner__box__subheading}>
              Activity Tracker
            </h3>
            <p className={styles.productsBanner__box__description}>
              Check it out now!
            </p>
          </div>
          <div>
            <Image
              className={styles.productsBanner__box__image}
              src={productsBannerTwo}
              alt="Laptop picture"
            />
          </div>
        </Link>
        <Link href="/products" className={styles.productsBanner__box}>
          <div className={styles.productsBanner__box__wrapper}>
            <h1 className={styles.productsBanner__box__heading}>Console</h1>
            <h3 className={styles.productsBanner__box__subheading}>
              Activity Tracker
            </h3>
            <p className={styles.productsBanner__box__description}>
              Check it out now!
            </p>
          </div>
          <div>
            <Image
              className={styles.productsBanner__box__image}
              src={productsBannerThree}
              alt="Playstation picture"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductsBanner;
