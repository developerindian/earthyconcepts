import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Leaf, Sparkles } from 'lucide-react';
import { z } from 'zod';

const emailSchema = z.string().trim().email({ message: 'Please enter a valid email address' }).max(255);

export const NewsletterBanner = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast({
        title: "Invalid email",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: result.data }]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already subscribed",
            description: "This email is already on our list!",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Welcome to the family!",
          description: "You'll receive exclusive offers and wellness tips.",
        });
        setEmail('');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-emerald-50/80 to-accent/10" />
      
      {/* Soft decorative elements */}
      <motion.div 
        className="absolute top-8 left-[10%] text-primary/15"
        animate={{ 
          y: [0, -8, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf className="w-12 h-12" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-8 right-[15%] text-emerald-500/15"
        animate={{ 
          y: [0, 8, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Leaf className="w-16 h-16" />
      </motion.div>

      <motion.div 
        className="absolute top-1/2 right-[8%] text-accent/20"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Leaf className="w-4 h-4" />
            Join Our Wellness Community
          </motion.span>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-3">
            Get 10% Off Your First Wellness Purchase
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Subscribe for exclusive offers, wellness tips, newsletters and early access to new products.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary/40 rounded-full px-5"
                required
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
