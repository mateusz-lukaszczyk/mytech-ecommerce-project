import styles from "./MenuOverlay.module.css";

export const MenuOverlay = ({ isMenuOpen, setIsMenuOpen }) => (
  <div
    className={`${
      isMenuOpen ? styles.menu__overlay__active : styles.menu__overlay
    }`}
    onClick={() => setIsMenuOpen(false)}
  ></div>
);
