import { motion } from 'framer-motion';
import { NatureWatermark } from '@/components/NatureWatermark';
import herbalPreparation from '@/assets/lifestyle/herbal-preparation.jpg';
import morningMeditation from '@/assets/lifestyle/morning-meditation.jpg';
import aromatherapyRitual from '@/assets/lifestyle/aromatherapy-ritual.jpg';
import wellnessBreakfast from '@/assets/lifestyle/wellness-breakfast.jpg';
import dailyBalance from '@/assets/lifestyle/daily-balance.jpg';

const galleryImages = [
  { src: herbalPreparation, alt: 'Herbal preparation', label: 'Pure Botanicals' },
  { src: morningMeditation, alt: 'Morning meditation', label: 'Mindful Living' },
  { src: wellnessBreakfast, alt: 'Wellness breakfast', label: 'Nourishing Rituals' },
  { src: aromatherapyRitual, alt: 'Aromatherapy ritual', label: 'Herbal Wellness' },
  { src: dailyBalance, alt: 'Daily balance morning ritual', label: 'Daily Balance' },
];

export const LifestyleGallery = () => {
  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#c9b99a' }}>
      {/* Nature Watermark */}
      <NatureWatermark opacity={0.08} size="lg" />
      
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#a68f5d]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#8b7355]/15 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2d3a2e]">
            Embrace the <span className="text-[#3d4f3e]">Earthy Lifestyle</span>
          </h2>
          <p className="text-[#4a5a4b] text-lg">
            Experience wellness through nature's finest offerings
          </p>
        </motion.div>

        {/* Masonry-style gallery - 8 images */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {/* Large featured image */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl col-span-2 row-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="aspect-square relative">
              <img 
                src={galleryImages[0].src} 
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Subtle gradient overlay - always visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Always visible label */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white/90 font-light text-base tracking-wide">{galleryImages[0].label}</p>
              </div>
            </div>
          </motion.div>

          {/* Regular images */}
          {galleryImages.slice(1).map((image, index) => (
            <motion.div
              key={image.label}
              className="group relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="aspect-square relative">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Subtle gradient overlay - always visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* Always visible label */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <p className="text-white/90 font-light text-xs md:text-sm tracking-wide">{image.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
