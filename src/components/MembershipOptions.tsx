import React from "react";
import { Check, Star } from "lucide-react";

const plans = [
  {
    title: "Starter",
    price: "$19",
    description: "/month",
    features: ["1 book/month", "Online forums"],
    buttonText: "SUBSCRIBE NOW",
    highlight: false,
  },
  {
    title: "Pro",
    price: "$29",
    description: "/month",
    features: ["2 books/month", "Virtual meetups"],
    buttonText: "SUBSCRIBE NOW",
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "",
    features: ["Team access", "Private sessions"],
    buttonText: "TALK TO US",
    highlight: false,
  },
];

const MembershipOptions = () => {
  return (
    <section className="py-16 px-6 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
        Membership options
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl border ${
              plan.highlight
                ? "bg-gradient-to-br from-[#f9f4f0] to-[#d7ecf5]"
                : "bg-white"
            } p-6 shadow-sm flex flex-col justify-between`}
          >
            <div>
              <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
              <div className="text-3xl font-bold text-gray-900">
                {plan.price}
                <span className="text-base font-normal text-gray-600 ml-1">
                  {plan.description}
                </span>
              </div>

              <hr className="my-4 border-gray-300" />

              <ul className="space-y-2 text-sm text-left text-gray-700 font-medium">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`mt-6 border border-gray-800 rounded-md py-2 font-bold tracking-wide text-sm ${
                plan.highlight
                  ? "bg-white hover:bg-gray-100"
                  : "hover:bg-gray-100"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Star Icons */}
      <div className="flex justify-center mt-12 space-x-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} className="text-orange-400 fill-orange-400" />
        ))}
      </div>
    </section>
  );
};

export default MembershipOptions;
