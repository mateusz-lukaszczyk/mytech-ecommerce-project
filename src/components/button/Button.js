import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({ buttonText }) => {
  return (
    <div>
      <Link href="/products">
        <button className={styles.button}>{buttonText}</button>
      </Link>
    </div>
  );
};

export default Button;
