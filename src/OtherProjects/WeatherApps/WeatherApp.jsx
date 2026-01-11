import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherHeader from "./WeatherHeader";
import WeatherMainCard from "./WeatherMainCard";
import WeatherSearch from "./WeatherSearch";
import WeatherSmallCards from "./WeatherSmallCards";
import sunnyWeather from "../../assets/ProjectsLogos/OtherProjectsSVG/autumnWeather.jpg";
import { mainCities } from "./WeatherDefaultCities";

function WeatherApp() {
  const [weather, setWeather] = useState([]);
  const [passName, setPassName] = useState("");
  const [passCurrentWeather, setPassCurrentWeather] = useState(null);
  const [passMetrics, setPassMetrics] = useState([]);
  const [show, setShow] = useState(false);
  const [getCities, setGetCities] = useState(null);

  const getMainCities = mainCities;

  useEffect(() => {
    const mainCitiesCoords = getMainCities.map((city, i) => ({
      index: i,
      latitude: city.latitude,
      longitude: city.longitude,
      name: city.name,
    }));
    setGetCities(mainCitiesCoords);
  }, []);

  const getMainCitiesData = async () => {
    try {
      const requests = getCities.map((city) =>
        axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`
        )
      );

      const responses = await Promise.all(requests);

      const mainWeather = responses.map((res, i) => ({
        city: getCities[i].name,
        ...res.data,
      }));

      console.log(mainWeather?.latitude);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMainCitiesData();
  }, []);

  const getData = async (query) => {
    if (!query) return;

    setPassName(query);

    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=10&language=en&format=json`;

    try {
      const { data } = await axios.get(url);
      setWeather(data?.results || []);
      console.log("Fetched data:", data?.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        className="text-white bg-cover bg-center min-h-screen
        max-2xl:max-w-screen-xl
        max-xl:max-w-screen-lg 
        max-lg:max-w-screen-md
        max-md:max-w-screen-sm
        max-sm:max-w-full
        max-sm:max-h-full"
        style={{
          backgroundImage: `url(${sunnyWeather})`,
        }}
      >
        <WeatherHeader metrics={passMetrics} />
        <div
          className="flex mt-5 h-210
        max-md:h-210"
        >
          <div className="flex w-full justify-between flex-col">
            {show && (
              <WeatherMainCard passCurrentWeather={passCurrentWeather} />
            )}
            <WeatherSmallCards
              setShow={setShow}
              setPassMetrics={setPassMetrics}
              weather={weather}
              passName={passName}
              setPassCurrentWeather={setPassCurrentWeather}
            />
            <WeatherSearch getData={getData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherApp;
