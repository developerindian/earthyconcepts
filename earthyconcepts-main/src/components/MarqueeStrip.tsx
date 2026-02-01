import { motion } from 'framer-motion';
import { Leaf, Shield, Heart, Award, Sparkles, Check } from 'lucide-react';

const marqueeItems = [
  { icon: Leaf, text: '100% Natural Ingredients' },
  { icon: Shield, text: 'GMP & ISO Certified' },
  { icon: Heart, text: 'Ayurvedic Formulations' },
  { icon: Award, text: 'Lab Tested & Verified' },
  { icon: Sparkles, text: 'No Synthetic Additives' },
  { icon: Check, text: 'Sustainably Sourced' },
  { icon: Leaf, text: 'Pure & Potent' },
  { icon: Heart, text: 'Cruelty Free' },
];

export const MarqueeStrip = () => {
  return (
    <div className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 py-3 overflow-hidden">
      <motion.div
        className="flex gap-12"
        animate={{ x: [0, -1920] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {/* Double the items for seamless loop */}
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-white/95 whitespace-nowrap">
            <item.icon className="h-4 w-4" />
            <span className="text-sm font-medium">{item.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
