import { motion } from 'framer-motion';
import { Leaf, Shield, Heart, Sparkles, Droplets, Award } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'Pure botanical ingredients sourced from nature',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop',
  },
  {
    icon: Shield,
    title: 'Quality Certified',
    description: 'GMP, ISO & HACCP certified manufacturing',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
  },
  {
    icon: Heart,
    title: 'Cruelty Free',
    description: 'Never tested on animals, ever',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=300&fit=crop',
  },
  {
    icon: Sparkles,
    title: 'Ayurvedic Wisdom',
    description: 'Traditional formulations for modern wellness',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop',
  },
  {
    icon: Droplets,
    title: 'No Chemicals',
    description: 'Free from synthetic additives & preservatives',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Lab tested for purity and potency',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-emerald-50/30 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-200/20 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            Our Promise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Earthy Concepts</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Committed to bringing you the purest wellness experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Background image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
