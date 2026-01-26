import React, { useState, useEffect } from "react";
import axios from "axios";
import { getWeatherText } from "./WeatherlookUp";
import { getWeatherMetrics } from "./WeatherHeaderCardData";
import { formatDate } from "./WeatherFormatDate";
import WeatherPieceCards from "./WeatherPieceCards";
import { getWeatherIcon } from "./WeatherlookUpIcons";
import Sunny from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherLookUpLogos/SunnyLogo.svg";
import Cloudy from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherLookUpLogos/CloudyLogo.svg";
import Fog from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherLookUpLogos/FogLogo.svg";
import Rain from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherLookUpLogos/RainLogo.svg";
import Snow from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherLookUpLogos/SnowLogo.svg";
import HeavySnow from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherLookUpLogos/HeavynowLogo.svg";
import ThunderStorm from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherLookUpLogos/ThunderstormLogo.svg";
import NightWeatherPieceCard from "./NightWeatherPieceCard";
import { getIsNight } from "./WeatherWallpapers";

function WeatherSmallCards({
  weather,
  passName,
  setPassMetrics,
  setShow,
  setPassCurrentWeather,
  setNightWeatherTheme,
}) {
  const [coordinates, setCoordinates] = useState([]);
  const [dataCoord, setDataCoord] = useState(null);
  const [dataResult, setDataResult] = useState(null);
  const [icon, setIcon] = useState(Sunny);
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      try {
        const { data } = await axios.get(url);
        setDataResult(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [dataCoord]);

  useEffect(() => {
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
    const dailyResult = dataResult?.daily;

    if (dailyResult?.weathercode?.length > 0) {
      const weatherCode = dailyResult.weathercode[0];
      const weatherTextArray = getWeatherIcon(weatherCode);
      const weatherText = weatherTextArray?.[0];
      if (weatherText && iconMap[weatherText]) {
        setIcon(iconMap[weatherText]);
      } else {
        setIcon(Sunny);
      }
    } else {
      setIcon(Sunny);
    }
  }, [dataResult]);

  if (!dataResult || !dataResult.current_weather || !dataResult.daily) {
    return <p>Loading weather...</p>;
  }

  const weatherResult = dataResult.current_weather;
  const dailyResult = dataResult.daily;
  const hourlyResult = dataResult.hourly;

  const metrics = getWeatherMetrics(weatherResult, dailyResult, hourlyResult);

  const { temperature } = weatherResult;
  const {
    time,
    temperature_2m_max,
    temperature_2m_min,
    weathercode,
    sunrise,
    sunset,
  } = dailyResult;

  const passLocation = passName;

  const get4Dates = time.slice(0, 5);
  const newDates = get4Dates.map((date) => formatDate(date));

  const currentWeather = {
    current_weather: weatherResult,
    daily_result: dailyResult,
    hourly_Result: hourlyResult,
    location: passLocation,
    weatherText: getWeatherText(weathercode),
    date: newDates,
    timezone: dataResult.timezone,
  };

  const avgTemp = {
    temp1: ((temperature_2m_max[1] + temperature_2m_min[1]) / 2).toFixed(1),
    temp2: ((temperature_2m_max[2] + temperature_2m_min[2]) / 2).toFixed(1),
    temp3: ((temperature_2m_max[3] + temperature_2m_min[3]) / 2).toFixed(1),
  };

  function getMinutesFromOpenMeteoTime(dateTimeString) {
    if (!dateTimeString) return 0;
    const timePart = dateTimeString.split("T")[1];
    const [hour, minute] = timePart.split(":").map(Number);
    return hour * 60 + minute;
  }

  function getCurrentMinutesInTimezone(timezone) {
    const now = new Date();
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).formatToParts(now);

    const hour = Number(parts.find((p) => p.type === "hour").value);
    const minute = Number(parts.find((p) => p.type === "minute").value);

    return hour * 60 + minute;
  }

  const sunriseMinutes = getMinutesFromOpenMeteoTime(sunrise[0]);
  const sunsetMinutes = getMinutesFromOpenMeteoTime(sunset[0]);
  const currentMinutes = getCurrentMinutesInTimezone(currentWeather?.timezone);

  const isNight =
    currentMinutes < sunriseMinutes || currentMinutes >= sunsetMinutes;

  const nightTime = getIsNight(sunrise, sunset, currentWeather.timezone, 0);

  return (
    <div className="h-100 flex justify-center">
      {isNight ? (
        <div>
          <NightWeatherPieceCard
            setNightWeatherTheme={setNightWeatherTheme}
            nightTime={nightTime}
            icon={icon}
            passName={passName}
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
            currentWeather={currentWeather}
          />
        </div>
      ) : (
        <div>
          <WeatherPieceCards
            icon={icon}
            passName={passName}
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
            currentWeather={currentWeather}
          />
        </div>
      )}
    </div>
  );
}

export default WeatherSmallCards;
