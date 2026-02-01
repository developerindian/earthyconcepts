import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import botanicalsHands from '@/assets/lifestyle/botanicals-hands.jpg';

export const ParallaxBanner = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Parallax background */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img 
          src={botanicalsHands}
          alt="Botanical wellness journey"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="container px-4 md:px-6 relative h-full flex items-center">
        <motion.div 
          className="max-w-xl text-white"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Sparkles className="h-4 w-4" />
            Discover Ayurveda
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Wellness
            <br />
            <span className="text-emerald-300">Journey Starts Here</span>
          </h2>
          
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Experience the transformative power of nature with our authentic Ayurvedic formulations. 
            Crafted with care, backed by tradition.
          </p>
          
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 px-8 shadow-xl">
            <Link to="/learn">
              Find Your Concept
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};
