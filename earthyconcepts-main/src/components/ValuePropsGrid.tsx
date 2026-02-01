import { motion } from 'framer-motion';
import { Leaf, Shield, Droplets, Sun, Heart, Sparkles } from 'lucide-react';

const valueProps = [
  {
    icon: Leaf,
    title: 'Pure Botanicals',
    description: 'Ethically sourced herbs from trusted farms',
    color: 'from-emerald-500 to-green-500',
  },
  {
    icon: Shield,
    title: 'Quality Certified',
    description: 'GMP, ISO & HACCP certified facilities',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Droplets,
    title: 'No Chemicals',
    description: 'Free from synthetic additives & fillers',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    icon: Sun,
    title: 'Ayurvedic Wisdom',
    description: 'Traditional formulations, modern science',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Heart,
    title: 'Cruelty Free',
    description: 'Never tested on animals',
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'Sustainable',
    description: 'Eco-conscious packaging & practices',
    color: 'from-violet-500 to-purple-500',
  },
];

export const ValuePropsGrid = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-50/80 via-white to-amber-50/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(251,191,36,0.05),transparent_50%)]" />
      
      <div className="container px-4 md:px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div 
                className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${prop.color} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <prop.icon className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="font-semibold text-sm mb-1">{prop.title}</h3>
              <p className="text-xs text-muted-foreground">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
