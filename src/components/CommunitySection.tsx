import React from 'react';
import { SiReact, SiGithub } from 'react-icons/si';

const CommunitySection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Left */}
        <div>
          <h2 className="text-4xl font-mono font-bold text-gray-900 mb-4 leading-snug">
            Not your average <br /> book {" "}
            <span className="relative inline-block">
              <span className="text-black">club</span>
              <span className="absolute -top-2 -left-2 -right-2 -bottom-1 border-[3px] border-orange-500 rounded-full transform rotate-[2deg] pointer-events-none"></span>
            </span>
          </h2>
          <p className="text-gray-700 text-base max-w-md mb-6">
            Connect with a community that speaks your language – from {" "}
            <span className="font-semibold text-black">Python</span> to{" "}
            <span className="font-semibold text-black">TypeScript</span> and
            everything in between. Our discussions blend technical depth with
            practical applications.
          </p>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            </div>
            <SiGithub size={30} className="text-black" />
            <SiReact size={30} className="text-sky-500" />
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
            alt="Tech group chat"
            className="rounded-xl shadow-md w-full max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;