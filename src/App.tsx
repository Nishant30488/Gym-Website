import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import TrainerProfiles from './components/TrainerProfiles';
import BMICalculator from './components/BMICalculator';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import LocationAndHours from './components/LocationAndHours';
import Footer from './components/Footer';
import TrainingPlans from './components/TrainingPlans';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 -z-10"></div>
      <Header />
      <main className="relative z-10">
        <Hero />
        <Features />
        <About />
        <TrainerProfiles />
        <TrainingPlans />
        <BMICalculator />
        <Pricing />
        <LocationAndHours />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
