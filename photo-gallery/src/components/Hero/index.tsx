import React from "react";
import { HeroContainer } from "./styles";

const Hero = ({ className }: { className?: string }) => {
  return (
    <HeroContainer className={`${className} container text-7xl`}>
      <h1>Welcome to our website!</h1>
      <p>This is a hero component.</p>
      <button>Learn More</button>
    </HeroContainer>
  );
};

export default Hero;
