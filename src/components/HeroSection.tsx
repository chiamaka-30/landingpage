import React from 'react';
import { Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white px-6 py-20 flex items-center justify-center overflow-hidden font-sans">
      {/* Background grid */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full text-neutral-300 opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M10 0L0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content grid */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        {/* Left side */}
        <div>
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-6">
            <img src="/logo.png" alt="Logo" className="w-6 h-6" />
            <span className="font-semibold text-lg tracking-tight text-gray-800">
              Tech book club
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight font-mono mb-6">
            <span className="text-orange-500">Join the</span>{' '}
            <span className="bg-gradient-to-r from-orange-500 to-blue-900 bg-clip-text text-transparent">
              ultimate tech book club
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-8 max-w-lg">
            Turn your reading time into learning time with fellow tech enthusiasts. Get curated
            recommendations, join vibrant discussions, and level up your skills one chapter at a time.
          </p>

          {/* Button */}
          <button className="border border-black px-5 py-3 rounded-md font-mono text-sm hover:bg-black hover:text-white transition mb-6">
            REVIEW MEMBERSHIP OPTIONS ↓
          </button>

          {/* Avatars + stars */}
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
            <div className="flex items-center text-orange-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="orange" />
              ))}
            </div>
            <p className="text-sm text-gray-500">200+ developers joined already</p>
          </div>
        </div>

        {/* Right side image */}
        <div>
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
            alt="Group Reading"
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white px-6 py-20 flex items-center justify-center overflow-hidden font-sans">
      {/* Background grid */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full text-neutral-300 opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M10 0L0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content grid */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        {/* Left side */}
        <div>
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-6">
            <img src="/logo.png" alt="Logo" className="w-6 h-6" />
            <span className="font-semibold text-lg tracking-tight text-gray-800">
              Tech book club
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight font-mono mb-6">
            <span className="text-orange-500">Join the</span>{' '}
            <span className="bg-gradient-to-r from-orange-500 to-blue-900 bg-clip-text text-transparent">
              ultimate tech book club
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-8 max-w-lg">
            Turn your reading time into learning time with fellow tech enthusiasts. Get curated
            recommendations, join vibrant discussions, and level up your skills one chapter at a time.
          </p>

          {/* Button */}
          <button className="border border-black px-5 py-3 rounded-md font-mono text-sm hover:bg-black hover:text-white transition mb-6">
            REVIEW MEMBERSHIP OPTIONS ↓
          </button>

          {/* Avatars + stars */}
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
            <div className="flex items-center text-orange-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="orange" />
              ))}
            </div>
            <p className="text-sm text-gray-500">200+ developers joined already</p>
          </div>
        </div>

        {/* Right side image */}
        <div>
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
            alt="Group Reading"
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white px-6 py-20 flex items-center justify-center overflow-hidden font-sans">
      {/* Background grid */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full text-neutral-300 opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M10 0L0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content grid */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        {/* Left side */}
        <div>
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-6">
            <img src="/logo.png" alt="Logo" className="w-6 h-6" />
            <span className="font-semibold text-lg tracking-tight text-gray-800">
              Tech book club
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight font-mono mb-6">
            <span className="text-orange-500">Join the</span>{' '}
            <span className="bg-gradient-to-r from-orange-500 to-blue-900 bg-clip-text text-transparent">
              ultimate tech book club
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-8 max-w-lg">
            Turn your reading time into learning time with fellow tech enthusiasts. Get curated
            recommendations, join vibrant discussions, and level up your skills one chapter at a time.
          </p>

          {/* Button */}
          <button className="border border-black px-5 py-3 rounded-md font-mono text-sm hover:bg-black hover:text-white transition mb-6">
            REVIEW MEMBERSHIP OPTIONS ↓
          </button>

          {/* Avatars + stars */}
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
            <div className="flex items-center text-orange-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="orange" />
              ))}
            </div>
            <p className="text-sm text-gray-500">200+ developers joined already</p>
          </div>
        </div>

        {/* Right side image */}
        <div>
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
            alt="Group Reading"
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
