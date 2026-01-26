import React from "react";
import styles from "./WeatherApp.module.css";
import styles1 from "./NightMainCardWeather.module.css";

function WeatherDaysMainCard({ props, onClick, isNight }) {
  const { id } = props;

  return (
    <>
      <section
        className={`${isNight ? styles1.daysSection : styles.daysSection}`}
        onClick={() => onClick(id)}
      >
        <button className={styles.button1}>
          <span className={`${styles.day}`}>{props.dateSlice}</span>
          <img className={styles.iconWeatherDay} src={props.isIcons} alt="" />
        </button>
      </section>
    </>
  );
}

export default WeatherDaysMainCard;
