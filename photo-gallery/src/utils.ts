import moment from "moment";

export const getGreeting = (): string => {
  const hour = moment().hour();

  if (hour < 12) {
    return "Good morning";
  } else if (hour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};

export const getWeatherDescription = (code: number): string => {
  switch (code) {
    case 0:
      return "Clear sky";
    case 1:
      return "Mainly clear";
    case 2:
      return "Partly cloudy";
    case 3:
      return "Overcast";
    case 45:
      return "Fog";
    case 48:
      return "Depositing rime fog";
    case 51:
      return "Drizzle";
    case 53:
      return "Drizzle";
    case 55:
      return "Drizzle";
    case 56:
      return "Freezing Drizzle";
    case 57:
      return "Freezing Drizzle";
    case 61:
      return "Rain";
    case 63:
      return "Moderate Rain";
    case 65:
      return "Heavy Rain";
    case 66:
      return "Freezing Rain";
    case 67:
      return "Freezing Rain";
    case 71:
      return "Snow fall";
    case 73:
      return "Moderate Snow fall";
    case 75:
      return "Heavy Snow fall";
    case 77:
      return "Snow grains";
    case 80:
      return "Rain showers";
    case 81:
      return "Moderate Rains";
    case 82:
      return "Heavy Raine";
    case 85:
      return "Moderate Snow fall";
    case 86:
      return "Heavy Snow fall";
    case 95:
      return "Thunderstorms";
    case 96:
      return "Thunderstorms";
    case 99:
      return "Thunderstorms";
    default:
      return "Drizzle";
  }
};
