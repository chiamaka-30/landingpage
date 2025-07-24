import React from 'react';
import { Check } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div>
          <img
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
            alt="Group reading together"
            className="rounded-xl shadow-md w-full max-w-full h-auto"
          />
        </div>

        {/* Right Text */}
        <div>
          <h2 className="text-4xl font-mono font-bold mb-6 text-gray-900">
            Read together, <br /> grow together
          </h2>
          <ul className="space-y-4 text-gray-700 text-base">
            <li className="flex items-start gap-3">
              <Check className="text-green-600" />
              Monthly curated tech reads selected by industry experts
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-green-600" />
              Virtual and in-person meetups for deep-dive discussions
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-green-600" />
              Early access to new tech book releases
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-green-600" />
              Author Q&A sessions with tech thought leaders
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;