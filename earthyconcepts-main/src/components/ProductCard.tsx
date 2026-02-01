import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const categoryColors: Record<string, string> = {
  'herbal-teas': 'bg-emerald-100 text-emerald-700',
  'ubtans': 'bg-amber-100 text-amber-700',
  'face-mists': 'bg-cyan-100 text-cyan-700',
  'body-oils': 'bg-rose-100 text-rose-700',
  'hair-oils': 'bg-violet-100 text-violet-700',
  'body-cleanse': 'bg-lime-100 text-lime-700',
  'single-herbs': 'bg-teal-100 text-teal-700',
  'formulations': 'bg-orange-100 text-orange-700',
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const whatsappMessage = encodeURIComponent(
    `Hello Earthy Concepts, I would like to order ${product.name}`
  );
  const whatsappUrl = `https://wa.me/971XXXXXXXXX?text=${whatsappMessage}`;
  const badgeColor = categoryColors[product.category] || 'bg-primary/10 text-primary';

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white h-full">
        <Link to={`/products/${product.id}`}>
          <div className="aspect-square overflow-hidden bg-gradient-to-br from-muted/50 to-muted relative">
            <motion.img
              src={`${product.image}?v=1`}
              alt={product.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
              }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Category badge overlay */}
            <div className="absolute top-3 left-3">
              <Badge className={`${badgeColor} border-0 shadow-sm`}>
                {product.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
              </Badge>
            </div>
          </div>
        </Link>
        <CardContent className="p-5 space-y-4">
          <div className="space-y-2">
            <Link to={`/products/${product.id}`}>
              <h3 className="font-bold text-lg leading-tight hover:text-primary transition-colors line-clamp-1">
                {product.name}
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground line-clamp-2 min-h-[40px]">
              {product.tagline}
            </p>
          </div>
          
          <Button 
            asChild 
            className="w-full bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-primary-foreground gap-2 shadow-md"
            size="sm"
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
        </CardContent>
      </Card>
    </motion.div>
  );
};
