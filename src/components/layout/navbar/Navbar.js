import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiShoppingCart, HiXCircle } from "react-icons/hi";
import { navLinks } from "../../../utils/constants";
import MenuOverlay from "../menuOverlay/MenuOverlay";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.header__navbar}>
      <div
        className={`${styles.nav__menu} ${isMenuOpen && styles.menu__active}`}
      >
        <span className={styles.nav__menu__name}>Menu</span>
        <ul className={styles.nav__list}>
          {navLinks.map((link) => {
            const { id, text, url } = link;
            return (
              <li className={styles.nav__list__element} key={id}>
                <Link
                  href={url}
                  className={styles.nav__list__link}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {text}
                </Link>
              </li>
            );
          })}
          <HiXCircle
            className={styles.header__close}
            onClick={() => setIsMenuOpen(false)}
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
          onClick={() => setIsMenuOpen(true)}
        />
      </div>
      <MenuOverlay isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </nav>
  );
};

export default Navbar;
