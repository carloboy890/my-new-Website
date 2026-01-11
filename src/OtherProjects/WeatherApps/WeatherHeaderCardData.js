import WaterDropletLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherDataLogos/WaterDroplet.svg";
import WindDirectionLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherDataLogos/WindDirection.svg";
import PressureLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherDataLogos/WeatherPressure.svg";
import SunriseLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherDataLogos/Sunrise.svg";
import SunsetLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherDataLogos/Sunset.svg";
import MaxTempLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherDataLogos/MaxTemp.svg";
import MinTempLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherDataLogos/MinTemp.svg";

import { useMemo } from "react";

export const useWeatherMetrics = (weatherResult, dailyResult, hourlyResult) => {
  const extractTime = (iso) => iso?.slice(11) ?? "--";

  return useMemo(() => {
    if (!weatherResult || !dailyResult || !hourlyResult) return [];

    const { winddirection } = weatherResult;
    const { sunrise, sunset, temperature_2m_max, temperature_2m_min } =
      dailyResult;
    const { relativehumidity_2m, surface_pressure } = hourlyResult;

    // Return an array of objects with labels and values
    return [
      {
        key: 1,
        logo: WaterDropletLogo,
        label: "Humidity",
        value: relativehumidity_2m[0],
        unit: "%",
      },
      {
        key: 2,
        logo: WindDirectionLogo,
        label: "Wind",
        value: winddirection,
        unit: "°",
      },
      {
        key: 3,
        logo: PressureLogo,
        label: "Pressure",
        value: surface_pressure[0],
        unit: "hPa",
      },
      {
        key: 4,
        logo: SunriseLogo,
        label: "Sunrise",
        value: extractTime(sunrise[0]),
        unit: "",
      },
      {
        key: 5,
        logo: SunsetLogo,
        label: "Sunset",
        value: extractTime(sunset[0]),
        unit: "",
      },
      {
        key: 6,
        logo: MaxTempLogo,
        label: "Max Temp",
        value: temperature_2m_max[0],
        unit: "°C",
      },
      {
        key: 7,
        logo: MinTempLogo,
        label: "Min Temp",
        value: temperature_2m_min[0],
        unit: "°C",
      },
    ];
  }, [weatherResult, dailyResult, hourlyResult]);
};
