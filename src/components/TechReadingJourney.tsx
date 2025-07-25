import { ArrowRight } from "lucide-react";

const steps = [
  { number: 1, text: "Choose your membership tier" },
  { number: 2, text: "Get your monthly book selection" },
  { number: 3, text: "Join our discussion forums" },
  { number: 4, text: "Attend exclusive meetups" },
];

const TechReadingJourney = () => {
  return (
    <section className="relative rounded-2xl p-10 overflow-hidden">
      {/* Gradient + Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff6f4,#e1f2f6)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M40 0H0V40\' stroke=\'%23D1D5DB\' stroke-width=\'0.5\'/%3E%3C/svg%3E')] opacity-40" />
      
      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-mono font-extrabold text-center mb-10 text-gray-900">
          Your tech <br className="md:hidden" />
          reading journey
        </h2>

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
              {index < steps.length - 1 && (
                <ArrowRight className="text-orange-500 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechReadingJourney;
