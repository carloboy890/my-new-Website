import React from "react";
import styles from "./RedirectingComponent.module.css";

function RedirectingComponent() {
  return (
    <div className={`${styles.loader}`}>
      <label>Redirecting...</label>
      <div className={`${styles.loading}`}></div>
    </div>
  );
}

export default RedirectingComponent;
