import React from "react";
import {
  GreetingContainer,
  Greetingtext,
  HeroContainer,
  HeroContentContainer,
  Heroheader,
  HeroHeaderContainer,
  HeroHeaderText,
  HeroLocationContainer,
} from "./styles";
import { MoonStar, Sun, Sunrise, Sunset } from "lucide-react";
import moment from "moment";
import { getGreeting } from "../../utils";
import { Avatar } from "../Avatar";
import ImageContainer from "../ImageContainer";
import { useData } from "./useDate";

const Hero = ({ className }: { className?: string }) => {
  const currentMonthIndex = moment().month();
  const currentMonthName = moment().format("MMMM"); // Full month name (e.g., 'August')
  const currentMonthShortName = moment().format("MMM"); // Short month name (e.g., 'Aug')
  useData();

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
      <HeroHeaderContainer>
        <Heroheader className="text-4xl p-6">
          Saiteja Varma –<HeroHeaderText>Full-stack developer</HeroHeaderText>{" "}
          by profession with passion for{" "}
          <HeroHeaderText>Photography</HeroHeaderText>.
        </Heroheader>
        <ImageContainer />
      </HeroHeaderContainer>
      <HeroContentContainer className="grid grid-cols-4 gap-2">
        <HeroLocationContainer className="col-span-1">
          {currentMonthName}
        </HeroLocationContainer>
        <HeroLocationContainer className="col-span-1">
          {currentMonthName}
        </HeroLocationContainer>
      </HeroContentContainer>
    </HeroContainer>
  );
};

export default Hero;
