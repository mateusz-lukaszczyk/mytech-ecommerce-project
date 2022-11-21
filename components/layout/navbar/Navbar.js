import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiShoppingCart, HiXCircle } from "react-icons/hi";
import MenuOverlay from "../menuOverlay/MenuOverlay";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.header__navbar}>
      <div className={`${styles.nav__menu} ${menuOpen && styles.menu__active}`}>
        <span className={styles.nav__menu__name}>Menu</span>
        <ul className={styles.nav__list}>
          <li className={styles.nav__list__element}>
            <Link
              className={styles.nav__list__link}
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className={styles.nav__list__element}>
            <Link className={styles.nav__list__link} href="/products">
              Products
            </Link>
          </li>
          <li className={styles.nav__list__element}>
            <Link className={styles.nav__list__link} href="/contact">
              Contact
            </Link>
          </li>
          <HiXCircle
            className={styles.header__close}
            onClick={() => setMenuOpen(false)}
          />
        </ul>
      </div>
      <div className={styles.header__navbar__right}>
        <Link className={styles.header__right__link} href="/user/login">
          Sign in
        </Link>
        <div className={styles.divider}></div>
        <Link href="/cart">
          <HiShoppingCart className={styles.header__icon} />
        </Link>
        <div className={styles.divider}></div>
        <HiMenuAlt3
          className={styles.header__menu}
          onClick={() => setMenuOpen(true)}
        />
      </div>
      <MenuOverlay menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </nav>
  );
};

export default Navbar;
