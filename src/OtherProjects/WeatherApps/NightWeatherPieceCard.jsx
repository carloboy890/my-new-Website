import React from "react";
import styles from "./NightWeatherSmallCards.module.css";

function NightWeatherPieceCard(props) {
  const {
    setNightWeatherTheme,
    nightTime,
    icon,
    setWeatherWallpaper,
    weatherMP,
    timezone,
    passName,
    newDates0,
    newDates1,
    newDates2,
    newDates3,
    temperature,
    maxTemp1,
    maxTemp2,
    maxTemp3,
    setPassCurrentWeather,
    setPassMetrics,
    setShow,
    metrics,
    currentWeather,
  } = props;

  return (
    <>
      <div
        className="flex
            max-xl:p-2
            max-md:p-0 w-full max-sm:justify-center"
      >
        <div
          onClick={() => {
            setNightWeatherTheme(nightTime);
            setPassMetrics(metrics);
            setShow(true);
            setPassCurrentWeather(currentWeather);
            if (weatherMP) setWeatherWallpaper(weatherMP);
          }}
          className={`cursor-pointer scale-75 hover:scale-85 transition duration-400 ease-in-out ${styles.card}
                     max-2xl:scale-65 max-2xl:hover:scale-70
                     max-xl:scale-55 max-xl:hover:scale-60
                     max-md:scale-65 max-lg:hover:scale-70
                     max-sm:scale-65 border-1`}
        >
          <section className={`${styles.landscapeSection}`}>
            <div class={`${styles.sky}`}></div>
            <div class={`${styles.moon}`}>
              <div class={`${styles.shine1}`}></div>
              <div class={`${styles.shine2}`}></div>
              <div class={`${styles.realMoon}`}>
                <div class={`${styles.moonShape}`}></div>
              </div>
            </div>
            <div className={styles.hill1}></div>
            <div className={styles.hill2}></div>
            <div className={styles.ocean}>
              <div className={`${styles.reflection}`}></div>
              <div className={`${styles.reflection}`}></div>
              <div className={`${styles.reflection}`}></div>
              <div className={`${styles.reflection}`}></div>
              <div className={`${styles.reflection}`}></div>
              <div className={`${styles.shadowHill1}`}></div>
              <div className={`${styles.shadowHill2}`}></div>
            </div>
            <div className={`${styles.hill3}`}></div>
            <div className={`${styles.hill4}`}></div>
            <div className={`${styles.tree1}`}>
              <svg
                version="1.0"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 64 64"
                xml:space="preserve"
                fill="#47567F"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#47567F"
                    d="M32,0C18.148,0,12,23.188,12,32c0,9.656,6.883,17.734,16,19.594V60c0,2.211,1.789,4,4,4s4-1.789,4-4v-8.406 C45.117,49.734,52,41.656,52,32C52,22.891,46.051,0,32,0z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className={`${styles.tree2}`}>
              <svg
                version="1.0"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 64 64"
                xml:space="preserve"
                fill="#47567F"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#47567F"
                    d="M32,0C18.148,0,12,23.188,12,32c0,9.656,6.883,17.734,16,19.594V60c0,2.211,1.789,4,4,4s4-1.789,4-4v-8.406 C45.117,49.734,52,41.656,52,32C52,22.891,46.051,0,32,0z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className={`${styles.tree3}`}>
              <svg
                version="1.0"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="-0.64 -0.64 65.28 65.28"
                xml:space="preserve"
                fill="#4A4973"
                stroke="#4A4973"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#4A4973"
                    d="M32,0C18.148,0,12,23.188,12,32c0,9.656,6.883,17.734,16,19.594V60c0,2.211,1.789,4,4,4s4-1.789,4-4v-8.406 C45.117,49.734,52,41.656,52,32C52,22.891,46.051,0,32,0z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className={`${styles.filter}`}></div>
          </section>

          <section className={`${styles.contentSection}`}>
            <div className={`${styles.weatherInfo}`}>
              <div>
                <img className={`h-12 w-12`} src={icon} alt="weather icon" />
              </div>
              <div className={`${styles.rightSide}`}>
                <div className={`${styles.location}`}>
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
                <p>{newDates0}</p>
                <p className={`${styles.temperature}`}>{`${temperature}℃`}</p>
              </div>
            </div>
            <div className={`${styles.forecast}`}>
              <div>
                <p>{newDates1}</p>
                <p>{`${maxTemp1}°C`}</p>
              </div>
              <div className={`${styles.separator}`}></div>
              <div>
                <p>{newDates2}</p>
                <p>{`${maxTemp2}°C`}</p>
              </div>
              <div className={`${styles.separator}`}></div>
              <div>
                <p>{newDates3}</p>
                <p>{`${maxTemp3}°C`}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default NightWeatherPieceCard;
