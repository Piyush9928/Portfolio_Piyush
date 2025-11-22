import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What People <span className="text-emerald-500">Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-orange-500 mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-slate-800 border-slate-700 p-8 md:p-12">
            <div className="flex flex-col items-center text-center">
              <Quote className="text-emerald-500 mb-6" size={48} />
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-emerald-500 mb-4"
                />
                <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h4>
                <p className="text-cyan-400">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="border-slate-700 text-gray-300 hover:border-emerald-500 hover:text-emerald-500"
            >
              <ChevronLeft size={24} />
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="border-slate-700 text-gray-300 hover:border-emerald-500 hover:text-emerald-500"
            >
              <ChevronRight size={24} />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-emerald-500 w-8' : 'bg-slate-700'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;