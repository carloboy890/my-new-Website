import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherHeader from "./WeatherHeader";
import WeatherMainCard from "./WeatherMainCard";
import WeatherSearch from "./WeatherSearch";
import WeatherSmallCards from "./WeatherSmallCards";
import RainyDayWallpaper from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherWallpapers/RainyDayWallpaper.mp4";
import { mainCities } from "./WeatherDefaultCities";
import WeatherDefaultTenCities from "./WeatherDefaultTenCities";
import NightMainCardWeather from "./NightMainCardWeather";
import { getIsNight } from "./WeatherWallpapers";
import Lottie from "lottie-react";
import centerLoadingAnimation from "../../assets/ProjectsLogos/OtherProjectsSVG/Clouds.json";
import { useNavigate } from "react-router-dom";

function WeatherApp() {
  const [weather, setWeather] = useState([]);
  const [passName, setPassName] = useState("");
  const [passCurrentWeather, setPassCurrentWeather] = useState(null);
  const [passMetrics, setPassMetrics] = useState([]);
  const [show, setShow] = useState(false);
  const [getCities, setGetCities] = useState([]);
  const [tenCities, setTenCities] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [showMainCards, setShowMainCards] = useState(true);
  const [weatherWallpaper, setWeatherWallpaper] = useState(null);
  const [defaultWallpaper, setDefaultWallpaper] = useState(null);
  const [wallpaperSource, setWallpaperSource] = useState("default");
  const [nightWeatherTheme, setNightWeatherTheme] = useState(null);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    try {
      const requests = getCities.map((city) =>
        axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&hourly=relativehumidity_2m,surface_pressure&timezone=auto`,
        ),
      );

      const responses = await Promise.all(requests);

      const mainWeather = responses.map((res, i) => ({
        city: getCities[i].name,
        ...res.data,
      }));
      setTenCities(mainWeather);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMainCitiesData();
  }, [getCities]);

  const getData = async (query) => {
    if (!query) return;

    setPassName(query);

    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=10&language=en&format=json`;
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setWeather(data?.results || []);
      console.log("Fetched data:", data?.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const isNight =
    passCurrentWeather &&
    getIsNight(
      passCurrentWeather.daily_result.sunrise,
      passCurrentWeather.daily_result.sunset,
      passCurrentWeather.timezone,
      0,
    );

  const loadingTheme = () => {
    return (
      <div
        className="mt-50 
      max-lg:mt-20"
      >
        <Lottie
          className="max-lg:h-50"
          animationData={centerLoadingAnimation}
          loop
          autoplay
          style={{ width: 300 }}
        />
      </div>
    );
  };

  const navigate = useNavigate();

  const handleBack = () => {
    if (showSearch) {
      setShowSearch(false);
      setShowMainCards(true);
    } else {
      navigate(-1);
    }
  };
  return (
    <>
      <div
        className="relative w-full min-h-screen overflow-hidden text-white
        max-2xl:max-w-screen-xl
        max-xl:max-w-screen-lg 
        max-lg:max-w-screen-md
        max-md:max-w-screen-sm
        max-sm:max-w-full
        max-sm:max-h-full"
      >
        {" "}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={
            wallpaperSource === "default" ? defaultWallpaper : weatherWallpaper
          }
          autoPlay
          muted
          loop
        />
        <div className="relative z-10">
          <WeatherHeader metrics={passMetrics} onBack={handleBack} />
        </div>
        <div
          className="mt-5 min-h-[700px] w-full flex
        max-xl:-mt-10 
        max-lg:mt-20 justify-center"
        >
          {loading ? (
            loadingTheme()
          ) : (
            <div className="flex w-full pt-1 flex-col">
              {show &&
                (isNight ? (
                  <NightMainCardWeather
                    passCurrentWeather={passCurrentWeather}
                    setPassMetrics={setPassMetrics}
                    setWeatherWallpaper={setWeatherWallpaper}
                    setWallpaperSource={setWallpaperSource}
                    isNight={isNight}
                  />
                ) : (
                  <WeatherMainCard
                    passCurrentWeather={passCurrentWeather}
                    setPassMetrics={setPassMetrics}
                    setWeatherWallpaper={setWeatherWallpaper}
                    setWallpaperSource={setWallpaperSource}
                    isNight={isNight}
                  />
                ))}
              {showMainCards && !showSearch && (
                <WeatherDefaultTenCities
                  tenCities={tenCities}
                  setPassCurrentWeather={setPassCurrentWeather}
                  setPassMetrics={setPassMetrics}
                  setShow={setShow}
                  setWeatherWallpaper={setWeatherWallpaper}
                  setDefaultWallpaper={setDefaultWallpaper}
                  setWallpaperSource={setWallpaperSource}
                  setNightWeatherTheme={setNightWeatherTheme}
                />
              )}
              {showSearch && (
                <WeatherSmallCards
                  setShow={setShow}
                  setPassMetrics={setPassMetrics}
                  weather={weather}
                  passName={passName}
                  setPassCurrentWeather={setPassCurrentWeather}
                  setNightWeatherTheme={setNightWeatherTheme}
                />
              )}
            </div>
          )}
        </div>
        <div>
          <WeatherSearch
            getData={getData}
            setShowSearch={setShowSearch}
            setShow={setShow}
          />
        </div>
      </div>
    </>
  );
}

export default WeatherApp;
