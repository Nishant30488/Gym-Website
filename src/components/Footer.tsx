import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/90 text-white py-6">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-1 text-center">
          <span className="text-gray-400">© {new Date().getFullYear()} Muscle Torture Fitness. All rights reserved.</span>
          <span className="text-gray-400 hidden md:inline">|</span>
          <div className="text-gray-400">
            Made with{' '}
            <span className="text-red-500 animate-pulse">❤</span>
            {' '}by{' '}
            <a 
              href="https://github.com/nishant30488" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-red-500 hover:text-red-400 transition-all duration-300 font-medium hover:scale-110 inline-block"
            >
              Nishant Raj
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 