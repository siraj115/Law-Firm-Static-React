import React from "react";
import Hero from "./components/Hero/Hero";
import Introduction from "./components/Introduction/Introduction";
import Chooseus from "./components/Chooseus/Chooseus";
import AreaPractice from "./components/AreaPractice/AreaPractice";
import Happyclients from "./components/Happyclients/Happyclients";
import OurTeam from "./components/OurTeam/OurTeam";

function App() {
  return (
    <>
      <Hero/>
      <Introduction />
      <Chooseus />
      <AreaPractice />
      <Happyclients />
      <OurTeam />
    </>
  );
}

export default App;
