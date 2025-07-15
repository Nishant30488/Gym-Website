import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSection } from '../utils/scrollUtils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
  };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 py-0.5 sm:py-1' : 'bg-transparent py-1 sm:py-2'}`}>
      <nav className="container-custom max-w-6xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between">
       
          <motion.a
            href="/#"
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center hover:scale-105 transition-transform duration-300">
              <img 
                src="/images/logo.png" 
                alt="Muscle Torture Fitness" 
                className="h-[3.2rem] sm:h-[3.8rem] md:h-[4.2rem] w-auto mr-2 sm:mr-3"
              />
            <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-lg sm:text-xl md:text-2xl font-extrabold bg-gradient-to-r from-red-500 via-red-600 to-red-500 text-transparent bg-clip-text tracking-tight hover:from-red-600 hover:to-red-400 transition-all duration-300">
                  MUSCLE TORTURE
                </span>
                </div>
                <span className="text-xs sm:text-sm text-gray-400 font-semibold tracking-wider">FITNESS</span>
              </div>
          </div>
          </motion.a>

          <div className="hidden md:flex items-center space-x-5">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="text-white hover:text-red-500 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-red-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full hover:scale-105"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="text-white hover:text-red-500 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-red-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full hover:scale-105"
            >
              About Us
            </a>
            <a 
              href="#trainers" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('trainers');
              }}
              className="text-white hover:text-red-500 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-red-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full hover:scale-105"
            >
              Trainers
            </a>
            <a 
              href="#training-plans" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('training-plans');
              }}
              className="text-white hover:text-red-500 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-red-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full hover:scale-105"
            >
              Training Plans
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="text-white hover:text-red-500 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-red-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/+919717418746"
              className="flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#25D366] text-white font-semibold shadow-md hover:bg-[#1ebe5d] transition-all duration-300 hover:scale-110"
              aria-label="Contact on WhatsApp"
            >
              <img 
                src="/images/WhatsApp.svg" 
                alt="WhatsApp" 
                className="w-5 h-5"
              />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+919717418746"
              className="px-5 py-1 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/25 flex items-center space-x-2"
              aria-label="Call Now"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now</span>
            </a>
          </div>

        
          <div className="flex items-center md:hidden">
            <a
              href="tel:+919717418746"
              className="mr-3 p-2 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white flex items-center"
              aria-label="Call Now"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">Call Now</span>
            </a>
          <button
              className="text-white p-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-3 bg-black/95 rounded-lg backdrop-blur-sm shadow-lg shadow-black/20 border border-gray-800/30 absolute left-3 right-3 z-50"
            >
              <div className="flex flex-col space-y-2 py-3 px-4">
                <a 
                  href="#home" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileMenuClick('home');
                  }}
                  className="text-white hover:text-red-500 transition-colors duration-300 hover:scale-105 transform py-2"
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileMenuClick('about');
                  }}
                  className="text-white hover:text-red-500 transition-colors duration-300 hover:scale-105 transform py-2"
                >
                  About Us
                </a>
                <a 
                  href="#trainers" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileMenuClick('trainers');
                  }}
                  className="text-white hover:text-red-500 transition-colors duration-300 hover:scale-105 transform py-2"
                >
                  Trainers
                </a>
                <a 
                  href="#training-plans" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileMenuClick('training-plans');
                  }}
                  className="text-white hover:text-red-500 transition-colors duration-300 hover:scale-105 transform py-2"
                >
                  Training Plans
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileMenuClick('contact');
                  }}
                  className="text-white hover:text-red-500 transition-colors duration-300 hover:scale-105 transform py-2"
                >
                  Contact Us
                </a>
                
                <div className="flex items-center space-x-3 pt-2">
                  <a
                    href="https://wa.me/+919717418746"
                    className="flex-1 flex items-center justify-center space-x-2 py-2.5 bg-[#25D366] border border-green-600/30 rounded-lg text-white font-semibold hover:bg-[#1ebe5d] transition-all duration-300"
                    aria-label="Contact on WhatsApp"
                  >
                    <img 
                      src="/images/WhatsApp.svg" 
                      alt="WhatsApp" 
                      className="w-5 h-5"
                    />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="tel:+919717418746"
                    className="flex-1 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white text-center rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center"
                    aria-label="Call Now"
                  >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call Now</span>
                  </a>
                </div>
          </div>
            </motion.div>
        )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header; 