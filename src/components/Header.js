import React from "react";
import styles from "./header.module.scss";

export function Header() {
  return (
    <div className={styles.headerBackground}>
      <h1 className={styles.title}>HOOKED</h1>
    </div>
  );
}
