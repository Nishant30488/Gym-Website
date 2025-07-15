import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className} group transition-all duration-300`}>
      <div className="relative group-hover:scale-110 transition-transform duration-300">
        <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text flex items-center group-hover:from-red-600 group-hover:to-red-400 transition-all duration-300">
          <span className="mr-1">MTF</span>
          <div className="h-7 w-[2px] bg-red-600 transform rotate-12 mx-2"></div>
          <span className="text-xl font-medium">Muscle Torture Fitness</span>
        </div>
        <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-red-500 to-transparent group-hover:from-red-600 group-hover:to-red-400 transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default Logo; 