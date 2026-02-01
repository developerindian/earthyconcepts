import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NatureWatermark } from '@/components/NatureWatermark';

const testimonials = [
  {
    quote: "The herbal teas have become an essential part of my morning ritual. I feel more energized and balanced throughout the day.",
    author: "Wellness Enthusiast",
    location: "Dubai, UAE",
  },
  {
    quote: "Finally found natural products that actually work. The quality is exceptional and I love that everything is GMP certified.",
    author: "Health Conscious Customer",
    location: "Mumbai, India",
  },
  {
    quote: "The ubtan face masks have transformed my skincare routine. My skin has never looked better - truly radiant and healthy.",
    author: "Skincare Lover",
    location: "London, UK",
  },
  {
    quote: "As a spa owner, I appreciate the premium quality and authentic Ayurvedic formulations. Our clients absolutely love them.",
    author: "Spa & Wellness Professional",
    location: "Abu Dhabi, UAE",
  },
];

export const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-emerald-50/50 relative overflow-hidden">
      {/* Nature Watermark */}
      <NatureWatermark opacity={0.06} />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Community</span> Says
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-primary/10 relative overflow-hidden">
            {/* Quote icon */}
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/10" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center relative z-10"
              >
                <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8 italic">
                  "{testimonials[current].quote}"
                </p>
                <div>
                  <p className="font-semibold text-primary">{testimonials[current].author}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[current].location}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prev}
                className="rounded-full border-primary/30 hover:bg-primary/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === current 
                        ? 'bg-primary w-8' 
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                onClick={next}
                className="rounded-full border-primary/30 hover:bg-primary/10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
