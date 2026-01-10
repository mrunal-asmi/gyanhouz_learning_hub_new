'use client';

import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface ScienceOutcomesSectionProps {
  onEnrollClick: () => void;
}

interface Outcome {
  metric: string;
  description: string;
  icon: string;
}

interface StudentSuccess {
  studentName: string;
  grade: string;
  achievement: string;
  quote: string;
  image: string;
  alt: string;
}

export default function ScienceOutcomesSection({ onEnrollClick }: ScienceOutcomesSectionProps) {
  const outcomes: Outcome[] = [
  { metric: '40% Better Scores', description: 'Average improvement in science board exam marks', icon: 'ChartBarIcon' },
  { metric: '95% Concept Clarity', description: 'Students report complete understanding of topics', icon: 'LightBulbIcon' },
  { metric: '100% Practical Skills', description: 'Every student performs all experiments personally', icon: 'HandRaisedIcon' },
  { metric: '85% Science Interest', description: 'Students develop genuine passion for science', icon: 'HeartIcon' }];


  const studentSuccesses: StudentSuccess[] = [
  {
    studentName: 'Priya Menon',
    grade: '10th Grade',
    achievement: 'Scored 98/100 in Science Board Exam',
    quote: 'I used to fear chemistry practicals. After GYANHOUZ labs, I scored full marks in practicals and understood every concept deeply.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13f76e454-1765037339210.png",
    alt: 'Smiling Indian girl Priya in school uniform holding science trophy and certificate'
  },
  {
    studentName: 'Rohan Kumar',
    grade: '9th Grade',
    achievement: 'Won State Science Exhibition',
    quote: 'The experiment skills I learned here helped me win the state-level science fair. My project on renewable energy impressed all judges!',
    image: "https://images.unsplash.com/photo-1708632127174-4ecd34172c0e",
    alt: 'Confident Indian boy Rohan presenting science project with solar panel model'
  },
  {
    studentName: 'Ananya Singh',
    grade: '8th Grade',
    achievement: 'From 65% to 92% in One Year',
    quote: 'Science was my weakest subject. Now it\'s my favorite! Understanding through experiments made all the difference.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_191736499-1764693574173.png",
    alt: 'Happy Indian girl Ananya conducting chemistry experiment with colorful solutions'
  }];


  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-green/10 px-4 py-2 rounded-full mb-4">
            <Icon name="TrophyIcon" size={20} className="text-brand-green" />
            <span className="text-sm font-semibold text-brand-green">Measurable Results</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Real Results in
            <span className="block text-brand-green">Board Exams & Beyond</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our hands-on approach translates directly to better exam performance and deeper understanding
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {outcomes.map((outcome, index) =>
          <div key={index} className="bg-card rounded-xl p-6 border border-border hover:border-brand-green/30 hover:shadow-lg transition-smooth">
              <Icon name={outcome.icon} size={40} className="text-brand-green mb-4" />
              <div className="text-2xl font-bold text-foreground mb-2">{outcome.metric}</div>
              <p className="text-sm text-muted-foreground">{outcome.description}</p>
            </div>
          )}
        </div>

        {/* Student Success Stories */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-8">
            Real Students, Real Improvements
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {studentSuccesses.map((student, index) =>
            <div key={index} className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-smooth">
                <div className="relative h-48">
                  <AppImage
                  src={student.image}
                  alt={student.alt}
                  className="w-full h-full object-cover" />

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="text-white font-bold">{student.studentName}</div>
                    <div className="text-white/80 text-sm">{student.grade}</div>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="inline-block bg-brand-green/10 text-brand-green text-xs font-semibold px-3 py-1 rounded-full">
                    {student.achievement}
                  </div>
                  <p className="text-sm text-muted-foreground italic">"{student.quote}"</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Critical for Board Exams */}
        <div className="mt-16 bg-gradient-to-r from-brand-red to-brand-orange rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-4xl font-bold mb-4">
              Critical for 8th-10th Grade Board Exam Success
            </h3>
            <p className="text-lg max-w-2xl mx-auto">
              Practical marks account for 30% of total science score. Don't let your child lose marks due to poor lab skills.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">30%</div>
              <div className="text-sm">Practical Marks in Board Exams</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm">Mandatory Experiments</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm">Hands-On Practice Here</div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onEnrollClick}
              className="px-8 py-4 bg-white text-brand-orange font-bold text-lg rounded-lg shadow-xl hover:scale-105 transition-smooth">

              Secure Your Lab Slot Now
            </button>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <Icon name="FireIcon" size={20} className="animate-pulse" />
              <span className="text-sm font-semibold">Limited slots for board exam students</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}