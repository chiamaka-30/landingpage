import React from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    text: "Choose your membership tier",
  },
  {
    number: 2,
    text: "Get your monthly book selection",
  },
  {
    number: 3,
    text: "Join our discussion forums",
  },
  {
    number: 4,
    text: "Attend exclusive meetups",
  },
];

const TechReadingJourney = () => {
  return (
    <section className="relative bg-[#fffdfc] p-10 rounded-xl overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="grid"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="#e0dcdc"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Section Content */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Your tech <br className="md:hidden" />
        <span className="font-extrabold">reading journey</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="border border-gray-700 rounded-md w-10 h-10 flex items-center justify-center text-lg font-bold">
                {step.number}
              </div>
              <p className="text-sm text-center mt-2 text-gray-700 max-w-[120px] leading-snug">
                {step.text}
              </p>
            </div>
            {index < steps.length - 1 && (
              <ArrowRight className="text-orange-500 hidden md:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechReadingJourney;
