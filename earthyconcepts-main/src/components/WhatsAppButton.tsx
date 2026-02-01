import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  productName?: string;
  variant?: 'default' | 'floating';
  className?: string;
}

export const WhatsAppButton = ({ productName, variant = 'default', className = '' }: WhatsAppButtonProps) => {
  const message = productName 
    ? `Hello Earthy Concepts, I would like to order ${productName}`
    : 'Hello Earthy Concepts, I would like to know more about your products';
  
  const whatsappUrl = `https://wa.me/971XXXXXXXXX?text=${encodeURIComponent(message)}`;

  if (variant === 'floating') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5C] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${className}`}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    );
  }

  return (
    <Button 
      asChild 
      className={`bg-primary hover:bg-primary/90 text-primary-foreground gap-2 ${className}`}
    >
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="h-4 w-4" />
        Order on WhatsApp
      </a>
    </Button>
  );
};
