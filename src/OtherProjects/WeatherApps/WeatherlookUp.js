const weatherMap = {
  0: "Sunny",
  1: "Sunny",
  2: "Cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Rime Fog",
  51: "Light Drizzle",
  61: "Rain",
  63: "Moderate Rain",
  65: "Heavy Rain",
  71: "Snow",
  73: "Moderate Snow",
  75: "Heavy Snow",
  80: "Rain Shower",
  95: "Thunderstorm",
};

export function getWeatherText(codes) {
  if (!Array.isArray(codes)) codes = [codes];

  return codes.map((code) => {
    const c = Number(code);

    if (weatherMap[c]) return weatherMap[c];

    if (c >= 0 && c <= 1) return "Sunny";
    if (c >= 2 && c <= 44) return "Cloudy";
    if (c >= 45 && c <= 60) return "Fog";
    if (c >= 61 && c <= 65) return "Rain";
    if (c >= 66 && c <= 71) return "Snow";
    if (c >= 72 && c <= 75) return "Heavy Snow";
    if (c >= 76 && c <= 82) return "Rain Shower";
    if (c >= 83 && c <= 99) return "Thunderstorm";

    return "Unknown";
  });
}
