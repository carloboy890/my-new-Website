import SunnyDayWallpaper from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherWallpapers/SunnyDayWeather.mp4";
import CloudyWallpaper from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherWallpapers/CloudyWallpaper.mp4";
import RainyDayWallpaper from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherWallpapers/RainyDayWallpaper.mp4";
import FoggyWallpaper from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherWallpapers/FoggyWallpaper.mp4";
import SnowWallpaper from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherWallpapers/SnowWeather.mp4";
import ThunderStormWallpaper from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherWallpapers/ThunderStormWallpaper.mp4";
import NightWallpaper from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherWallpapers/NightWallpaper.mp4";
import RainyNightWallpaper from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherWallpapers/RainyNightWeather.mp4";

export const wallpaperVideoMap = {
  sunny: SunnyDayWallpaper,
  cloudy: CloudyWallpaper,
  rain: RainyDayWallpaper,
  fog: FoggyWallpaper,
  snow: SnowWallpaper,
  heavySnow: SnowWallpaper,
  rainShowers: RainyDayWallpaper,
  thunderStorm: ThunderStormWallpaper,
  night: NightWallpaper,
  rainyNight: RainyNightWallpaper,
};

// function getMinutesFromFormattedTime(formattedTime) {
//   if (!formattedTime) return 0;

//   const [time, period] = formattedTime.split(" ");
//   let [hour, minute] = time.split(":").map(Number);

//   if (period === "PM" && hour !== 12) hour += 12;
//   if (period === "AM" && hour === 12) hour = 0;

//   return hour * 60 + minute;
// }

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

export function getIsNight(sunrise, sunset, timezone, dayIndex = 0) {
  const sunriseMinutes = getMinutesFromOpenMeteoTime(sunrise?.[dayIndex]);
  const sunsetMinutes = getMinutesFromOpenMeteoTime(sunset?.[dayIndex]);
  const currentMinutes = getCurrentMinutesInTimezone(timezone);

  return currentMinutes < sunriseMinutes || currentMinutes >= sunsetMinutes;
}

export function getWeatherWallpaper(
  weatherCode,
  formattedTime,
  sunrise,
  sunset,
  timezone,
  dayIndex = 0,
) {
  const sunriseMinutes = getMinutesFromOpenMeteoTime(sunrise?.[dayIndex]);
  const sunsetMinutes = getMinutesFromOpenMeteoTime(sunset?.[dayIndex]);
  const currentMinutes = getCurrentMinutesInTimezone(timezone);

  const isNight =
    currentMinutes < sunriseMinutes || currentMinutes >= sunsetMinutes;

  const c = Number(
    Array.isArray(weatherCode) ? weatherCode[dayIndex] : weatherCode,
  );

  if (isNight) {
    // Thunderstorm
    if (c >= 95 && c <= 99) {
      return wallpaperVideoMap.thunderStorm;
    }

    // Rain / drizzle / rain showers
    if ((c >= 51 && c <= 65) || (c >= 80 && c <= 82)) {
      return wallpaperVideoMap.rainyNight;
    }

    // Snow
    if ((c >= 71 && c <= 77) || (c >= 85 && c <= 86)) {
      return wallpaperVideoMap.snow;
    }

    return wallpaperVideoMap.night;
  }

  if (c === 0 || c === 1) return wallpaperVideoMap.sunny;
  if (c >= 2 && c <= 3) return wallpaperVideoMap.cloudy;
  if (c >= 45 && c <= 48) return wallpaperVideoMap.fog;
  if (c >= 51 && c <= 65) return wallpaperVideoMap.rain;
  if (c >= 71 && c <= 77) return wallpaperVideoMap.snow;
  if (c >= 80 && c <= 82) return wallpaperVideoMap.rainShowers;
  if (c >= 85 && c <= 86) return wallpaperVideoMap.snow;
  if (c >= 95 && c <= 99) return wallpaperVideoMap.thunderStorm;

  return wallpaperVideoMap.sunny;
}
