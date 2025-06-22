import { useState, useEffect } from "react";

import { Speakers } from "./components/speakers";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventSection from "./components/EventSection";
import ScheduleSection from "./components/ScheduleSection";
import FaqSection from "./components/FaqSection";
import Credit from "./components/Credit";

import "./App.css";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <EventSection />
      <ScheduleSection />
      <Speakers data={landingPageData.Speakers} />
      <Gallery data={landingPageData.Gallery} />
      <FaqSection />
      <Contact data={landingPageData.Contact} />
      <Credit />
    </div>
  );
};

export default App;
