import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, BookOpen, Leaf, Heart, Sparkles, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Blog posts based on wellness concepts from the brochure
const blogPosts = [
  {
    id: 'boost-immunity-naturally',
    title: 'Boost Your Immunity Naturally with Ayurveda',
    excerpt: 'Discover how ancient Ayurvedic herbs like Amla, Tulsi, and Giloy can strengthen your body\'s natural defenses.',
    category: 'Immunity',
    readTime: '5 min read',
    icon: Leaf,
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
  },
  {
    id: 'stress-relief-herbs',
    title: 'Finding Calm: Herbs for Stress & Better Sleep',
    excerpt: 'Ashwagandha, Brahmi, and Jatamansi - your natural allies for stress management and restful nights.',
    category: 'Stress & Sleep',
    readTime: '4 min read',
    icon: Moon,
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-50 to-purple-50',
  },
  {
    id: 'digestive-wellness',
    title: 'The Ayurvedic Guide to Digestive Wellness',
    excerpt: 'Learn how digestive health is the foundation of overall wellness according to Ayurvedic principles.',
    category: 'Digestive Health',
    readTime: '6 min read',
    icon: Heart,
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50',
  },
  {
    id: 'natural-skincare-rituals',
    title: 'Natural Skincare: Ubtans & Herbal Beauty',
    excerpt: 'Explore the tradition of ubtan face masks and natural skincare rituals for radiant, healthy skin.',
    category: 'Skin & Beauty',
    readTime: '5 min read',
    icon: Sparkles,
    gradient: 'from-rose-500 to-pink-500',
    bgGradient: 'from-rose-50 to-pink-50',
  },
];

export const BlogSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            Wellness Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Our <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Wellness Blog</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover the wisdom of Ayurveda and natural wellness through our curated articles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`group h-full border-0 bg-gradient-to-br ${post.bgGradient} hover:shadow-xl transition-all duration-500 overflow-hidden`}>
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Icon */}
                  <motion.div 
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${post.gradient} flex items-center justify-center mb-5 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <post.icon className="h-7 w-7 text-white" />
                  </motion.div>

                  {/* Category & Read Time */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r ${post.gradient} text-white`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link 
                    to="/learn" 
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button asChild variant="outline" className="gap-2 border-2 px-8">
            <Link to="/learn">
              <BookOpen className="h-4 w-4" />
              Explore All Articles
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
