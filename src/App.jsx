import React from "react";
import Hero from "./components/Hero/Hero";
import Introduction from "./components/Introduction/Introduction";
import Chooseus from "./components/Chooseus/Chooseus";
import AreaPractice from "./components/AreaPractice/AreaPractice";
import Happyclients from "./components/Happyclients/Happyclients";
import OurTeam from "./components/OurTeam/OurTeam";
import Faq from "./components/Faq/Faq";
import Newsletter from "./components/Newsletter/Newsletter";

function App() {
  return (
    <>
      <Hero/>
      <Introduction />
      <Chooseus />
      <AreaPractice />
      <Happyclients />
      <OurTeam />
      <Faq />
      <Newsletter />
    </>
  );
}

export default App;
