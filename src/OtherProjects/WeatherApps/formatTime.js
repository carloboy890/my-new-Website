export function formatTimeForTimezone(timezone) {
  if (!timezone) return "--:--";

  return new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());
}
