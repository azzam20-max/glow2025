import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventSection from './components/EventSection'; // Uncomment if you want to use EventSection

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <EventSection />
    </div>
  );
}

export default App;
