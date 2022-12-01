import Link from "next/link";
import styles from "./Header.module.css";
import { Navbar } from "./navbar/Navbar";

export const Header = () => (
  <header className={styles.header__wrapper}>
    <div className={`${styles.header} container`}>
      <Link href="/" className={styles.header__logo}>
        myTech<span>.</span>
      </Link>
      <Navbar />
    </div>
  </header>
);
