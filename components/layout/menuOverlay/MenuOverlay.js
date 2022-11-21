import styles from "./MenuOverlay.module.css";

const MenuOverlay = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`${
        menuOpen ? styles.menu__overlay__active : styles.menu__overlay
      }`}
      onClick={() => setMenuOpen(false)}
    ></div>
  );
};

export default MenuOverlay;
