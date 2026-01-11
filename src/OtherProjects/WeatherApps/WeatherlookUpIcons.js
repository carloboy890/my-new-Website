export const weatherIconMap = {
  0: "sunny",
  1: "sunny",
  2: "cloudy",
  3: "cloudy",
  45: "fog",
  48: "fog",
  51: "drizzle",
  61: "rain",
  63: "rain",
  65: "rain",
  71: "snow",
  73: "snow",
  75: "heavySnow",
  80: "rainShowers",
  95: "thunderStorm",
};

export function getWeatherIcon(codes) {
  if (!Array.isArray(codes)) codes = [codes];

  return codes.map((code) => {
    const c = Number(code);

    if (weatherIconMap[c]) return weatherIconMap[c];

    if (c <= 2) return "sunny";
    if (c <= 44) return "cloudy";
    if (c <= 60) return "fog";
    if (c <= 65) return "rain";
    if (c <= 75) return "snow";
    if (c <= 82) return "rainShowers";
    if (c <= 99) return "thunderStorm";

    return "unknown";
  });
}
