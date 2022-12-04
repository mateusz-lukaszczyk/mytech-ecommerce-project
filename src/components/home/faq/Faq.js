import Image from "next/image";
import arrow from "../../../assets/images/arrow.png";
import { faqQuestions } from "../../../utils/constants";
import styles from "./Faq.module.css";
import { FaqItem } from "./faqItem/FaqItem";

export const Faq = () => (
  <section className={styles.faq__background}>
    <div className={`${styles.faq__wrapper} container`}>
      <div className={styles.faq__headings}>
        <h1 className={styles.faq__heading}>
          You have questions? We have answers!
        </h1>
        <p className={styles.faq__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          dolor voluptate cupiditate perspiciatis. Architecto nulla, suscipit,
          officiis quod temporibus fuga saepe ipsam doloremque facilis.
        </p>
        <Image className={styles.faq__arrow} src={arrow} alt="Arrow picture" />
      </div>
      <div className={`${styles.faq__data}`}>
        {faqQuestions.map((element) => {
          const id = element.id;
          return <FaqItem key={id} {...element} />;
        })}
      </div>
    </div>
  </section>
);
