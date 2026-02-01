import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Gift, 
  Heart, 
  Sparkles, 
  Leaf,
  MessageCircle,
  Sun,
  Users,
  Building2,
  ArrowRight
} from 'lucide-react';

const giftingOccasions = [
  {
    icon: Sun,
    title: 'Festive Gifting',
    description: 'Celebrate Diwali, Eid, Christmas, and seasonal festivals with wellness hampers that convey warmth and thoughtfulness.',
  },
  {
    icon: Building2,
    title: 'Corporate Gifting',
    description: 'Express appreciation to clients, partners, and teams with curated wellness boxes that reflect your organisation\'s values.',
  },
  {
    icon: Users,
    title: 'Personal Gifting',
    description: 'Mark birthdays, anniversaries, housewarmings, and life\'s special moments with the gift of natural wellness.',
  },
];

const ritualBoxExamples = [
  {
    title: 'Morning Awakening',
    description: 'Energising teas, face mists, and vitality formulations to start the day with intention.',
  },
  {
    title: 'Evening Serenity',
    description: 'Calming teas, relaxation oils, and sleep-supporting herbs for peaceful nights.',
  },
  {
    title: 'Radiant Beauty',
    description: 'Ubtans, face mists, and skin-nourishing oils for a complete self-care ritual.',
  },
  {
    title: 'Holistic Wellness',
    description: 'A balanced selection spanning internal health, external beauty, and emotional balance.',
  },
];

const Gifting = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello Earthy Concepts, I'm interested in your Gifting & Ritual Boxes. Please share more details."
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Gift className="h-4 w-4" />
              <span className="text-sm font-medium">Gifting & Ritual Boxes</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              The Art of Conscious Gifting
            </h1>
            <p className="text-lg text-muted-foreground">
              A gift from Earthy Concepts is more than a present—it is an invitation 
              to wellness, a gesture of care wrapped in nature's healing wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Gifting with Intention
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                In the tradition of Ayurveda, giving is considered a sacred act—one that 
                nurtures both the giver and the receiver. When you gift wellness, you 
                share something far more valuable than material goods: you share the 
                wish for health, balance, and vitality.
              </p>
              <p className="mb-4">
                Our gift collections are thoughtfully curated to create meaningful 
                experiences. Each box tells a story of botanical treasures, time-honoured 
                formulations, and the care that goes into every Earthy Concepts product.
              </p>
              <p>
                Whether celebrating a milestone, expressing gratitude, or simply showing 
                someone you care, a wellness gift speaks to the heart while nourishing 
                the body.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions - with Explore Products button per request #24 */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Gifting for Every Occasion</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From intimate personal celebrations to large-scale corporate events, 
              our wellness gifts are crafted to make every moment memorable.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {giftingOccasions.map((occasion) => (
              <Card key={occasion.title} className="border-none shadow-md text-center">
                <CardContent className="p-8">
                  <occasion.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{occasion.title}</h3>
                  <p className="text-muted-foreground mb-4">{occasion.description}</p>
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

      {/* Ritual Boxes - with Explore Products button per request #24 */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ritual Box Inspirations</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our ritual boxes are designed around wellness themes, bringing together 
                complementary products that create complete self-care experiences.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {ritualBoxExamples.map((box) => (
                <div 
                  key={box.title} 
                  className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5"
                >
                  <Sparkles className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{box.title}</h3>
                  <p className="text-muted-foreground mb-4">{box.description}</p>
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <Link to="/products">
                      Explore Products
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Packaging */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Leaf className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Wrapped in Sustainability
            </h2>
            <p className="text-muted-foreground mb-4">
              Every Earthy Concepts gift arrives in eco-conscious packaging that 
              honours our commitment to the environment. We use recyclable materials, 
              minimal plastics, and natural elements to create presentations that 
              are as beautiful as they are responsible.
            </p>
            <p className="text-muted-foreground">
              When you gift from Earthy Concepts, you gift with a clear conscience—knowing 
              that your gesture of care extends to the planet we all share.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Create Your Perfect Gift
            </h2>
            <p className="text-muted-foreground mb-8">
              Every gift is unique. Share your vision with us, and we'll help you 
              craft a wellness gift that speaks to your occasion and your recipient.
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
          </div>
        </div>
      </section>

      <WhatsAppButton variant="floating" />
    </Layout>
  );
};

export default Gifting;