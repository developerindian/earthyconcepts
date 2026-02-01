import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Heart, Sparkles, Globe, Users } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { qualityPromises } from '@/data/brand';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-8 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Created from a deep need to be responsible—to ourselves, to our communities, 
              and to the planet—Earthy Concepts stands for all things natural, intentional, 
              and conscious.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-10">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-5">
            <p className="text-lg leading-relaxed">
              Rooted in time-honored traditions and reimagined through modern innovation, 
              we draw exclusively from the earth's natural resources to create thoughtful 
              solutions for health, skincare, clothing, home, and everyday living. Each offering 
              reflects a harmonious blend of indigenous knowledge systems and mindful design, 
              supporting a lifestyle that is cleaner, more balanced, and deeply connected to nature.
            </p>
            <p className="text-lg leading-relaxed">
              At Earthy Concepts, we believe that the choices we make every day shape the world 
              we live in. Our purpose-driven approach to clean beauty, holistic wellness, and 
              conscious lifestyle essentials goes beyond products—they are tools for living with 
              awareness, integrity, and intention. Designed for modern lives in a fast-moving, 
              often frugal world, our creations empower you to care for yourself while honoring 
              the earth.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 py-3 my-6">
              <p className="text-2xl font-display italic text-foreground">
                "We invite you to be part of a movement that values authenticity over excess, 
                mindfulness over convenience, and sustainability over compromise."
              </p>
            </blockquote>
            <p className="text-lg leading-relaxed text-primary font-medium">
              Together, as conscious citizens, we can create a future that respects Mother Earth, 
              nurtures wellbeing, and uplifts the human spirit.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Promise */}
      <section className="py-10 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Nature's Promise. Formulated for Life.
            </h2>
            <p className="text-muted-foreground">
              Dedicated to bringing the ancient wisdom of Ayurveda into modern wellness, 
              we craft herbal formulations rooted in nature and science.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
            {qualityPromises.map((promise, index) => (
              <div key={index} className="text-center p-3 bg-background rounded-xl">
                <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <h5 className="font-medium text-sm mb-1">{promise.title}</h5>
                <p className="text-xs text-muted-foreground">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              The principles that shape every decision we make.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-background p-6 rounded-xl shadow-sm">
              <Leaf className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Purity First</h3>
              <p className="text-sm text-muted-foreground">
                Only the highest quality ingredients, free from synthetic additives, fillers, or harmful chemicals.
              </p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm">
              <Heart className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Rooted in Tradition</h3>
              <p className="text-sm text-muted-foreground">
                Formulations inspired by centuries-old Ayurvedic texts, adapted for contemporary wellness.
              </p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm">
              <Globe className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Sustainable Sourcing</h3>
              <p className="text-sm text-muted-foreground">
                Partnering with ethical farmers committed to environmental stewardship and fair trade.
              </p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm">
              <Sparkles className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Full Transparency</h3>
              <p className="text-sm text-muted-foreground">
                From origins to manufacturing, you deserve to know exactly what goes in your body.
              </p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm">
              <Shield className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Science-Backed Efficacy</h3>
              <p className="text-sm text-muted-foreground">
                Embracing modern research to validate benefits and ensure optimal bioavailability.
              </p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Holistic Wellness</h3>
              <p className="text-sm text-muted-foreground">
                Addressing internal health, external beauty, and emotional balance for complete well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Embrace Rituals Rooted in Nature
            </h2>
            <p className="text-lg opacity-90">
              Choose a Life of Clarity, Balance, & Purpose.<br />
              Live Consciously. Live Authentically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <Link to="/products">
                  <Leaf className="h-5 w-5" />
                  Explore Products
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton variant="floating" />
    </Layout>
  );
};

export default About;