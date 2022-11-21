import Link from "next/link";
import Navbar from "../navbar/Navbar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header__wrapper}>
      <div className={`${styles.header} container`}>
        <Link href="/" className={styles.header__logo}>
          myTech<span>.</span>
        </Link>

        <Navbar />
      </div>
    </div>
  );
};

export default Header;
