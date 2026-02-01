import { Layout } from '@/components/Layout';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Globe, 
  MessageCircle,
  Check,
  Shield,
} from 'lucide-react';

const GlobalPresence = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello Earthy Concepts, I'm interested in partnering or distributing your products internationally. Please share more details."
  );

  const bulletPoints = [
    "Multi-country distribution capabilities",
    "Launch-ready on global e-commerce platforms",
    "Product categories designed for worldwide appeal",
    "International market-compliant formulations",
    "Eco-conscious packaging for global shipping",
    "Documentation ready for export requirements",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">Global Presence</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Rooted in Tradition, Built for the World
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A symphony between ancient science and modern wellness lifestyle. Earthy Concepts brings Ayurvedic wisdom to global markets with internationally compliant, ethically sourced wellness solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Building a Global Presence Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Building a Global Presence
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              From our roots in Dubai, UAE, we are expanding to serve wellness seekers across continents. Our infrastructure, certifications, and product range are designed to meet international standards while preserving the authenticity of traditional Ayurvedic formulations.
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left Column - Bullet Points */}
              <div className="space-y-4">
                {bulletPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>

              {/* Right Column - Highlight Card */}
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Quality Without Compromise</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Every product that carries the Earthy Concepts name undergoes rigorous testing for efficacy and purity. Our commitment to conscious sourcing ensures that what reaches global markets remains pure, potent, and purposeful.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Partner With Us</h2>
            <Button size="lg" className="gap-2" asChild>
              <a
                href={`https://wa.me/971XXXXXXXXX?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Connect on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppButton variant="floating" />
    </Layout>
  );
};

export default GlobalPresence;
