export function getOrdinal(day) {
  if (day > 3 && day < 21) return `${day}th`;
  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
}

export function formatDate(isoDate) {
  const dateObj = new Date(isoDate);

  const weekday = dateObj.toLocaleDateString("en-US", { weekday: "long" });
  const monthName = dateObj.toLocaleDateString("en-US", { month: "long" });
  const day = dateObj.getDate();
  const ordinalDay = getOrdinal(day);

  return `${weekday}, ${ordinalDay} ${monthName}`;
}
