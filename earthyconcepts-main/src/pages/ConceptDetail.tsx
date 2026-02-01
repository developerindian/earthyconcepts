import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { wellnessConcepts } from '@/data/brand';
import { getProductById } from '@/data/products';
import logo from '@/assets/logo.jpeg';
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
  amber: 'from-amber-500/20 to-amber-500/5',
  green: 'from-green-500/20 to-green-500/5',
  purple: 'from-purple-500/20 to-purple-500/5',
  pink: 'from-pink-500/20 to-pink-500/5',
  blue: 'from-blue-500/20 to-blue-500/5',
  red: 'from-red-500/20 to-red-500/5',
  orange: 'from-orange-500/20 to-orange-500/5',
  teal: 'from-teal-500/20 to-teal-500/5',
};

const ConceptDetail = () => {
  const { conceptId } = useParams<{ conceptId: string }>();
  const concept = wellnessConcepts.find((c) => c.id === conceptId);

  if (!concept) {
    return (
      <Layout>
        <div className="container px-4 md:px-6 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Concept not found</h1>
          <Button asChild>
            <Link to="/learn">Back to Learn</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const Icon = iconMap[concept.icon] || Flame;
  const gradientClasses = colorMap[concept.color] || colorMap.green;

  // Get valid products
  const products = concept.relatedProducts
    .map((id) => getProductById(id))
    .filter(Boolean);

  return (
    <Layout>
      {/* Hero */}
      <section className={`py-16 bg-gradient-to-b ${gradientClasses}`}>
        <div className="container px-4 md:px-6">
          <Link
            to="/learn"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Learn
          </Link>

          <div className="flex items-start gap-6">
            <div className="h-20 w-20 rounded-2xl bg-background/80 backdrop-blur flex items-center justify-center shrink-0">
              <Icon className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{concept.name}</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                {concept.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">
            Products for {concept.name}
          </h2>

          {products.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) =>
                product ? <ProductCard key={product.id} product={product} /> : null
              )}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">
                No products available for this concept yet.
              </p>
              <Button asChild>
                <Link to="/products">Browse All Products</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 md:px-6 text-center">
          <h3 className="text-xl font-bold mb-3">Not sure which products are right for you?</h3>
          <p className="text-muted-foreground mb-6">
            Take our wellness quiz to get personalized recommendations
          </p>
          <Button asChild>
            <Link to="/learn?tab=quiz">Take the Quiz</Link>
          </Button>
        </div>
      </section>

      <WhatsAppButton variant="floating" />
    </Layout>
  );
};

export default ConceptDetail;
