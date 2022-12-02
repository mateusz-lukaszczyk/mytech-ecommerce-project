import Image from "next/image";
import featureImageDelivery from "../../../assets/images/feature-delivery.png";
import featureImageSafe from "../../../assets/images/feature-safe.png";
import featureImageSupport from "../../../assets/images/feature-support.png";
import styles from "./Features.module.css";

export const Features = () => {
  return (
    <section className="container">
      <div className={styles.features__content}>
        <div className={styles.features__content__box}>
          <Image
            src={featureImageDelivery}
            className={styles.features__content__box__image}
            alt="Delivery car"
          />
          <div>
            <h3 className={styles.features__content__box__title}>
              Free Delivery
            </h3>
            <p className={styles.features__content__box__description}>
              Free shipping around the world for all orders over $150
            </p>
          </div>
          <div className={styles.divider}></div>
        </div>
        <div className={styles.features__content__box}>
          <Image
            src={featureImageSafe}
            className={styles.features__content__box__image}
            alt="Safe Payment"
          />
          <div>
            <h3 className={styles.features__content__box__title}>
              Safe Payment
            </h3>
            <p className={styles.features__content__box__description}>
              With our payment gateway, don’t worry about your information
            </p>
          </div>
          <div className={styles.divider}></div>
        </div>
        <div className={styles.features__content__box}>
          <Image
            src={featureImageSupport}
            className={styles.features__content__box__image}
            alt="Headphones"
          />
          <div>
            <h3 className={styles.features__content__box__title}>
              Friendly Services
            </h3>
            <p className={styles.features__content__box__description}>
              You have 30-day return guarantee for every single order
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
