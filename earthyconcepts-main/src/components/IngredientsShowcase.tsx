import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const ingredients = [
  { name: 'Turmeric', benefit: 'Anti-inflammatory', color: 'from-amber-400 to-orange-500' },
  { name: 'Ashwagandha', benefit: 'Stress Relief', color: 'from-emerald-400 to-green-600' },
  { name: 'Amla', benefit: 'Immunity Boost', color: 'from-lime-400 to-green-500' },
  { name: 'Tulsi', benefit: 'Respiratory Health', color: 'from-green-400 to-emerald-600' },
  { name: 'Brahmi', benefit: 'Mental Clarity', color: 'from-teal-400 to-cyan-600' },
  { name: 'Saffron', benefit: 'Radiant Skin', color: 'from-orange-400 to-red-500' },
  { name: 'Neem', benefit: 'Purification', color: 'from-green-500 to-emerald-700' },
  { name: 'Rose', benefit: 'Natural Glow', color: 'from-rose-400 to-pink-500' },
];

export const IngredientsShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-emerald-50/30 to-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-medium mb-6">
            <Leaf className="h-4 w-4" />
            Pure Botanicals
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nature's Finest <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Ingredients</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Handpicked herbs and botanicals, ethically sourced for maximum potency
          </p>
        </motion.div>

        {/* Floating ingredient cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              className="group relative"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <motion.div 
                className={`relative bg-gradient-to-br ${ingredient.color} rounded-3xl p-6 md:p-8 text-white overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-500`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Decorative circles */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                
                {/* Leaf pattern */}
                <div className="absolute top-2 right-2 opacity-20">
                  <Leaf className="h-12 w-12" />
                </div>

                <div className="relative z-10">
                  <h3 className="font-bold text-xl md:text-2xl mb-2">{ingredient.name}</h3>
                  <p className="text-white/90 text-sm md:text-base">{ingredient.benefit}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
