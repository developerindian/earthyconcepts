import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import logo from '@/assets/logo-transparent.png';
import botanicalsHands from '@/assets/lifestyle/botanicals-hands.jpg';
import skincareRitual from '@/assets/lifestyle/skincare-ritual.jpg';
import herbalTea from '@/assets/lifestyle/herbal-tea-moment.jpg';
import spaBotanicals from '@/assets/lifestyle/spa-botanicals.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Warm beige/sand leaf watermark pattern - homepage only */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Base warm gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-background to-emerald-50/30" />
        
        {/* Beige leaf watermark pattern */}
        <div className="absolute inset-0 opacity-[0.12]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b8a07a'%3E%3Cpath d='M90 10 Q120 50 90 100 Q60 50 90 10 Z'/%3E%3Cpath d='M40 60 Q60 90 40 130 Q20 90 40 60 Z' transform='rotate(-20 40 95)'/%3E%3Cpath d='M140 60 Q160 90 140 130 Q120 90 140 60 Z' transform='rotate(20 140 95)'/%3E%3Cpath d='M90 120 Q105 145 90 175 Q75 145 90 120 Z' opacity='0.6'/%3E%3Cellipse cx='30' cy='150' rx='12' ry='25' transform='rotate(-30 30 150)' opacity='0.5'/%3E%3Cellipse cx='150' cy='150' rx='12' ry='25' transform='rotate(30 150 150)' opacity='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '180px 180px',
          }}
        />
        
        {/* Additional scattered leaf shapes for variety */}
        <div className="absolute inset-0 opacity-[0.08]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a89070'%3E%3Cpath d='M150 20 Q190 80 150 150 Q110 80 150 20 Z' transform='rotate(15 150 85)'/%3E%3Cpath d='M60 100 Q90 150 60 210 Q30 150 60 100 Z' transform='rotate(-10 60 155)'/%3E%3Cpath d='M240 100 Q270 150 240 210 Q210 150 240 100 Z' transform='rotate(10 240 155)'/%3E%3Cpath d='M100 200 Q120 240 100 285 Q80 240 100 200 Z' opacity='0.7'/%3E%3Cpath d='M200 200 Q220 240 200 285 Q180 240 200 200 Z' opacity='0.7'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '300px 300px',
            backgroundPosition: '50px 50px',
          }}
        />
      </div>
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-[1]">
        <img 
          src={botanicalsHands} 
          alt="Botanical wellness ritual" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>
      
      {/* Animated decorative orbs */}
      <motion.div 
        className="absolute top-20 left-[5%] w-64 h-64 bg-gradient-to-br from-primary/30 to-emerald-400/20 rounded-full blur-3xl z-[2]"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-32 right-[30%] w-48 h-48 bg-gradient-to-tl from-amber-300/30 to-orange-300/20 rounded-full blur-2xl z-[2]"
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative px-4 md:px-6 py-4 z-[3]">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo - MAXIMUM SIZE & BOLD */}
            <motion.div 
              className="relative w-full max-w-3xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img 
                src={logo} 
                alt="Earthy Concepts" 
                className="relative w-full h-auto min-h-[280px] md:min-h-[350px] lg:min-h-[420px] object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Headline - Natural & Conscious Wellness aligned under logo */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-left pl-4 md:pl-8 lg:pl-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-foreground">Natural</span>
              {' '}
              <span className="bg-gradient-to-r from-primary via-emerald-500 to-teal-500 bg-clip-text text-transparent">&</span>
              {' '}
              <span className="text-foreground">Conscious</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">Wellness</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-lg text-muted-foreground max-w-xl leading-relaxed text-left pl-4 md:pl-8 lg:pl-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Natural Herbs & Ayurvedic Formulations for <span className="text-primary font-medium">Daily Balance</span>, 
              <span className="text-accent font-medium"> Immunity</span> & 
              <span className="text-primary font-medium"> Mindful Living</span>.
            </motion.p>

            {/* CTA Buttons - Centered */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-2 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-primary-foreground gap-2 shadow-lg shadow-primary/25 px-8">
                <Link to="/products">
                  <Leaf className="h-5 w-5" />
                  Explore Products
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-2 bg-white/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 hover:bg-white/70">
                <Link to="/learn">
                  Find Your Concept
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

          </motion.div>

          {/* Right side - Lifestyle image showcase */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Lifestyle images grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Large image with overlay text at bottom */}
                <motion.div
                  className="col-span-2 rounded-3xl overflow-hidden shadow-2xl relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="aspect-[16/9] relative">
                    <img 
                      src={spaBotanicals} 
                      alt="Spa botanicals" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {/* Handcrafted with Nature's Finest overlay text - at bottom of image */}
                    <motion.div 
                      className="absolute bottom-3 left-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-primary/20 text-primary text-xs font-medium shadow-lg">
                        <Sparkles className="h-3 w-3" />
                        Handcrafted with Nature's Finest
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Smaller images */}
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="aspect-square relative">
                    <img 
                      src={herbalTea} 
                      alt="Herbal tea moment" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </motion.div>

                <motion.div
                  className="rounded-2xl overflow-hidden shadow-xl relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="aspect-square relative">
                    <img 
                      src={skincareRitual} 
                      alt="Skincare ritual" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    {/* Eco Conscious badge on right-side image - at bottom */}
                    <motion.div 
                      className="absolute bottom-3 right-3"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.0 }}
                    >
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-emerald-200 text-emerald-700 text-xs font-medium shadow-md">
                        <Leaf className="h-3 w-3" />
                        Eco Conscious
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Floating badge - 100% Natural, smaller and at bottom */}
              <motion.div 
                className="absolute -bottom-3 left-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-2 border border-primary/20"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center shadow-sm">
                    <Leaf className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs text-foreground">100% Natural</p>
                    <p className="text-[10px] text-muted-foreground">Pure Ingredients</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};