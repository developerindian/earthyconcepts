import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getProductById } from '@/data/products';
import {
  Flame,
  Shield,
  Moon,
  Sparkles,
  Zap,
  HeartPulse,
  Sun,
  Activity,
} from 'lucide-react';

interface WellnessConcept {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  relatedProducts: string[];
}

interface ConceptCardProps {
  concept: WellnessConcept;
}

const iconMap: Record<string, React.ElementType> = {
  Flame,
  Shield,
  Moon,
  Sparkles,
  Zap,
  HeartPulse,
  Sun,
  Activity,
};

const colorMap: Record<string, string> = {
  amber: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
  green: 'bg-green-500/10 text-green-600 border-green-500/20',
  purple: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
  pink: 'bg-pink-500/10 text-pink-600 border-pink-500/20',
  blue: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
  red: 'bg-red-500/10 text-red-600 border-red-500/20',
  orange: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
  teal: 'bg-teal-500/10 text-teal-600 border-teal-500/20',
};

const iconBgMap: Record<string, string> = {
  amber: 'bg-amber-500/20',
  green: 'bg-green-500/20',
  purple: 'bg-purple-500/20',
  pink: 'bg-pink-500/20',
  blue: 'bg-blue-500/20',
  red: 'bg-red-500/20',
  orange: 'bg-orange-500/20',
  teal: 'bg-teal-500/20',
};

export const ConceptCard = ({ concept }: ConceptCardProps) => {
  const Icon = iconMap[concept.icon] || Flame;
  const colorClasses = colorMap[concept.color] || colorMap.green;
  const iconBgClasses = iconBgMap[concept.color] || iconBgMap.green;

  // Get valid products count
  const validProducts = concept.relatedProducts.filter((id) => getProductById(id));

  return (
    <Link to={`/learn/${concept.id}`}>
      <Card className={`group h-full overflow-hidden border-2 ${colorClasses} hover:shadow-lg transition-all duration-300 cursor-pointer`}>
        <CardContent className="p-6 space-y-4">
          <div className={`h-14 w-14 rounded-xl ${iconBgClasses} flex items-center justify-center group-hover:scale-110 transition-transform`}>
            <Icon className="h-7 w-7" />
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">{concept.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {concept.description}
            </p>
          </div>

        </CardContent>
      </Card>
    </Link>
  );
};
