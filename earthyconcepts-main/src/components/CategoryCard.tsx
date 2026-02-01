import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  productCount: number;
  image?: string;
  index?: number;
}

// Category-specific gradients and images
const categoryStyles: Record<string, { gradient: string; icon: string }> = {
  'herbal-teas': { 
    gradient: 'from-emerald-500/20 via-teal-400/15 to-green-300/10',
    icon: '🍵'
  },
  'ubtans': { 
    gradient: 'from-amber-500/20 via-orange-400/15 to-yellow-300/10',
    icon: '✨'
  },
  'face-mists': { 
    gradient: 'from-cyan-500/20 via-blue-400/15 to-sky-300/10',
    icon: '💧'
  },
  'body-oils': { 
    gradient: 'from-rose-500/20 via-pink-400/15 to-red-300/10',
    icon: '🌹'
  },
  'hair-oils': { 
    gradient: 'from-violet-500/20 via-purple-400/15 to-indigo-300/10',
    icon: '💜'
  },
  'body-cleanse': { 
    gradient: 'from-lime-500/20 via-green-400/15 to-emerald-300/10',
    icon: '🌿'
  },
  'single-herbs': { 
    gradient: 'from-teal-500/20 via-cyan-400/15 to-emerald-300/10',
    icon: '🌱'
  },
  'formulations': { 
    gradient: 'from-orange-500/20 via-amber-400/15 to-yellow-300/10',
    icon: '⚗️'
  },
};

export const CategoryCard = ({ id, name, description, productCount, image, index = 0 }: CategoryCardProps) => {
  const style = categoryStyles[id] || { gradient: 'from-primary/20 to-accent/10', icon: '🌿' };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/products?category=${id}`}>
        <motion.div 
          className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${style.gradient} border border-white/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl h-full`}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/30 rounded-full blur-xl transform -translate-x-6 translate-y-6" />
          </div>

          <div className="relative p-6 space-y-4">
            {/* Icon */}
            <div className="text-4xl mb-2">{style.icon}</div>
            
            {/* Content */}
            <div>
              <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                {name}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                {description}
              </p>
            </div>

            {/* CTA */}
            <div className="flex items-center text-primary text-sm font-medium pt-2 group-hover:gap-2 transition-all">
              <span>Explore Collection</span>
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};
