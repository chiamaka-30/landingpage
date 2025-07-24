import React from 'react';
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          
          <blockquote className="text-2xl font-medium text-gray-900 leading-relaxed">
            "This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!"
          </blockquote>
          
          <div className="space-y-2">
            <p className="font-semibold text-gray-900">Sarah Chen</p>
            <p className="text-gray-600">Software Architect</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;