import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { quizQuestions, wellnessConcepts } from '@/data/brand';
import { getProductById } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { ArrowRight, ArrowLeft, RotateCcw, Sparkles } from 'lucide-react';

export const WellnessQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  // Calculate recommended concepts based on answers
  const getRecommendedConcepts = () => {
    const conceptScores: Record<string, number> = {};

    answers.forEach((answerIndex, questionIndex) => {
      const question = quizQuestions[questionIndex];
      const selectedOption = question.options[answerIndex];

      if (selectedOption?.concepts) {
        selectedOption.concepts.forEach((conceptId) => {
          conceptScores[conceptId] = (conceptScores[conceptId] || 0) + 1;
        });
      }
    });

    // Sort concepts by score and return top 3
    return Object.entries(conceptScores)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([conceptId]) => wellnessConcepts.find((c) => c.id === conceptId))
      .filter(Boolean);
  };

  // Get recommended products from top concepts
  const getRecommendedProducts = () => {
    const recommendedConcepts = getRecommendedConcepts();
    const productIds = new Set<string>();

    recommendedConcepts.forEach((concept) => {
      if (concept) {
        concept.relatedProducts.slice(0, 2).forEach((id) => productIds.add(id));
      }
    });

    return Array.from(productIds)
      .map((id) => getProductById(id))
      .filter(Boolean)
      .slice(0, 6);
  };

  if (showResults) {
    const recommendedConcepts = getRecommendedConcepts();
    const recommendedProducts = getRecommendedProducts();

    return (
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Results Header */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Your Wellness Profile</h2>
          <p className="text-muted-foreground">
            Based on your answers, here are your personalized recommendations
          </p>
        </div>

        {/* Recommended Concepts */}
        <div>
          <h3 className="font-semibold mb-4">Your Top Wellness Focus Areas</h3>
          <div className="flex flex-wrap gap-3">
            {recommendedConcepts.map((concept) =>
              concept ? (
                <Link key={concept.id} to={`/learn/${concept.id}`}>
                  <Badge
                    variant="secondary"
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  >
                    {concept.name}
                  </Badge>
                </Link>
              ) : null
            )}
          </div>
        </div>

        {/* Recommended Products */}
        <div>
          <h3 className="font-semibold mb-4">Recommended Products For You</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedProducts.map((product) =>
              product ? <ProductCard key={product.id} product={product} /> : null
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" onClick={handleRestart} className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Retake Quiz
          </Button>
          <Button asChild>
            <Link to="/products">Browse All Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-6">{question.question}</h3>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all hover:border-primary hover:bg-primary/5 ${
                  answers[currentQuestion] === index
                    ? 'border-primary bg-primary/10'
                    : 'border-border'
                }`}
              >
                {option.text}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="ghost"
          onClick={handleBack}
          disabled={currentQuestion === 0}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>

        {answers[currentQuestion] !== undefined && currentQuestion < quizQuestions.length - 1 && (
          <Button
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            className="gap-2"
          >
            Next
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};
