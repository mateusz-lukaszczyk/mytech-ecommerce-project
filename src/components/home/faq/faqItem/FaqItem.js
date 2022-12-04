import { useState } from "react";
import { VscChevronDown, VscChevronLeft } from "react-icons/vsc";
import styles from "./FaqItem.module.css";

export const FaqItem = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div onClick={() => setShow(!show)}>
      <div className={styles.faq__item__data}>
        <div className={styles.faq__item__data__wrapper}>
          <h3 className={styles.faq__item__data__question}>{question}</h3>
          {show ? (
            <VscChevronLeft className={styles.faq__item__icon} />
          ) : (
            <VscChevronDown className={styles.faq__item__icon} />
          )}
        </div>
        {show && <p className={styles.faq__item__data__answer}>{answer}</p>}
      </div>
    </div>
  );
};
