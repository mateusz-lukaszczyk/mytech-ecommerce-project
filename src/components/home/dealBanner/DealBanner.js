import Image from "next/image";
import Link from "next/link";
import stars from "../../../assets/images/stars.png";
import ButtonAddCart from "../../buttons/buttonAddCart/ButtonAddCart";
import Timer from "../../timer/Timer";
import styles from "./DealBanner.module.css";

const DealBanner = () => {
  return (
    <div className={styles.dealBanner__background}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.dealBanner__content}>
            <h2 className={styles.dealBanner__subheading}>deal title</h2>
            <Image
              src={stars}
              className={styles.reviews__stars}
              alt="reviews stars"
            />
            <Link href="/" style={{ textDecoration: "none" }}>
              <h1 className={styles.dealBanner__title}>CCTV CAMERA</h1>
              <p className={styles.dealBanner__description}> description</p>
            </Link>
            {/* <span className={styles.dealBanner__timer}>TIMER</span> */}
            <Timer />
            <p className={styles.dealBanner__price}>PRICE</p>
            <ButtonAddCart />
            <div className={styles.background__price}>18.00 $</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealBanner;
