import { ArrowRight } from "lucide-react";

const steps = [
  { number: 1, text: "Choose your membership tier" },
  { number: 2, text: "Get your monthly book selection" },
  { number: 3, text: "Join our discussion forums" },
  { number: 4, text: "Attend exclusive meetups" },
];

const TechReadingJourney = () => {
  return (
    <section className="relative rounded-2xl p-10 overflow-hidden shadow-sm border border-gray-200">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fff6f4] to-[#e1f2f6]" />

      {/* Net/Grid Pattern Background */}
      <div
        className="absolute inset-0 bg-[length:40px_40px] opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #d1d5db 1px, transparent 1px), linear-gradient(to bottom, #d1d5db 1px, transparent 1px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-mono font-extrabold text-center mb-10 text-gray-900">
          Your tech <br className="md:hidden" />
          reading journey
        </h2>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <div className="border border-gray-800 rounded-md w-10 h-10 flex items-center justify-center text-lg font-bold font-mono text-gray-900">
                  {step.number}
                </div>
                <p className="text-sm text-center mt-2 text-gray-700 max-w-[140px] leading-snug font-mono">
                  {step.text}
                </p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <ArrowRight
                  className="text-orange-400 hidden md:block"
                  style={{ transform: "rotate(-20deg)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechReadingJourney;
