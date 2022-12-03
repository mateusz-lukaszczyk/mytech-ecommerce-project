import Image from "next/image";
import arrow from "../../../assets/images/arrow.png";
import testimonialsImage from "../../../assets/images/testimonialsImage.png";
import styles from "./Testimonials.module.css";

export const Testimonials = () => (
  <div className={styles.testimonials__background}>
    <div className={`${styles.testimonials__box} container`}>
      <div className={styles.testimonials__box__review}>
        <div className={styles.testimonials__box__review__author}>
          <Image
            src={testimonialsImage}
            className={styles.testimonials__box__review__author__image}
            alt="Author's picture"
          />
          <div className={styles.testimonials__box__review__author__data}>
            <p className={styles.testimonials__box__review__author__name}>
              Robert Adams
            </p>
            <p
              className={styles.testimonials__box__review__author__description}
            >
              CEO at Shoppy
            </p>
          </div>
        </div>
        <p className={styles.testimonials__box__review__description}>
          <span className={styles.testimonials__box__review__description__dark}>
            Lorem ipsum dolor sit amet consectetur.{" "}
          </span>
          Adipisicing elit, Voluptate ex labore dolores aspernatur! Perferendis
          repellendus quia et repudiandae nobis eius optio omnis sed nostrum.
          Perferendis repellendus quia et repudiandae nobis eius optio omnis sed
          nostrum.
          <br /> <br /> Wonderfull. Well done.
        </p>
        <p className={styles.testimonials__box__review__time}>
          4:50 PM - Oct 29, 2022
        </p>
      </div>
      <div className={styles.testimonials__box__content}>
        <h1 className={styles.testimonials__box__content__heading}>
          Wise words. Read our customer review.
        </h1>
        <p className={styles.testimonials__box__content__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          dolor voluptate cupiditate perspiciatis. Architecto nulla, suscipit,
          officiis quod temporibus fuga saepe ipsam doloremque facilis.
        </p>
        <Image
          className={styles.testimonials__box__content__arrow}
          src={arrow}
          alt="Arrow picture"
        />
      </div>
    </div>
  </div>
);
