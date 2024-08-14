import React, { useEffect, useState } from "react";
import {
  GreetingContainer,
  Greetingtext,
  HeroContainer,
  HeroContentContainer,
  Heroheader,
  HeroHeaderContainer,
  HeroHeaderText,
  HeroLangugageContainer,
  HeroLocationContainer,
  StaticImageContainer,
} from "./styles";
import { MoonStar, Sun, Sunrise, Sunset } from "lucide-react";
import moment from "moment";
import { getGreeting } from "../../utils";
import ImageContainer from "../3DImageContainer";
import { useData } from "./useDate";
import WeatherComponent from "./WeatherComponent";
import LanguageComponent from "./languageComponent";
import ImageCarousel from "../ImageCarousel";

export const StaticImage = () => {
  return <StaticImageContainer src="images/Saiteja-avatar.png" />;
};

const Hero = ({ className }: { className?: string }) => {
  const currentMonthIndex = moment().month();
  const currentMonthName = moment().format("MMMM"); // Full month name (e.g., 'August')
  const currentMonthShortName = moment().format("MMM"); // Short month name (e.g., 'Aug')
  const { data, loading, error } = useData();

  // Get the current date of the month
  const currentDate = moment().date();

  const getGreetingIcon = () => {
    const hour = moment().hour();

    if (hour < 7) {
      return <Sunrise />;
    } else if (hour < 17) {
      return <Sun />;
    } else if (hour < 19) {
      return <Sunset />;
    } else {
      return <MoonStar />;
    }
  };
  return (
    <HeroContainer className={`${className} container m-6 p-6`}>
      <GreetingContainer>
        {getGreetingIcon()}
        <Greetingtext className="px-2">{getGreeting()}</Greetingtext>
      </GreetingContainer>
      <HeroHeaderContainer className="grid grid-cols-4 gap-2">
        <Heroheader className="text-4xl text-left p-6 col-span-4">
          <div className="text-left text-xl">Hi, I'm</div>
          Saiteja Varma, <HeroHeaderText>
            Full-stack developer
          </HeroHeaderText>{" "}
          by profession with passion for{" "}
          <HeroHeaderText>Photography</HeroHeaderText>.
        </Heroheader>

        {/* <ImageContainer /> */}
      </HeroHeaderContainer>
      <HeroContentContainer className="grid grid-cols-4 gap-2">
        <HeroLocationContainer className="col-span-2 p-6">
          {data && !loading ? (
            <WeatherComponent {...data} />
          ) : (
            <WeatherComponent
              {...{
                latitude: "12.97°E",
                longitude: "77.5946°N",
                timezone: "Asia/Kolkata",
                weatherCode: 0,
                temperature: "24°C",
                precipitation: "2mm",
                wind_speed_10m: "2km/h",
              }}
            />
          )}
        </HeroLocationContainer>
        <HeroLangugageContainer className="col-span-2 p-6 gap-2">
          <LanguageComponent />
        </HeroLangugageContainer>
      </HeroContentContainer>
      <ImageCarousel />
      <WeatherComponent
        {...{
          latitude: "12.97°E",
          longitude: "77.5946°N",
          timezone: "Asia/Kolkata",
          weatherCode: 0,
          temperature: "24°C",
          precipitation: "2mm",
          wind_speed_10m: "2km/h",
        }}
      />
    </HeroContainer>
  );
};

export default Hero;
