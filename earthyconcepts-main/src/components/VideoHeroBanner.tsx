import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { NatureWatermark } from '@/components/NatureWatermark';
import familyWellnessVideo from '@/assets/videos/family-wellness.mp4';

export const VideoHeroBanner = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={familyWellnessVideo} type="video/mp4" />
      </video>

      {/* Nature Watermark */}
      <NatureWatermark opacity={0.06} size="lg" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30 z-[1]" />

      {/* Content */}
      <div className="relative h-full container px-4 md:px-6 flex items-center z-[2]">
        <motion.div
          className="max-w-2xl space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-foreground">Nature's Care for</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Every Generation
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            From grandparents to grandchildren, our herbal formulations bring 
            time-tested Ayurvedic wisdom to your entire family's wellness journey.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            className="flex flex-wrap gap-8 pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {[
              { value: '3+', label: 'Generations Trust Us' },
              { value: '100%', label: 'Natural Ingredients' },
              { value: '0', label: 'Harmful Chemicals' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Video Controls with Wellness for the Whole Family label */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3 z-[3]">
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-primary/20 text-primary text-xs font-medium shadow-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Wellness for the Whole Family
        </motion.div>
        <Button
          variant="outline"
          size="icon"
          onClick={togglePlay}
          className="bg-white/80 backdrop-blur-sm border-white/30 hover:bg-white/90 shadow-lg"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={toggleMute}
          className="bg-white/80 backdrop-blur-sm border-white/30 hover:bg-white/90 shadow-lg"
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};