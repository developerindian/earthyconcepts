import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import botanicalsHands from '@/assets/lifestyle/botanicals-hands.jpg';
import naturalBeauty from '@/assets/lifestyle/natural-beauty.jpg';

export const VisualBanner = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left visual card */}
          <motion.div
            className="relative rounded-3xl overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="aspect-[4/3] relative">
              <img 
                src={botanicalsHands} 
                alt="Botanical wellness ritual" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Sparkles className="h-4 w-4" />
                  Wellness Collection
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Herbal Health
                </h3>
                <p className="text-white/90 text-lg">
                  Immunity, Digestion & Vitality
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right visual card */}
          <motion.div
            className="relative rounded-3xl overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="aspect-[4/3] relative">
              <img 
                src={naturalBeauty} 
                alt="Natural beauty" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Sparkles className="h-4 w-4" />
                  Beauty Collection
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Natural Skincare
                </h3>
                <p className="text-white/90 text-lg">
                  Ubtans, Oils & Face Mists
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
