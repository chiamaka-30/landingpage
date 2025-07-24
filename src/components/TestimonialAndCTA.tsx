import React from "react";
import { ArrowUpRight } from "lucide-react";

const TestimonialAndCTA = () => {
  return (
    <section className="w-full">
      {/* Testimonial Section */}
      <div className="py-16 px-6 text-center bg-white">
        <blockquote className="text-xl md:text-2xl font-semibold text-gray-900 max-w-3xl mx-auto">
          "This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!"
        </blockquote>
        <p className="mt-4 text-gray-600">Sarah Chen, Software Architect</p>
      </div>

      {/* Call to Action Section */}
      <div className="bg-[#022d38] text-white py-20 px-6 text-center rounded-t-3xl relative overflow-hidden grid-bg">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Ready to debug your <br /> reading list?
        </h2>

        <button className="mt-4 px-6 py-3 border border-white text-white font-bold tracking-wide rounded-md flex items-center justify-center gap-2 hover:bg-white hover:text-[#022d38] transition mx-auto">
          REVIEW MEMBERSHIP OPTIONS <ArrowUpRight size={16} />
        </button>

        {/* Avatar row and stars */}
        <div className="flex flex-col items-center mt-8 space-y-2">
          <div className="flex -space-x-2">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="avatar1"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="avatar2"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://randomuser.me/api/portraits/men/76.jpg"
              alt="avatar3"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>

          {/* Stars */}
          <div className="flex justify-center space-x-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-orange-400 text-lg">★</span>
            ))}
          </div>

          <p className="text-sm text-gray-300 mt-1">200+ developers joined already</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAndCTA;