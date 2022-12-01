import Link from "next/link";
import styles from "./Button.module.css";

export const Button = ({ ...props }) => (
  <div>
    <Link href="/products">
      <button className={styles.button}>{props.buttonText}</button>
    </Link>
  </div>
);
