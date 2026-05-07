import React from "react";
import styles from "./LoggingInComponent.module.css";

function LoggingInComponent() {
  return (
    <div className={`${styles.loader}`}>
      <label>Logging in...</label>
      <div className={`${styles.loading}`}></div>
    </div>
  );
}

export default LoggingInComponent;
