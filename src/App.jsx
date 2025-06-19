import React, { useState, useEffect } from "react";

import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventSection from './components/EventSection'; // Uncomment if you want to use EventSection
import ScheduleSection from './components/ScheduleSection'; // Uncomment if you want to use ScheduleSection 
import FaqSection from './components/FaqSection';


import "./App.css";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

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
      
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <FaqSection />
      <Contact data={landingPageData.Contact} />

    </div>
  );
};

export default App;
