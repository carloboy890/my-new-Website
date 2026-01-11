import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./WeatherSmallCards.module.css";
import { getWeatherText } from "./WeatherlookUp";
import { useWeatherMetrics } from "./WeatherHeaderCardData";
import { formatDate } from "./WeatherFormatDate";

function WeatherSmallCards({
  weather,
  passName,
  setPassMetrics,
  setShow,
  setPassCurrentWeather,
}) {
  const [coordinates, setCoordinates] = useState([]);
  const [dataCoord, setDataCoord] = useState(null);
  const [dataResult, setDataResult] = useState(null);

  useEffect(() => {
    if (!weather || weather.length === 0) return;

    const allCoords = weather.map((value, i) => ({
      index: i,
      latitude: value.latitude,
      longitude: value.longitude,
    }));

    setCoordinates(allCoords);
  }, [weather]);

  useEffect(() => {
    if (coordinates.length === 0) return;

    setDataCoord({
      latitude: coordinates[0].latitude,
      longitude: coordinates[0].longitude,
    });
  }, [coordinates]);

  useEffect(() => {
    if (!dataCoord) return;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${dataCoord.latitude}&longitude=${dataCoord.longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,surface_pressure&daily=sunrise,sunset,weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`;

    const getData = async () => {
      try {
        const { data } = await axios.get(url);
        setDataResult(data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [dataCoord]);

  const weatherResult = dataResult?.current_weather;
  const dailyResult = dataResult?.daily;
  const hourlyResult = dataResult?.hourly;

  const metrics = useWeatherMetrics(weatherResult, dailyResult, hourlyResult);

  if (!weatherResult) {
    return <p>Loading weather...</p>;
  }

  const { temperature } = weatherResult;
  const { time, weathercode } = dailyResult;
  const { temperature_2m_max } = dailyResult;
  const weatherText = getWeatherText(weathercode);
  const passLocation = passName;

  const get4Dates = time.slice(0, 5);

  const newDates = get4Dates.map((date) => formatDate(date));

  const currentWeather = {
    current_weather: weatherResult,
    daily_result: dailyResult,
    hourly_Result: hourlyResult,
    location: passLocation,
    weatherText: weatherText,
    date: newDates,
    timezone: dataResult.timezone,
  };

  console.log(dataResult);

  return (
    <>
      <div
        className="flex p-5
        max-xl:p-2
        max-md:p-0 w-full max-sm:justify-center"
      >
        <div
          onClick={() => {
            setPassMetrics(metrics);
            setShow(true);
            setPassCurrentWeather(currentWeather);
          }}
          className={`cursor-pointer scale-75 hover:scale-85 transition duration-400 ease-in-out ${styles.card}
          max-2xl:scale-75 max-2xl:hover:scale-90
          max-xl:scale-70 max-xl:hover:scale-80
          max-md:scale-60
          max-sm:scale-50 border-1`}
        >
          <section className={`${styles.landscapeSection}`}>
            <div className={styles.sky}></div>
            <div className={styles.sun}></div>
            <div className={styles.hill1}></div>
            <div className={styles.hill2}></div>
            <div className={styles.ocean}>
              <div className={styles.reflection}></div>
              <div className={styles.reflection}></div>
              <div className={styles.reflection}></div>
              <div className={styles.reflection}></div>
              <div className={styles.reflection}></div>
              <div className={styles.shadowHill1}></div>
              <div className={styles.shadowHill2}></div>
            </div>
            <div className={styles.hill3}></div>
            <div className={styles.hill4}></div>
            <div className={styles.tree1}>
              <svg
                stroke-width="0.00064"
                stroke="#b77873"
                fill="#b77873"
                xml:space="preserve"
                viewBox="0 0 64.00 64.00"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                version="1.0"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M32,0C18.148,0,12,23.188,12,32c0,9.656,6.883,17.734,16,19.594V60c0,2.211,1.789,4,4,4s4-1.789,4-4v-8.406 C45.117,49.734,52,41.656,52,32C52,22.891,46.051,0,32,0z"
                    fill="#b77873"
                  ></path>
                </g>
              </svg>
            </div>
            <div className={styles.tree2}>
              <svg
                stroke-width="0.00064"
                stroke="#b77873"
                fill="#b77873"
                xml:space="preserve"
                viewBox="0 0 64.00 64.00"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                version="1.0"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M32,0C18.148,0,12,23.188,12,32c0,9.656,6.883,17.734,16,19.594V60c0,2.211,1.789,4,4,4s4-1.789,4-4v-8.406 C45.117,49.734,52,41.656,52,32C52,22.891,46.051,0,32,0z"
                    fill="#b77873"
                  ></path>
                </g>
              </svg>
            </div>
            <div className={styles.tree3}>
              <svg
                version="1.0"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 64.00 64.00"
                xml:space="preserve"
                fill="#a16773"
                stroke="#a16773"
                stroke-width="0.00064"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#a16773"
                    d="M32,0C18.148,0,12,23.188,12,32c0,9.656,6.883,17.734,16,19.594V60c0,2.211,1.789,4,4,4s4-1.789,4-4v-8.406 C45.117,49.734,52,41.656,52,32C52,22.891,46.051,0,32,0z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className={styles.filter}></div>
          </section>

          <section className={styles.contentSection}>
            <div className={styles.weatherInfo}>
              <div className={styles.leftSide}>
                <div className={styles.icon}>{/* <p>{weatherText}</p> */}</div>
              </div>
              <div className={styles.rightSide}>
                <div className={styles.location}>
                  <div>
                    <svg
                      version="1.0"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="64px"
                      height="64px"
                      viewBox="0 0 64 64"
                      xml:space="preserve"
                      fill="#ffffff"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fill="#ffffff"
                          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                        ></path>
                      </g>
                    </svg>
                    <span>{passName}</span>
                  </div>
                </div>
                <p>{newDates[0]}</p>
                <p className={styles.temperature}>{`${temperature}℃`}</p>
              </div>
            </div>
            <div className={styles.forecast}>
              <div>
                <p>{newDates[1]}</p>
                <p>{`${temperature_2m_max[1]}°C`}</p>
              </div>
              <div className={styles.separator}></div>
              <div>
                <p>{newDates[2]}</p>
                <p>{`${temperature_2m_max[2]}°C`}</p>
              </div>
              <div className={styles.separator}></div>
              <div>
                <p>{newDates[3]}</p>
                <p>{`${temperature_2m_max[3]}°C`}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default WeatherSmallCards;
