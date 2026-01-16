'use client';

import { useState, useEffect } from 'react';
import SuccessStoryCard from './SuccessStoryCard';
import FilterBar from './FilterBar';
import StatsOverview from './StatsOverview';
import ComparisonChart from './ComparisonChart';
import ExpertEndorsements from './ExpertEndorsements';
import MediaCoverage from './MediaCoverage';
import SocialProofSection from './SocialProofSection';
import Icon from '@/components/ui/AppIcon';

interface SuccessStory {
  id: number;
  studentName: string;
  age: number;
  program: string;
  achievement: string;
  beforeDescription: string;
  afterDescription: string;
  image: string;
  alt: string;
  parentName: string;
  parentTestimonial: string;
  metrics: {
    label: string;
    value: string;
  }[];
  videoUrl?: string;
  ageGroup: string;
  category: string;
}

export default function SuccessStoriesInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedAge, setSelectedAge] = useState('All Ages');
  const [selectedProgram, setSelectedProgram] = useState('All Programs');
  const [selectedCategory, setSelectedCategory] = useState('All Achievements');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const successStories: SuccessStory[] = [
    {
      id: 1,
      studentName: 'Aarav Sharma',
      age: 5,
      program: 'Preschool++',
      achievement: 'Ambidextrous Writing Master',
      beforeDescription:
        'Struggled with basic letter recognition and showed reluctance to hold pencils. Limited attention span during learning activities.',
      afterDescription:
        'Now writes fluently with both hands in English and Hindi. Demonstrates exceptional fine motor skills and can write 50+ words independently. Shows enthusiasm for creative writing activities.',
      image: 'https://images.unsplash.com/flagged/photo-1566192215649-67347425f492',
      alt: 'Young Indian boy in blue shirt smiling while writing with both hands at colorful learning desk',
      parentName: 'Priya Sharma',
      parentTestimonial:
        "I never imagined my son could write with both hands at age 5! The GYANHOUZ approach has unlocked abilities we didn't know existed. His confidence has skyrocketed, and he's now teaching his older cousin how to write!",
      metrics: [
        { label: 'Languages Mastered', value: '3' },
        { label: 'Writing Speed', value: '95%' },
        { label: 'Confidence Level', value: '10/10' },
        { label: 'Parent Satisfaction', value: '100%' },
      ],

      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      ageGroup: '2-4 Years',
      category: 'Academic Excellence',
    },
    {
      id: 2,
      studentName: 'Diya Patel',
      age: 8,
      program: 'Career Labs',
      achievement: 'Young Entrepreneur Award Winner',
      beforeDescription:
        'Shy child with limited social interaction. Showed interest in art but lacked confidence to showcase her work publicly.',
      afterDescription:
        'Founded her own greeting card business at age 8. Confidently presents her products at school exhibitions and local markets. Has sold over 200 handmade cards and donates 20% profits to charity.',
      image: 'https://images.unsplash.com/photo-1715443973196-be53e622f90b',
      alt: 'Young girl with long black hair in pink dress proudly displaying handmade greeting cards at colorful market stall',
      parentName: 'Rajesh Patel',
      parentTestimonial:
        "Career Labs didn't just teach my daughter business skills—it transformed her personality. She went from being shy to confidently pitching her ideas to adults. The mentorship she received was invaluable.",
      metrics: [
        { label: 'Products Sold', value: '200+' },
        { label: 'Revenue Generated', value: '₹15K' },
        { label: 'Public Presentations', value: '12' },
        { label: 'Leadership Score', value: '9/10' },
      ],

      ageGroup: '5-8 Years',
      category: 'Leadership',
    },
    {
      id: 3,
      studentName: 'Arjun Reddy',
      age: 12,
      program: 'Science Lab',
      achievement: 'State Science Fair Gold Medalist',
      beforeDescription:
        'Academically strong but lacked practical application skills. Struggled to convert theoretical knowledge into real-world projects.',
      afterDescription:
        'Developed a water purification system using solar energy that won state-level recognition. Now mentors younger students in the Science Lab and has filed for a patent with guidance from GYANHOUZ mentors.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b9bd9048-1765043048613.png',
      alt: 'Teenage boy in white lab coat demonstrating solar-powered water purification prototype at modern science laboratory',
      parentName: 'Lakshmi Reddy',
      parentTestimonial:
        'The Science Lab gave my son the platform to turn his ideas into reality. The access to equipment, mentors, and real-world problem-solving opportunities has prepared him for a future in engineering better than any traditional school could.',
      metrics: [
        { label: 'Patents Filed', value: '1' },
        { label: 'Awards Won', value: '3' },
        { label: 'Students Mentored', value: '15' },
        { label: 'Innovation Score', value: '10/10' },
      ],

      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      ageGroup: '9-12 Years',
      category: 'STEM Innovation',
    },
    {
      id: 4,
      studentName: 'Ananya Singh',
      age: 6,
      program: 'Preschool++',
      achievement: 'Multilingual Communication Champion',
      beforeDescription:
        'Spoke only Hindi at home with limited vocabulary. Parents were concerned about English communication skills for future schooling.',
      afterDescription:
        'Now fluently speaks English, Hindi, and basic Sanskrit. Participates in storytelling competitions and has won 2nd place in inter-school English debate. Reads 20+ books monthly across all three languages.',
      image: 'https://images.unsplash.com/photo-1611641567863-b94481b027a6',
      alt: 'Young girl with braided hair in yellow dress confidently speaking at microphone during school storytelling competition',
      parentName: 'Vikram Singh',
      parentTestimonial:
        "GYANHOUZ's multilingual approach is revolutionary. My daughter not only learned languages but developed a love for communication. She now teaches Sanskrit shlokas to her grandparents!",
      metrics: [
        { label: 'Languages Spoken', value: '3' },
        { label: 'Books Read', value: '240+' },
        { label: 'Competition Wins', value: '5' },
        { label: 'Vocabulary Size', value: '2000+' },
      ],

      ageGroup: '5-8 Years',
      category: 'Academic Excellence',
    },
    {
      id: 5,
      studentName: 'Rohan Mehta',
      age: 14,
      program: 'Career Labs',
      achievement: 'App Developer & Tech Entrepreneur',
      beforeDescription:
        'Spent excessive time on mobile games with no productive output. Parents worried about screen addiction and lack of career direction.',
      afterDescription:
        'Developed 3 educational mobile apps with 10,000+ downloads. Started a tech club at school teaching coding to peers. Received mentorship from industry professionals through GYANHOUZ network and is now planning his startup.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d12652ed-1767090828257.png',
      alt: 'Teenage boy in casual attire presenting mobile app interface on large screen to engaged audience in modern tech workspace',
      parentName: 'Neha Mehta',
      parentTestimonial:
        "Career Labs channeled my son's screen time into productive learning. He went from being a consumer to a creator. The industry mentorship he received opened doors we never knew existed for a 14-year-old.",
      metrics: [
        { label: 'Apps Developed', value: '3' },
        { label: 'Total Downloads', value: '10K+' },
        { label: 'Students Taught', value: '50+' },
        { label: 'Industry Connections', value: '25' },
      ],

      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      ageGroup: '13-16 Years',
      category: 'STEM Innovation',
    },
    {
      id: 6,
      studentName: 'Kavya Iyer',
      age: 10,
      program: 'Skills Development',
      achievement: 'Classical Dance & Academic Excellence',
      beforeDescription:
        'Struggled to balance academics with extracurricular interests. Often felt overwhelmed and stressed about time management.',
      afterDescription:
        "Achieved 95% in academics while performing in 8 classical dance shows. Won district-level Bharatanatyam competition and maintains straight A's. Developed exceptional time management and discipline skills.",
      image: 'https://images.unsplash.com/photo-1719767507634-40a8559391bc',
      alt: 'Young girl in traditional orange Bharatanatyam costume performing graceful dance pose on decorated stage with confident expression',
      parentName: 'Suresh Iyer',
      parentTestimonial:
        "GYANHOUZ taught my daughter that excellence in one area doesn't mean sacrificing another. The holistic development approach helped her excel in both academics and arts—something traditional schools said was impossible.",
      metrics: [
        { label: 'Academic Score', value: '95%' },
        { label: 'Performances', value: '8' },
        { label: 'Awards Won', value: '4' },
        { label: 'Balance Score', value: '10/10' },
      ],

      ageGroup: '9-12 Years',
      category: 'Creative Arts',
    },
  ];

  const overviewStats = [
    {
      icon: 'AcademicCapIcon',
      value: '500+',
      label: 'Success Stories',
      description: 'Documented transformations across all programs',
    },
    {
      icon: 'TrophyIcon',
      value: '95%',
      label: 'Achievement Rate',
      description: 'Students exceeding traditional education benchmarks',
    },
    {
      icon: 'UserGroupIcon',
      value: '98%',
      label: 'Parent Satisfaction',
      description: 'Would recommend GYANHOUZ to other families',
    },
    {
      icon: 'SparklesIcon',
      value: '3.5x',
      label: 'Skill Advantage',
      description: 'Faster skill development vs traditional methods',
    },
  ];

  const comparisonData = [
    { category: 'Creativity', gyanhouz: 92, traditional: 58 },
    { category: 'Practical Skills', gyanhouz: 88, traditional: 45 },
    { category: 'Confidence', gyanhouz: 90, traditional: 62 },
    { category: 'Problem Solving', gyanhouz: 85, traditional: 55 },
    { category: 'Leadership', gyanhouz: 87, traditional: 48 },
  ];

  const expertEndorsements = [
    {
      id: 1,
      name: 'Dr. Meera Krishnan',
      title: 'Child Development Specialist',
      organization: 'National Institute of Child Education',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e28e55d5-1763299022307.png',
      alt: 'Professional woman with glasses in blue blazer smiling warmly in modern office setting',
      testimonial:
        "GYANHOUZ\'s integrated approach addresses the critical gap in Indian education. Their focus on practical skills alongside academics creates well-rounded individuals prepared for the 21st century. The results I\'ve observed are remarkable.",
    },
    {
      id: 2,
      name: 'Prof. Rajiv Malhotra',
      title: 'Education Innovation Researcher',
      organization: 'Indian Institute of Technology, Mumbai',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_117a90578-1763295683336.png',
      alt: 'Distinguished professor in formal attire with warm smile in university library setting',
      testimonial:
        "The ecosystem model GYANHOUZ has created is what India's education system desperately needs. By connecting preschool through career discovery, they're building a foundation for lifelong learning that traditional schools simply cannot match.",
    },
    {
      id: 3,
      name: 'Ms. Anjali Deshmukh',
      title: 'Former Principal & Education Consultant',
      organization: 'Progressive Schools Network',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f38d0cd9-1766862152198.png',
      alt: 'Experienced educator in professional attire with confident expression in bright classroom environment',
      testimonial:
        'Having spent 30 years in traditional education, I can confidently say GYANHOUZ is revolutionizing how we think about child development. The measurable outcomes in confidence, creativity, and practical skills are unprecedented.',
    },
    {
      id: 4,
      name: 'Mr. Karthik Subramanian',
      title: 'Tech Industry Leader & Mentor',
      organization: 'Innovation Mentors India',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_19e9497eb-1763293691311.png',
      alt: 'Tech professional in casual business attire with friendly smile in modern startup office',
      testimonial:
        "As someone who mentors GYANHOUZ students, I'm amazed by their problem-solving abilities and entrepreneurial mindset. These children are developing skills at 12-14 that most people don't acquire until their 20s.",
    },
  ];

  const mediaCoverage = [
    {
      id: 1,
      outlet: 'The Times of India',
      headline: "GYANHOUZ: Redefining Education for India\'s Future",
      date: 'December 15, 2025',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_149fb2816-1768066552042.png',
      alt: 'Newspaper headline featuring GYANHOUZ education innovation story with colorful classroom photos',
      url: '#',
    },
    {
      id: 2,
      outlet: 'Education Today Magazine',
      headline: "How One Learning Hub is Solving India\'s Education Crisis",
      date: 'November 28, 2025',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1dab94b54-1768066552776.png',
      alt: 'Magazine cover showing innovative classroom with students engaged in hands-on learning activities',
      url: '#',
    },
    {
      id: 3,
      outlet: 'Business Standard',
      headline: 'GYANHOUZ Franchise Model: A Win-Win for Education & Business',
      date: 'October 10, 2025',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_169dca742-1768066551908.png',
      alt: 'Business newspaper featuring GYANHOUZ franchise success story with growth charts and testimonials',
      url: '#',
    },
  ];

  const socialPosts = [
    {
      id: 1,
      platform: 'Facebook',
      author: 'Sneha Kapoor',
      content:
        "My daughter\'s transformation at GYANHOUZ has been nothing short of miraculous! From a shy 4-year-old to a confident multilingual speaker in just 8 months. Every parent in Mumbai needs to know about this place! 🌟",
      likes: 342,
      shares: 89,
      date: 'January 5, 2026',
    },
    {
      id: 2,
      platform: 'Instagram',
      author: 'Amit Verma',
      content:
        "Just watched my 12-year-old son present his innovation project to industry experts. This is what education should look like! Thank you GYANHOUZ for believing in our children\'s potential. 🚀 #FutureReady #ProudParent",
      likes: 567,
      shares: 123,
      date: 'December 28, 2025',
    },
    {
      id: 3,
      platform: 'Twitter',
      author: 'Priya Nair',
      content:
        "If you're looking for a preschool that actually prepares your child for the future (not just the next grade), GYANHOUZ is IT. My son writes with both hands, speaks 3 languages, and loves learning. Worth every rupee! 💯",
      likes: 891,
      shares: 234,
      date: 'December 20, 2025',
    },
    {
      id: 4,
      platform: 'LinkedIn',
      author: 'Rahul Gupta',
      content:
        "As an entrepreneur, I'm impressed by the business acumen my 14-year-old daughter has developed through GYANHOUZ Career Labs. She's already planning her startup with more clarity than some adults I know. This is the education revolution India needs.",
      likes: 1203,
      shares: 456,
      date: 'January 2, 2026',
    },
  ];

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-3/4 mx-auto" />
            <div className="h-64 bg-muted rounded" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-muted rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const filteredStories = successStories.filter((story) => {
    const ageMatch = selectedAge === 'All Ages' || story.ageGroup === selectedAge;
    const programMatch = selectedProgram === 'All Programs' || story.program === selectedProgram;
    const categoryMatch =
      selectedCategory === 'All Achievements' || story.category === selectedCategory;
    return ageMatch && programMatch && categoryMatch;
  });

  return (
    <div className="space-y-16">
      <StatsOverview stats={overviewStats} />

      <FilterBar
        selectedAge={selectedAge}
        selectedProgram={selectedProgram}
        selectedCategory={selectedCategory}
        onAgeChange={setSelectedAge}
        onProgramChange={setSelectedProgram}
        onCategoryChange={setSelectedCategory}
      />

      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground font-poppins">
            Transformation Stories
          </h2>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Icon name="DocumentTextIcon" size={20} />
            <span className="text-sm font-source">
              {filteredStories.length} {filteredStories.length === 1 ? 'story' : 'stories'} found
            </span>
          </div>
        </div>

        {filteredStories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <SuccessStoryCard key={story.id} story={story} />
            ))}
          </div>
        ) : (
          <div className="bg-card rounded-xl shadow-subtle p-12 text-center">
            <Icon name="MagnifyingGlassIcon" size={48} className="text-muted mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground font-poppins mb-2">
              No Stories Found
            </h3>
            <p className="text-muted-foreground font-source">
              Try adjusting your filters to see more success stories
            </p>
          </div>
        )}
      </div>

      <ComparisonChart data={comparisonData} />

      <ExpertEndorsements experts={expertEndorsements} />

      <MediaCoverage mediaItems={mediaCoverage} />

      <SocialProofSection posts={socialPosts} />

      <div className="bg-gradient-to-br from-primary to-brand-orange rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold text-white font-poppins mb-4">
          Ready to Write Your Child's Success Story?
        </h2>
        <p className="text-lg text-white/90 font-source mb-8 max-w-2xl mx-auto">
          Join 500+ families who have transformed their children's educational journey with
          GYANHOUZ's revolutionary ecosystem approach.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="/contact-and-admissions"
            className="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-white/90 transition-all duration-300 shadow-elevated hover:shadow-lg font-nunito inline-flex items-center space-x-2"
          >
            <span>Start Your Journey</span>
            <Icon name="ArrowRightIcon" size={20} />
          </a>
          <a
            href="/preschool-program"
            className="px-8 py-4 bg-white/10 text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 font-nunito"
          >
            Explore Programs
          </a>
        </div>
      </div>
    </div>
  );
}
