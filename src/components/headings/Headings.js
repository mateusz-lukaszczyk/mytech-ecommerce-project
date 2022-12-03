import Image from "next/image";
import arrow from "../../assets/images/arrow.png";
import styles from "./Headings.module.css";

export const Headings = ({ heading, description }) => (
  <div className={styles.headings__wrapper}>
    <h1 className={styles.headings__heading}>{heading}</h1>
    <p className={styles.headings__description}>{description}</p>
    <Image className={styles.headings__arrow} src={arrow} alt="Arrow picture" />
  </div>
);
