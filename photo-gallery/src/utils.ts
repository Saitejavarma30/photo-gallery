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
