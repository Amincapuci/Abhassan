import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img 
        src="/public/logo.png" 
        alt="Aljeroudy Aesthetics" 
        className="h-10 w-auto transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export default Logo;