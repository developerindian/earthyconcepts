import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Leaf, 
  Moon, 
  Sun,
  Sparkles,
  Heart,
  RefreshCw,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

const subscriptionTypes = [
  {
    icon: Leaf,
    title: 'Monthly Tea Rituals',
    description: 'A curated selection of herbal teas delivered monthly, designed to align with seasonal wellness needs and daily rituals.',
  },
  {
    icon: Sun,
    title: 'Seasonal Wellness Boxes',
    description: 'Thoughtfully assembled wellness collections that change with the seasons, supporting your body\'s natural rhythms throughout the year.',
  },
  {
    icon: RefreshCw,
    title: 'Repeat Replenishment',
    description: 'Never run out of your essential wellness staples. Set your preferred products for automatic, scheduled delivery.',
  },
  {
    icon: Moon,
    title: 'Ritual Bundles',
    description: 'Complete wellness rituals—morning energy, evening calm, or holistic skincare—delivered as integrated practice sets.',
  },
];

const idealFor = [
  'Individuals committed to consistent wellness practices',
  'Families seeking natural health solutions',
  'Wellness enthusiasts exploring Ayurvedic traditions',
  'Those seeking convenience without compromising on quality',
  'Anyone wanting to build sustainable self-care habits',
];

const Subscription = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello Earthy Concepts, I'm interested in your Monthly Rituals options. Please share more details."
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Monthly Rituals</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Wellness as a Ritual
            </h1>
            <p className="text-lg text-muted-foreground">
              True wellness is not a destination—it is a daily practice. At Earthy Concepts, 
              we believe in nurturing health through consistent, mindful rituals that honour 
              the body's natural rhythms and the wisdom of Ayurveda.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              The Art of Consistent Wellness
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Our monthly wellness rituals are designed to support your wellness journey with 
                regularity and intention. Rather than sporadic purchases, ongoing rituals allow 
                you to integrate Ayurvedic practices seamlessly into your daily life.
              </p>
              <p>
                Each delivery is a gentle reminder to pause, nurture yourself, and continue 
                the practices that bring balance to your body and peace to your mind. Whether 
                it's a morning cup of herbal tea or an evening skincare ritual, consistency 
                transforms routine into meaningful self-care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ritual Types - with Explore Products button per request #19 */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ways to Begin Your Ritual</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the rhythm that suits your lifestyle. Each ritual is thoughtfully 
              designed to support your unique wellness journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {subscriptionTypes.map((type) => (
              <Card key={type.title} className="border-none shadow-md">
                <CardContent className="p-6">
                  <type.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <Link to="/products">
                      Explore Products
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Who It's For</h2>
              <p className="text-muted-foreground mb-8">
                Our monthly wellness rituals are crafted for those who understand that wellness 
                is a journey, not a quick fix. They're for the mindful, the curious, and 
                those ready to embrace nature's healing traditions.
              </p>
              <ul className="space-y-4">
                {idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 lg:p-10">
              <h3 className="text-xl font-bold mb-4">How It Works</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Share Your Needs</h4>
                    <p className="text-sm text-muted-foreground">
                      Tell us about your wellness goals and preferences via WhatsApp.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Receive Recommendations</h4>
                    <p className="text-sm text-muted-foreground">
                      We curate a personalized ritual plan based on your needs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Enjoy Your Rituals</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive your wellness essentials at your chosen frequency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Begin Your Wellness Ritual
            </h2>
            <p className="text-muted-foreground mb-8">
              Ready to embrace consistent wellness? Connect with us to explore 
              ritual options tailored to your journey.
            </p>
            <Button size="lg" className="gap-2" asChild>
              <a
                href={`https://wa.me/971XXXXXXXXX?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Order on WhatsApp
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Ritual options are shared via WhatsApp
            </p>
          </div>
        </div>
      </section>

      <WhatsAppButton variant="floating" />
    </Layout>
  );
};

export default Subscription;