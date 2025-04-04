import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center">
      <div className="text-3xl font-extrabold">
        <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
          Luxury
        </span>
        <span className="text-white ml-2">Escorts</span>
      </div>
      <div className="ml-2 w-8 h-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full transform rotate-45"></div>
        <div className="absolute inset-1 bg-gray-900 rounded-full"></div>
        <div className="absolute inset-2 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full"></div>
      </div>
    </div>
  );
} 