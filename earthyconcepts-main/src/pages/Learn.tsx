import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ConceptCard } from '@/components/ConceptCard';
import { WellnessQuiz } from '@/components/WellnessQuiz';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { wellnessConcepts } from '@/data/brand';
import { Sparkles, GraduationCap } from 'lucide-react';

const Learn = () => {
  const [activeTab, setActiveTab] = useState('concepts');

  return (
    <Layout>
      {/* Hero Section - Centered with balanced spacing per request #20 */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">Learn & Discover</h1>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
              Explore wellness concepts and find products tailored to your needs
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-xs grid-cols-2">
                <TabsTrigger value="concepts" className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  Concepts
                </TabsTrigger>
                <TabsTrigger value="quiz" className="gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Quiz
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Wellness Concepts Tab */}
            <TabsContent value="concepts" className="space-y-8">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h2 className="text-2xl font-bold mb-3">Wellness Concepts</h2>
                <p className="text-muted-foreground">
                  Explore our curated wellness categories to find products that align with your health goals.
                  Each concept brings together carefully selected herbs and formulations.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {wellnessConcepts.map((concept) => (
                  <ConceptCard key={concept.id} concept={concept} />
                ))}
              </div>
            </TabsContent>

            {/* Wellness Quiz Tab - with subtle animation per request #21 */}
            <TabsContent value="quiz">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.div
                  className="relative"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(var(--primary), 0)",
                      "0 0 20px 5px rgba(var(--primary), 0.1)",
                      "0 0 0 0 rgba(var(--primary), 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <WellnessQuiz />
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <WhatsAppButton variant="floating" />
    </Layout>
  );
};

export default Learn;