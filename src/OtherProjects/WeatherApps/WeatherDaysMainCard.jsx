import React from "react";
import styles from "./WeatherApp.module.css";

function WeatherDaysMainCard({ props, onClick }) {
  return (
    <>
      <section className={`${styles.daysSection}`} onClick={onClick}>
        <button className={styles.button1}>
          <span className={styles.day}>{props.dateSlice}</span>
          <img className={styles.iconWeatherDay} src={props.isIcons} alt="" />
        </button>
      </section>
    </>
  );
}

export default WeatherDaysMainCard;
