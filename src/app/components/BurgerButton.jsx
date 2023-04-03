import React from "react";
import styles from "./Header.module.css";

function BurgerButton() {
  return (
    <div className={styles.hamburger}>
      <span className={`${styles.burger} ${styles.bar1}}`}/>
      <span className={`${styles.burger} ${styles.bar2}}`}/>
      <span className={`${styles.burger} ${styles.bar3}}`}/>
    </div>
  );
}

export default BurgerButton;
