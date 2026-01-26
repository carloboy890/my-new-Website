import React, { useEffect } from "react";
import WeatherPieceCards from "./WeatherPieceCards";
import { formatDate } from "./WeatherFormatDate";
import { getWeatherMetrics } from "./WeatherHeaderCardData";
import { getWeatherText } from "./WeatherlookUp";
import { formatTimeForTimezone } from "./formatTime";
import { getWeatherWallpaper } from "./WeatherWallpapers";
import { getIsNight } from "./WeatherWallpapers";
import NightWeatherPieceCard from "./NightWeatherPieceCard";
import { getWeatherIcon } from "./WeatherlookUpIcons";
import Sunny from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherLookUpLogos/SunnyLogo.svg";
import Cloudy from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherLookUpLogos/CloudyLogo.svg";
import Fog from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherLookUpLogos/FogLogo.svg";
import Rain from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherLookUpLogos/RainLogo.svg";
import Snow from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherLookUpLogos/SnowLogo.svg";
import HeavySnow from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherLookUpLogos/HeavynowLogo.svg";
import ThunderStorm from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherLookUpLogos/ThunderstormLogo.svg";

const iconMap = {
  sunny: Sunny,
  cloudy: Cloudy,
  fog: Fog,
  rain: Rain,
  snow: Snow,
  heavySnow: HeavySnow,
  rainShowers: Rain,
  thunderStorm: ThunderStorm,
};

function WeatherDefaultTenCities({
  tenCities,
  setPassCurrentWeather,
  setPassMetrics,
  setShow,
  setWeatherWallpaper,
  setDefaultWallpaper,
  setWallpaperSource,
  setNightWeatherTheme,
}) {
  useEffect(() => {
    if (tenCities.length === 0) return;

    const firstCity = tenCities[0];

    if (firstCity.daily && firstCity.hourly && firstCity.current_weather) {
      const metrics = getWeatherMetrics(
        firstCity.current_weather,
        firstCity.daily,
        firstCity.hourly,
      );

      const get4Dates = firstCity.daily.time.slice(0, 5);
      const newDates = get4Dates.map((date) => formatDate(date));
      const currentWeather = {
        current_weather: firstCity.current_weather,
        daily_result: firstCity.daily,
        hourly_Result: firstCity.hourly,
        location: firstCity.city,
        weatherText: getWeatherText(firstCity.daily.weathercode),
        date: newDates,
        timezone: firstCity.timezone,
      };

      const formattedTime = formatTimeForTimezone(currentWeather.timezone);

      const defaultWallpaper = getWeatherWallpaper(
        firstCity.daily.weathercode,
        formattedTime,
        firstCity.daily.sunrise,
        firstCity.daily.sunset,
        currentWeather.timezone,
        0,
      );

      setPassCurrentWeather(currentWeather);
      setPassMetrics(metrics);
      setShow(true);
      setDefaultWallpaper(defaultWallpaper);
      setWallpaperSource("default");
    }
  }, [
    tenCities,
    setPassCurrentWeather,
    setPassMetrics,
    setShow,
    setDefaultWallpaper,
    setWallpaperSource,
  ]);

  return (
    <div
      className="h-210 justify-center flex flex-wrap 
    max-xl:h-230 max-lg:h-auto"
    >
      {tenCities.map((value, i) => {
        const {
          temperature_2m_max,
          temperature_2m_min,
          time,
          weathercode,
          sunrise,
          sunset,
        } = value.daily;
        const { temperature } = value.current_weather;

        const weatherText = getWeatherText(weathercode);
        const metrics = getWeatherMetrics(
          value?.current_weather,
          value?.daily,
          value?.hourly,
        );

        const avgTemp = {
          temp1: ((temperature_2m_max[1] + temperature_2m_min[1]) / 2).toFixed(
            1,
          ),
          temp2: ((temperature_2m_max[2] + temperature_2m_min[2]) / 2).toFixed(
            1,
          ),
          temp3: ((temperature_2m_max[3] + temperature_2m_min[3]) / 2).toFixed(
            1,
          ),
        };

        const get4Dates = time.slice(0, 5);
        const newDates = get4Dates.map((date) => formatDate(date));

        const currentWeather = {
          current_weather: value?.current_weather,
          daily_result: value?.daily,
          hourly_Result: value?.hourly,
          location: value?.city,
          weatherText: weatherText,
          date: newDates,
          timezone: value?.timezone,
        };

        console.log(get4Dates);

        const formattedTime = formatTimeForTimezone(currentWeather.timezone);
        const weatherMP = getWeatherWallpaper(
          weathercode,
          formattedTime,
          sunrise,
          sunset,
          currentWeather.timezone,
          0,
        );

        const nightTime = getIsNight(
          sunrise,
          sunset,
          currentWeather.timezone,
          0,
        );

        const weatherCodeToday = value.daily.weathercode[0];
        const weatherKey = getWeatherIcon(weatherCodeToday)?.[0];
        const icon = iconMap[weatherKey] || Sunny;

        return (
          <div
            className="w-82
          max-2xl:w-63 max-xl:h-10 max-xl:-mt-30
          max-lg:w-58 max-lg:h-65 max-lg:-mt-10
          max-md:h-55 max-md:w-53"
          >
            {nightTime ? (
              <>
                <NightWeatherPieceCard
                  key={i}
                  setNightWeatherTheme={setNightWeatherTheme}
                  nightTime={nightTime}
                  icon={icon}
                  setWeatherWallpaper={setWeatherWallpaper}
                  timezone={currentWeather.timezone}
                  passName={value?.city}
                  newDates0={newDates[0]}
                  newDates1={newDates[1]}
                  newDates2={newDates[2]}
                  newDates3={newDates[3]}
                  temperature={temperature}
                  maxTemp1={avgTemp.temp1}
                  maxTemp2={avgTemp.temp2}
                  maxTemp3={avgTemp.temp3}
                  setPassCurrentWeather={setPassCurrentWeather}
                  setPassMetrics={setPassMetrics}
                  setShow={setShow}
                  metrics={metrics}
                  weatherMP={weatherMP}
                  currentWeather={currentWeather}
                />
              </>
            ) : (
              <>
                <WeatherPieceCards
                  key={i}
                  icon={icon}
                  setWeatherWallpaper={setWeatherWallpaper}
                  timezone={currentWeather.timezone}
                  passName={value?.city}
                  newDates0={newDates[0]}
                  newDates1={newDates[1]}
                  newDates2={newDates[2]}
                  newDates3={newDates[3]}
                  temperature={temperature}
                  maxTemp1={avgTemp.temp1}
                  maxTemp2={avgTemp.temp2}
                  maxTemp3={avgTemp.temp3}
                  setPassCurrentWeather={setPassCurrentWeather}
                  setPassMetrics={setPassMetrics}
                  setShow={setShow}
                  metrics={metrics}
                  weatherMP={weatherMP}
                  currentWeather={currentWeather}
                />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default WeatherDefaultTenCities;
