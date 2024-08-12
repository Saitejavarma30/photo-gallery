import React from "react";
import {
  GreetingContainer,
  Greetingtext,
  HeroContainer,
  Heroheader,
  HeroHeaderContainer,
  HeroHeaderText,
} from "./styles";
import { MoonStar, Sun, Sunrise, Sunset } from "lucide-react";
import moment from "moment";
import { getGreeting } from "../../utils";
import { Avatar } from "../Avatar";
import ImageContainer from "../ImageContainer";

const Hero = ({ className }: { className?: string }) => {
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
    </HeroContainer>
  );
};

export default Hero;
