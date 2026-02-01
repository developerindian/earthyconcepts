import { motion } from 'framer-motion';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';

// Get diverse products for the Instagram-style grid
const gridProducts = [
  products.find(p => p.id === 'serene-tea'),
  products.find(p => p.id === 'rose-bliss'),
  products.find(p => p.id === 'illuma-mask'),
  products.find(p => p.id === 'hydra-mist'),
  products.find(p => p.id === 'golden-curcumin'),
  products.find(p => p.id === 'root-luxe'),
  products.find(p => p.id === 'saffron-rituals'),
  products.find(p => p.id === 'immune-tea'),
  products.find(p => p.id === 'pure-glow'),
].filter(Boolean);

export const ProductGrid = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      <div className="container px-4 md:px-6 mb-10">
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Collection</span>
          </h2>
          <p className="text-muted-foreground">
            Explore our complete range of natural wellness products
          </p>
        </motion.div>
      </div>

      {/* Instagram-style scrolling grid */}
      <div className="relative">
        <motion.div 
          className="flex gap-4 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* First row - scrolls left */}
          <motion.div 
            className="flex gap-4 shrink-0"
            animate={{ x: [0, -1200] }}
            transition={{ 
              x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" }
            }}
          >
            {[...gridProducts, ...gridProducts].map((product, index) => (
              product && (
                <Link 
                  key={`${product.id}-${index}`} 
                  to={`/products/${product.id}`}
                  className="shrink-0"
                >
                  <motion.div 
                    className="w-48 h-48 md:w-64 md:h-64 relative rounded-2xl overflow-hidden group"
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-muted/80 to-muted" />
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain p-4 relative z-10 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform z-30">
                      <p className="text-white font-medium text-sm truncate">{product.name}</p>
                    </div>
                  </motion.div>
                </Link>
              )
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
