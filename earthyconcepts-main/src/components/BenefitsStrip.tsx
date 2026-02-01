import { motion } from 'framer-motion';
import { Leaf, Heart, Sun, Moon, Zap, Shield } from 'lucide-react';

const benefits = [
  { icon: Leaf, text: 'Immunity Boost', color: 'bg-emerald-500' },
  { icon: Heart, text: 'Heart Health', color: 'bg-rose-500' },
  { icon: Sun, text: 'Natural Energy', color: 'bg-amber-500' },
  { icon: Moon, text: 'Better Sleep', color: 'bg-violet-500' },
  { icon: Zap, text: 'Mental Clarity', color: 'bg-cyan-500' },
  { icon: Shield, text: 'Stress Relief', color: 'bg-teal-500' },
];

export const BenefitsStrip = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-muted/50 via-background to-muted/50 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-semibold">
            Wellness Benefits for <span className="text-primary">Every Need</span>
          </h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.text}
              className="flex items-center gap-3 px-5 py-3 bg-white rounded-full shadow-md border border-border/50 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -3 }}
            >
              <div className={`w-8 h-8 rounded-full ${benefit.color} flex items-center justify-center`}>
                <benefit.icon className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium text-sm">{benefit.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
