import { Layout } from '@/components/Layout';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Building2, 
  Users, 
  Heart, 
  Gift, 
  Handshake,
  Sparkles,
  MessageCircle,
  Calendar
} from 'lucide-react';

const corporateOfferings = [
  {
    icon: Gift,
    title: 'Corporate Gifting',
    description: 'Thoughtfully curated wellness hampers that leave a lasting impression on clients, partners, and stakeholders.',
  },
  {
    icon: Users,
    title: 'Employee Wellness Kits',
    description: 'Comprehensive wellness packages designed to support your team\'s health, productivity, and well-being.',
  },
  {
    icon: Calendar,
    title: 'Event-Based Gifting',
    description: 'Bespoke wellness gifts for conferences, retreats, corporate milestones, and seasonal celebrations.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnerships',
    description: 'Ongoing wellness programs with dedicated support, regular deliveries, and evolving product selections.',
  },
  {
    icon: Sparkles,
    title: 'Customisation',
    description: 'Tailored formulations, custom packaging, and branded wellness solutions that reflect your organisation\'s identity.',
  },
  {
    icon: Building2,
    title: 'Institutional Programs',
    description: 'Specialized solutions for hospitals, spas, hotels, wellness centres, and healthcare facilities.',
  },
];

const partnershipBenefits = [
  'Dedicated account management for seamless coordination',
  'Flexible ordering and delivery schedules',
  'Product knowledge sessions for your team',
  'Custom formulations for unique requirements',
  'Sustainable packaging aligned with ESG goals',
  'Volume flexibility for orders of any scale',
];

const CorporateWellness = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello Earthy Concepts, I'm interested in your Corporate Wellness solutions. Please share more details."
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Building2 className="h-4 w-4" />
              <span className="text-sm font-medium">Corporate & Institutional</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Wellness for Organisations
            </h1>
            <p className="text-lg text-muted-foreground">
              Partner with Earthy Concepts to bring the ancient wisdom of Ayurveda 
              into your organisation. We work with businesses, institutions, and 
              wellness providers to create meaningful health experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              A Partnership Built on Purpose
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                At Earthy Concepts, we understand that organisations today seek more than 
                products—they seek partners who share their values. Our corporate wellness 
                programs are designed to reflect your commitment to employee well-being, 
                client appreciation, and sustainable business practices.
              </p>
              <p>
                From boutique enterprises to large institutions, we work closely with each 
                partner to understand their unique needs and craft wellness solutions that 
                resonate with their culture and objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">How We Serve Organisations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our corporate solutions are tailored to meet the diverse needs of businesses 
              and institutions across industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateOfferings.map((offering) => (
              <Card key={offering.title} className="border-none shadow-md">
                <CardContent className="p-6">
                  <offering.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{offering.title}</h3>
                  <p className="text-muted-foreground">{offering.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The Earthy Concepts Partnership
              </h2>
              <p className="text-muted-foreground mb-8">
                When you partner with us, you gain more than a supplier—you gain a 
                dedicated wellness ally committed to supporting your organisation's 
                health initiatives with authenticity and care.
              </p>
              <ul className="space-y-4">
                {partnershipBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 lg:p-10">
              <h3 className="text-xl font-bold mb-4">Industries We Serve</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>• Corporate offices and enterprises</p>
                <p>• Hospitals and healthcare facilities</p>
                <p>• Spas and wellness centres</p>
                <p>• Hotels and hospitality groups</p>
                <p>• Educational institutions</p>
                <p>• Event management companies</p>
                <p>• Real estate and property developers</p>
                <p>• Retail and distribution partners</p>
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
              Let's Build Wellness Together
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you're exploring corporate gifting, employee wellness programs, 
              or institutional partnerships, we're here to listen and create solutions 
              that align with your vision.
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
              Corporate and bulk orders are processed via WhatsApp
            </p>
          </div>
        </div>
      </section>

      <WhatsAppButton variant="floating" />
    </Layout>
  );
};

export default CorporateWellness;
