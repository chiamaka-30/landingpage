import React from 'react';
import { Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden rounded-2xl shadow-sm border border-gray-200">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fff6f4] to-[#e1f2f6] -z-20" />

      {/* Net/Grid Pattern Background */}
      <div
        className="absolute inset-0 bg-[length:40px_40px] opacity-30 pointer-events-none -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #d1d5db 1px, transparent 1px), linear-gradient(to bottom, #d1d5db 1px, transparent 1px)",
        }}
      />

      {/* Content */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        {/* Left Section */}
        <div>
          <h1 className="text-5xl font-mono font-bold leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-neutral-800">
              Join the ultimate
            </span>{' '}
            <span className="text-gray-900">tech book club</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-md">
            Turn your reading time into learning time with fellow tech
            enthusiasts. Get curated recommendations, join vibrant discussions,
            and level up your skills one chapter at a time.
          </p>
          <button className="border-2 border-black font-mono px-6 py-2 rounded-md hover:bg-black hover:text-white transition duration-200 mb-6">
            REVIEW MEMBERSHIP OPTIONS ↓
          </button>
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="avatar1"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="avatar2"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/55.jpg"
                alt="avatar3"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>
            <div className="flex items-center space-x-1 text-orange-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="orange" />
              ))}
            </div>
            <p className="text-sm text-gray-500">
              200+ developers joined already
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
            alt="Group reading"
            className="rounded-xl shadow-md w-full max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
