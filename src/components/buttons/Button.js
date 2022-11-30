import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({ ...props }) => {
  return (
    <div>
      <Link href="/products">
        <button className={styles.button}>{props.buttonText}</button>
      </Link>
    </div>
  );
};

export default Button;
