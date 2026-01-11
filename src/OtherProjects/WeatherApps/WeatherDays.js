import { useMemo } from "react";

export function useWeatherDays(
  current_weather,
  daily_result,
  weatherText,
  date4Slice,
  iconsArray
) {
  return useMemo(() => {
    if (!daily_result) return [];

    const { temperature } = current_weather;

    const { temperature_2m_max, temperature_2m_min } = daily_result;

    return temperature_2m_max.slice(0, date4Slice.length).map((_, i) => {
      const avgTemp = (temperature_2m_max[i] + temperature_2m_min[i]) / 2;

      return {
        id: i,
        temperature: i === 0 ? temperature : avgTemp.toFixed(1),
        date: date4Slice[i],
        range: `${temperature_2m_max[i]} / ${temperature_2m_min[i]}`,
        weathertext: weatherText[i],
        weatherIcon: iconsArray[i],
      };
    });
  }, [current_weather, daily_result, date4Slice, weatherText, iconsArray]);
}
