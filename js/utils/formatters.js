// Kuala Lumpur After Dark - Utility Formatters

export function getKLCurrentTime() {
  const options = {
    timeZone: "Asia/Kuala_Lumpur",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  };
  const timeStr = new Intl.DateTimeFormat("en-US", options).format(new Date());
  return `${timeStr} MYT`;
}

export function formatPriceLevel(price) {
  if (price === "$") return "$ • Under RM 30";
  if (price === "$$") return "$$ • RM 30 - 60";
  if (price === "$$$") return "$$$ • RM 60 - 90";
  return "$$$$ • RM 90+";
}

// Calculate approximate distance between two GPS coordinates in km
export function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  if (!lat1 || !lon1 || !lat2 || !lon2) return 2.5;
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return Math.round(d * 10) / 10;
}

// Estimate grab / taxi drive time in Kuala Lumpur traffic at night
export function estimateDriveMinutes(distanceKm) {
  // At night in KL, average speed is ~35-40 km/h, base pickup wait is 4-5 mins
  const driveTime = Math.ceil((distanceKm / 35) * 60) + 4;
  return Math.max(5, driveTime);
}
