'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface AssessmentQuestion {
  id: number;
  question: string;
  options: string[];
}

interface CareerAssessmentSectionProps {
  className?: string;
}

const CareerAssessmentSection = ({ className = '' }: CareerAssessmentSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const questions: AssessmentQuestion[] = [
    {
      id: 1,
      question: 'What type of activities does your child enjoy most?',
      options: [
        'Building and creating things',
        'Solving puzzles and problems',
        'Helping and caring for others',
        'Performing and expressing creativity',
      ],
    },
    {
      id: 2,
      question: 'Which subject does your child excel in?',
      options: [
        'Mathematics and Logic',
        'Science and Technology',
        'Arts and Humanities',
        'Sports and Physical Activities',
      ],
    },
    {
      id: 3,
      question: 'How does your child prefer to spend free time?',
      options: [
        'Reading and learning new things',
        'Playing with gadgets and technology',
        'Socializing with friends',
        'Outdoor activities and exploration',
      ],
    },
  ];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: answer });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    return (
      <section
        className={`py-16 lg:py-24 bg-gradient-to-br from-primary to-brand-orange ${className}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-elevated p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCircleIcon" size={48} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4 font-poppins">
                Assessment Complete!
              </h3>
              <p className="text-lg text-muted-foreground font-source">
                Based on your responses, we recommend exploring these career pathways:
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-muted rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Icon name="CpuChipIcon" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground font-poppins">
                      Technology & Innovation
                    </h4>
                    <p className="text-sm text-muted-foreground font-source">95% Match</p>
                  </div>
                </div>
                <p className="text-sm text-foreground font-source">
                  Your child shows strong aptitude for problem-solving and logical thinking, perfect
                  for careers in software development, AI, and robotics.
                </p>
              </div>

              <div className="bg-muted rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Icon name="PaintBrushIcon" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground font-poppins">
                      Creative Arts & Design
                    </h4>
                    <p className="text-sm text-muted-foreground font-source">82% Match</p>
                  </div>
                </div>
                <p className="text-sm text-foreground font-source">
                  Creative expression and artistic abilities indicate potential in graphic design,
                  animation, and digital content creation.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleRestart}
                className="flex-1 px-6 py-3 bg-muted hover:bg-muted/80 text-foreground rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 font-nunito"
              >
                <Icon name="ArrowPathIcon" size={20} />
                <span>Retake Assessment</span>
              </button>
              <button className="flex-1 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 font-nunito">
                <Icon name="CalendarIcon" size={20} />
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`py-16 lg:py-24 bg-gradient-to-br from-primary to-brand-orange ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Icon name="ClipboardDocumentCheckIcon" size={20} className="text-white" />
              <span className="text-sm font-semibold text-white font-source">
                Free Career Assessment
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-poppins">
              Discover Your Child's Career Potential
            </h2>
            <p className="text-lg text-white/90 font-source">
              Take our quick 3-minute assessment to get personalized career pathway recommendations
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-elevated p-8 lg:p-12">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-muted-foreground font-source">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-semibold text-primary font-source">
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-primary to-brand-orange h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-poppins">
                {questions[currentQuestion].question}
              </h3>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left font-source ${
                      selectedAnswers[currentQuestion] === option
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50 hover:bg-muted'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          selectedAnswers[currentQuestion] === option
                            ? 'border-primary bg-primary'
                            : 'border-border'
                        }`}
                      >
                        {selectedAnswers[currentQuestion] === option && (
                          <Icon name="CheckIcon" size={16} className="text-white" />
                        )}
                      </div>
                      <span className="text-foreground">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="px-6 py-3 bg-muted hover:bg-muted/80 text-foreground rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 font-nunito"
              >
                <Icon name="ChevronLeftIcon" size={20} />
                <span>Previous</span>
              </button>
              <button
                onClick={handleNext}
                disabled={!selectedAnswers[currentQuestion]}
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 font-nunito"
              >
                <span>{currentQuestion === questions.length - 1 ? 'View Results' : 'Next'}</span>
                <Icon name="ChevronRightIcon" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerAssessmentSection;
