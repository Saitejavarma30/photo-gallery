import React from "react";
import ParticleBackground from "./components/Particles";
import Hero, { StaticImage } from "./components/Hero";
import { AppContainer } from "./styles";
import Navbar from "./components/Navbar";
import { StaticImageContainer } from "./components/Hero/styles";

function App() {
  return (
    <>
      <ParticleBackground className="col-span-0" />
      <AppContainer className="grid grid-cols-12">
        <div className="col-span-3 overflow-y-auto h-screen">
          <Navbar />
        </div>
        <div className="col-span-5 overflow-y-auto h-screen">
          <Hero />
        </div>
        <div className="col-span-4 overflow-y-auto h-screen">
          <StaticImage />
        </div>
      </AppContainer>
    </>
  );
}

export default App;
