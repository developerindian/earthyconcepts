import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';
import { z } from 'zod';

const emailSchema = z.string().trim().email({ message: "Please enter a valid email address" }).max(255);

export const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = emailSchema.safeParse(email);
    if (!validation.success) {
      toast({
        title: "Invalid email",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({ email: validation.data });

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
          title: "Welcome to Earthy Concepts!",
          description: "You'll receive updates on new products and exclusive offers.",
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
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Stay Connected</h3>
      <p className="text-sm text-background/70">
        Subscribe for exclusive offers, wellness tips, newsletters and early access to new products.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-9 bg-background/10 border-background/20 text-background placeholder:text-background/50 focus-visible:ring-background/30"
              required
            />
          </div>
          <Button 
            type="submit" 
            disabled={isLoading}
            variant="secondary"
            className="shrink-0"
          >
            {isLoading ? "..." : "Subscribe"}
          </Button>
        </div>
      </form>
    </div>
  );
};