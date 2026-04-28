import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A] font-sans flex flex-col items-center justify-center">
      <h1 className="text-4xl font-serif mb-4">404 - Not Found</h1>
      <p className="text-[#6B6B6B] mb-8">The page you are looking for could not be found.</p>
      <a href="/" className="bg-[#D97706] hover:bg-[#B45309] text-white px-6 py-3 rounded-full font-bold shadow-sm transition-colors">
        Return Home
      </a>
    </div>
  );
}
