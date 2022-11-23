import Image from "next/image";
import Link from "next/link";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import cardOne from "../../../assets/images/footer-card-1.png";
import cardTwo from "../../../assets/images/footer-card-2.png";
import cardThree from "../../../assets/images/footer-card-3.png";
import cardFour from "../../../assets/images/footer-card-4.png";
import styles from "./Footer.module.css";

const Footer = () => {
  let date = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__content} container`}>
        <div>
          <Link href="/" className={styles.footer__logo}>
            myTech<span>.</span>
          </Link>
          <p className={styles.footer__description}>
            Lorem ipsum dolor sit <br />
            amet consectetur adipisicing elit.
            <br /> Animi debitis molestiae.
          </p>
        </div>

        <div>
          <h3 className={styles.footer__title}>Main Menu</h3>
          <ul className={styles.footer__links}>
            <li>
              <Link href="/" className={styles.footer__link}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className={styles.footer__link}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.footer__link}>
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.footer__title}>Information</h3>
          <ul className={styles.footer__links}>
            <li>
              <Link href="/" className={styles.footer__link}>
                Legal Notice
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.footer__link}>
                Terms and conditions of use
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.footer__link}>
                Secure payment
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.footer__link}>
                Returns
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.footer__title}>Address</h3>
          <ul className={styles.footer__links}>
            <li>
              <p href="/" className={styles.footer__link}>
                Via Abisso 1234 <br /> Rome, 4321, Italy
              </p>
            </li>
            <li>
              <p href="/" className={styles.footer__link}>
                6AM - 11PM
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.footer__title}>Social Media</h3>
          <ul className={styles.footer__social}>
            <li>
              <Link href="https://www.facebook.com/" target="_blank">
                <SiFacebook className={styles.footer__social__icon} />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/" target="_blank">
                <SiInstagram className={styles.footer__social__icon} />
              </Link>
            </li>
            <li>
              <Link href="https://www.twitter.com/" target="_blank">
                <SiTwitter className={styles.footer__social__icon} />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={`${styles.footer__info} container`}>
        <span className={styles.footer__copy}>
          &#169; Copyright myTech {date}. All rights reserved
        </span>
        <div className={styles.footer__card}>
          <Image src={cardOne} alt="Picture of the card" />
          <Image src={cardTwo} alt="Picture of the card" />
          <Image src={cardThree} alt="Picture of the card" />
          <Image src={cardFour} alt="Picture of the card" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
