import WaterDropletLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherDataLogos/WaterDroplet.svg";
import WindDirectionLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherDataLogos/WindDirection.svg";
import PressureLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherDataLogos/WeatherPressure.svg";
import SunriseLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherDataLogos/Sunrise.svg";
import SunsetLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherDataLogos/Sunset.svg";
import MaxTempLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherDataLogos/MaxTemp.svg";
import MinTempLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherDataLogos/MinTemp.svg";

export const getWeatherMetrics = (
  weatherResult,
  dailyResult,
  hourlyResult,
  dayIndex = 0
) => {
  const extractTime = (iso) => iso?.slice(11) ?? "--";

  if (!weatherResult || !dailyResult || !hourlyResult) return [];

  const { winddirection } = weatherResult;
  const { sunrise, sunset, temperature_2m_max, temperature_2m_min } =
    dailyResult;
  const { relativehumidity_2m, surface_pressure } = hourlyResult;

  return [
    {
      key: 1,
      logo: WaterDropletLogo,
      label: "Humidity",
      value: relativehumidity_2m[dayIndex],
      unit: "%",
    },
    {
      key: 2,
      logo: WindDirectionLogo,
      label: "Wind",
      value: dayIndex === 0 ? winddirection : "- -",
      unit: "°",
    },
    {
      key: 3,
      logo: PressureLogo,
      label: "Pressure",
      value: surface_pressure[dayIndex],
      unit: "hPa",
    },
    {
      key: 4,
      logo: SunriseLogo,
      label: "Sunrise",
      value: extractTime(sunrise[dayIndex]),
      unit: "",
    },
    {
      key: 5,
      logo: SunsetLogo,
      label: "Sunset",
      value: extractTime(sunset[dayIndex]),
      unit: "",
    },
    {
      key: 6,
      logo: MaxTempLogo,
      label: "Max Temp",
      value: temperature_2m_max[dayIndex],
      unit: "°C",
    },
    {
      key: 7,
      logo: MinTempLogo,
      label: "Min Temp",
      value: temperature_2m_min[dayIndex],
      unit: "°C",
    },
  ];
};
