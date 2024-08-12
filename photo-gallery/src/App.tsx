import React from "react";
import ParticleBackground from "./components/Particles";
import Hero from "./components/Hero";
import { AppContainer } from "./styles";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <ParticleBackground className="col-span-0" />
      <AppContainer className="grid grid-cols-12">
        <div className="col-span-3 overflow-y-auto h-screen">
          <Navbar />
        </div>
        <div className="col-span-9 overflow-y-auto h-screen">
          <Hero />
        </div>
      </AppContainer>
    </>
  );
}

export default App;
