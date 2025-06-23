import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import Announcement from "./components/Announcement";
import Participants from "./components/Participants"; // <- Tambahkan ini

import "./App.css";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Halaman utama */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Announcement />
              <EventSection />
              <ScheduleSection />
              <Speakers data={landingPageData.Speakers} />
              <Gallery data={landingPageData.Gallery} />
              <FaqSection />
              <Contact data={landingPageData.Contact} />
              <Credit />
            </>
          }
        />

        {/* Halaman /participants */}
        <Route path="/participants" element={<Participants />} />
      </Routes>
    </Router>
  );
};

export default App;
