import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';

// Select visually diverse products for the showcase
const showcaseProducts = [
  products.find(p => p.id === 'golden-curcumin'),
  products.find(p => p.id === 'serene-tea'),
  products.find(p => p.id === 'rose-bliss'),
  products.find(p => p.id === 'illuma-mask'),
  products.find(p => p.id === 'hydra-mist'),
  products.find(p => p.id === 'root-luxe'),
].filter(Boolean);

export const ProductShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-amber-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Shop Our <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Bestsellers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our most-loved natural wellness products
          </p>
        </motion.div>

        {/* Large visual product grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Featured large product */}
          {showcaseProducts[0] && (
            <motion.div
              className="md:col-span-2 md:row-span-2 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to={`/products/${showcaseProducts[0].id}`}>
                <div className="relative h-full bg-gradient-to-br from-primary/10 via-emerald-50 to-teal-50 rounded-3xl p-8 overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-200/30 rounded-full blur-2xl" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">Featured</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex-1 flex items-center justify-center py-8">
                      <motion.img 
                        src={showcaseProducts[0].image} 
                        alt={showcaseProducts[0].name}
                        className="w-full max-w-[280px] md:max-w-[350px] h-auto object-contain drop-shadow-2xl"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {showcaseProducts[0].name}
                      </h3>
                      <p className="text-muted-foreground mb-4">{showcaseProducts[0].tagline}</p>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        View Product <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Smaller product cards */}
          {showcaseProducts.slice(1, 5).map((product, index) => (
            product && (
              <motion.div
                key={product.id}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <Link to={`/products/${product.id}`}>
                  <div className="relative bg-gradient-to-br from-muted/80 to-muted rounded-2xl p-5 overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
                    
                    <div className="relative z-10">
                      <div className="aspect-square flex items-center justify-center mb-4">
                        <motion.img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain"
                          whileHover={{ scale: 1.08 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                      </div>
                      
                      <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-xs text-muted-foreground capitalize">{product.category.replace('-', ' ')}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg" className="gap-2 px-8">
            <Link to="/products">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
