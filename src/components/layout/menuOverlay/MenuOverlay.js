import styles from "./MenuOverlay.module.css";

const MenuOverlay = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`${
        isMenuOpen ? styles.menu__overlay__active : styles.menu__overlay
      }`}
      onClick={() => setIsMenuOpen(false)}
    ></div>
  );
};

export default MenuOverlay;
