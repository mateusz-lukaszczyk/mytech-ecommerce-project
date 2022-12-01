import Image from "next/image";
import Link from "next/link";
import arrow from "../../../assets/images/arrow.png";
import stars from "../../../assets/images/stars.png";
import { insertDecimal } from "../../../utils/constants";
import { ButtonAddCart } from "../../buttons/buttonAddCart/ButtonAddCart";
import { Timer } from "../../timer/Timer";
import styles from "./DealBanner.module.css";

export const DealBanner = ({ dealBannerData }) => {
  const getValues = () => {
    let dataArray = [];
    let dataObject = {};

    Object.values(dealBannerData).forEach((item) => {
      item.map((element) => {
        dataObject.title = element.title;
        dataObject.price = insertDecimal(element.price);
        dataObject.slug = element.slug;
        dataObject.dealTitle = element.dealTitle;
        dataObject.discountPercent = element.discountPercent;
        dataObject.description = element.description;
        dataObject.oldPrice = insertDecimal(element.oldPrice);
        dataArray.push(dataObject);
        dataObject = {};
      });
    });

    return dataArray;
  };

  const dealBannerFinalData = getValues();

  return (
    <section className={styles.deal__banner__background}>
      <div className={styles.deal__banner__content}>
        <h2 className={styles.deal__banner__subheading}>
          {dealBannerFinalData[0].dealTitle}
        </h2>
        <Image
          src={stars}
          className={styles.reviews__stars}
          alt="reviews stars"
        />
        <Link
          href={dealBannerFinalData[0].slug}
          style={{ textDecoration: "none" }}
        >
          <h1 className={styles.deal__banner__title}>
            {dealBannerFinalData[0].title}
          </h1>
          <p className={styles.deal__banner__description}>
            {" "}
            {dealBannerFinalData[0].description}
          </p>
        </Link>
        <Timer />
        <div className={styles.deal__banner__old__price__content}>
          <p className={styles.deal__banner__discount}>
            {dealBannerFinalData[0].discountPercent}% OFF!
          </p>
          <p className={styles.deal__banner__old__price}>
            {dealBannerFinalData[0].oldPrice} $
          </p>
        </div>
        <p className={styles.deal__banner__price}>
          {dealBannerFinalData[0].price} $
        </p>
        <Image
          className={styles.deal__banner__arrow}
          src={arrow}
          alt="Arrow picture"
        />
        <ButtonAddCart />
        <div className={styles.background__price}>
          {dealBannerFinalData[0].price} $
        </div>
      </div>
    </section>
  );
};
