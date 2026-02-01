import { Link } from 'react-router-dom';
import { Leaf, Shield, Heart, Sparkles, Award, Users, Package, Home, Baby, MessageCircle, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { LifestyleGallery } from '@/components/LifestyleGallery';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { VideoHeroBanner } from '@/components/VideoHeroBanner';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { NatureWatermark } from '@/components/NatureWatermark';
import { ShopifyProductGrid } from '@/components/ShopifyProductGrid';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';

// Lifestyle images for visual richness
import botanicalsHands from '@/assets/lifestyle/botanicals-hands.jpg';
import dailyRitualMoment from '@/assets/lifestyle/daily-ritual-moment.jpg';
import naturalBeauty from '@/assets/lifestyle/natural-beauty.jpg';

const Index = () => {
  // Get best sellers for the product showcase - using specific product IDs from document
  const bestSellers = [
    products.find(p => p.id === 'imunetea'),
    products.find(p => p.id === 'diabetea'),
    products.find(p => p.id === 'radiancemask'),
    products.find(p => p.id === 'detoxmask'),
    products.find(p => p.id === 'scalpcleanse'),
    products.find(p => p.id === 'bodycleanse'),
    products.find(p => p.id === 'lavendercalm'), // Relax Oil equivalent
    products.find(p => p.id === 'rosebliss'), // Glow Oil equivalent
    products.find(p => p.id === 'stressbalance'),
    products.find(p => p.id === 'immunesafe'),
    products.find(p => p.id === 'rejuvedaily'),
    products.find(p => p.id === 'gutclear'),
    products.find(p => p.id === 'rootluxe'), // Hair Oil
    products.find(p => p.id === 'pureglow'), // Formulation
    products.find(p => p.id === 'hydramist'), // Face Mist
    products.find(p => p.id === 'golden-curcumin'), // Formulation
  ].filter(Boolean);

  return (
    <Layout>
      {/* 1. HERO - Brand Introduction (no top spacing) */}
      <Hero />

      {/* 2. VIDEO BANNER - Emotional Connection (trust strip removed from homepage) */}
      <VideoHeroBanner />

      {/* 3. SHOPIFY PRODUCT GRID - Dynamic Product Display */}
      <ShopifyProductGrid />

      {/* 4. LIFESTYLE GALLERY - Visual Brand Immersion */}
      <LifestyleGallery />

      {/* 4. BESTSELLERS - Products with CTA */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-amber-50/50 via-background to-emerald-50/30">
        <NatureWatermark opacity={0.07} size="lg" />
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-[1]" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />
        
        <div className="container px-4 md:px-6 relative">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Nature's Bestsellers</span>
            </h2>
          </motion.div>
          
          {/* Bento-style Product Grid with Lifestyle Images - even layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
            {/* Featured lifestyle image - large */}
            <motion.div
              className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-xl group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src={botanicalsHands}
                alt="Botanical wellness"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <Badge className="bg-white/20 backdrop-blur-sm text-white border-0 mb-3">Pure & Natural</Badge>
                <h3 className="text-xl font-bold mb-2">Crafted with Intention</h3>
                <p className="text-white/80 text-sm">Every product tells a story of wellness</p>
              </div>
            </motion.div>

            {/* Product cards - evenly distributed */}
            {bestSellers.slice(0, 4).map((product, index) => product && (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link to={`/products/${product.id}`} className="block h-full">
                  <Card className="group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden">
                    <div className="h-full flex flex-col">
                      <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-muted/50 to-muted p-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder.svg';
                          }}
                        />
                      </div>
                      <div className="p-3 bg-white">
                        <h4 className="font-semibold text-sm line-clamp-1 group-hover:text-primary transition-colors">{product.name}</h4>
                        <p className="text-xs text-muted-foreground line-clamp-1">{product.tagline}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}

            {/* Second lifestyle image */}
            <motion.div
              className="col-span-2 relative rounded-2xl overflow-hidden shadow-xl group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img 
                src={dailyRitualMoment}
                alt="Daily wellness ritual"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="text-sm font-medium">Daily Rituals</p>
              </div>
            </motion.div>

            {/* More product cards */}
            {bestSellers.slice(4, 8).map((product, index) => product && (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.08 }}
              >
                <Link to={`/products/${product.id}`} className="block h-full">
                  <Card className="group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden">
                    <div className="h-full flex flex-col">
                      <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-muted/50 to-muted p-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder.svg';
                          }}
                        />
                      </div>
                      <div className="p-3 bg-white">
                        <h4 className="font-semibold text-sm line-clamp-1 group-hover:text-primary transition-colors">{product.name}</h4>
                        <p className="text-xs text-muted-foreground line-clamp-1">{product.tagline}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}

            {/* Third lifestyle image */}
            <motion.div
              className="col-span-2 relative rounded-2xl overflow-hidden shadow-xl group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <img 
                src={naturalBeauty}
                alt="Natural beauty"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="text-sm font-medium">Beauty from Nature</p>
              </div>
            </motion.div>

            {/* Additional product cards */}
            {bestSellers.slice(8, 17).map((product, index) => product && (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.08 }}
              >
                <Link to={`/products/${product.id}`} className="block h-full">
                  <Card className="group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden">
                    <div className="h-full flex flex-col">
                      <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-muted/50 to-muted p-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder.svg';
                          }}
                        />
                      </div>
                      <div className="p-3 bg-white">
                        <h4 className="font-semibold text-sm line-clamp-1 group-hover:text-primary transition-colors">{product.name}</h4>
                        <p className="text-xs text-muted-foreground line-clamp-1">{product.tagline}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-primary-foreground gap-2 shadow-lg px-8">
              <Link to="/products">
                Explore All Products
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 5. CRAFTED FOR - Audience Segments */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <NatureWatermark opacity={0.06} />
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Crafted <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">For</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              A comprehensive range of natural wellness solutions for every aspect of life
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Individuals', desc: 'Pure daily wellness essentials, holistic skin & body health, nature-inspired solutions for immunity, digestion, detox, and everyday wellness', color: 'from-emerald-500 to-teal-500', bg: 'from-emerald-50 to-teal-50' },
              { icon: Package, title: 'Businesses', desc: 'Retailers, distributors & wellness partners. Healthcare on-the-go, Chakra packs, health kits, spa & hospitality solutions', color: 'from-amber-500 to-orange-500', bg: 'from-amber-50 to-orange-50' },
              { icon: Heart, title: 'Institutions', desc: 'Wellness campaigns, gifting programs, hospital & clinic kits. Products for retreats & wellness centers', color: 'from-rose-500 to-pink-500', bg: 'from-rose-50 to-pink-50' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-2xl bg-gradient-to-br ${item.bg} border border-white/50 shadow-md text-center`}
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Comprehensive Wellness row */}
          <motion.div 
            className="mt-8 grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {[
              { icon: Sparkles, title: 'Pure Skincare', desc: 'Face Masks, Glow Powders, Herbal Soaps, Facial Serums, Hair & Body Oils', color: 'from-violet-500 to-purple-500', bg: 'from-violet-50 to-purple-50' },
              { icon: Home, title: 'Spa & Hospitality', desc: 'Natural & Organic Products for Hotels, Spas, Retreats & Wellness Centers', color: 'from-cyan-500 to-blue-500', bg: 'from-cyan-50 to-blue-50' },
              { icon: Baby, title: 'Comprehensive Wellness', desc: 'Natural products for all ages', color: 'from-lime-500 to-green-500', bg: 'from-lime-50 to-green-50' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-2xl bg-gradient-to-br ${item.bg} border border-white/50 shadow-md text-center`}
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <TestimonialCarousel />


      <WhatsAppButton variant="floating" />
    </Layout>
  );
};

export default Index;