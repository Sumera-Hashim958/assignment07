import React from 'react';

const header = () => {
  return (
    <div className="h-32 bg-gradient-to-r from-yellow-600 via-purple-500 to-yellow-600">
      <div className="flex flex-col justify-center items-center h-full space-y-2">
        <p className="font-bold text-white text-5xl text-center">
          Client side and Server side data fetching
        </p>
        <p className="text-white">
          Assignment 07 given by Sir Fahad
        </p>
      </div>
    </div>
  );
};

export default header;
