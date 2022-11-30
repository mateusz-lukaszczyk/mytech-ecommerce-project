import Button from "../../buttons/button/Button";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__content}>
          <h1 className={styles.hero__content__heading}>
            Best <br /> Products
          </h1>
          <h2 className={styles.hero__content__subheading}>Best Quality</h2>
          <p className={styles.hero__content__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            culpa, praesentium tempore.
          </p>
        </div>
        <Button buttonText="Discover" />
      </div>
    </section>
  );
};

export default Hero;
