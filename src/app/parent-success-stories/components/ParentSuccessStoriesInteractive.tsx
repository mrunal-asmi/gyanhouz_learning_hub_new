'use client';

import { useState, useEffect } from 'react';
import StoryFilters from './StoryFilters';
import VideoTestimonialCard from './VideoTestimonialCard';
import TransformationSlider from './TransformationSlider';
import AchievementGallery from './AchievementGallery';
import SuccessMetricsDashboard from './SuccessMetricsDashboard';
import Icon from '@/components/ui/AppIcon';

interface FilterState {
  ageGroup: string;
  programType: string;
  searchQuery: string;
}

interface VideoTestimonial {
  id: number;
  parentName: string;
  childName: string;
  childAge: number;
  program: string;
  thumbnail: string;
  thumbnailAlt: string;
  videoUrl: string;
  duration: string;
  testimonialPreview: string;
  achievement: string;
  location: string;
  ageGroup: string;
  programType: string;
}

interface Transformation {
  id: number;
  childName: string;
  age: number;
  program: string;
  beforeImage: string;
  beforeImageAlt: string;
  afterImage: string;
  afterImageAlt: string;
  beforeDescription: string;
  afterDescription: string;
  timeframe: string;
  keyImprovements: string[];
  ageGroup: string;
  programType: string;
}

interface Achievement {
  id: number;
  childName: string;
  age: number;
  projectTitle: string;
  projectImage: string;
  projectImageAlt: string;
  category: string;
  description: string;
  skills: string[];
  date: string;
  ageGroup: string;
  programType: string;
}

interface Metric {
  id: number;
  label: string;
  value: string;
  icon: string;
  color: string;
  bgColor: string;
}

const ParentSuccessStoriesInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState<'videos' | 'transformations' | 'achievements'>(
    'videos'
  );
  const [filters, setFilters] = useState<FilterState>({
    ageGroup: 'all',
    programType: 'all',
    searchQuery: '',
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const videoTestimonials: VideoTestimonial[] = [
    {
      id: 1,
      parentName: 'Priya Sharma',
      childName: 'Aarav Sharma',
      childAge: 5,
      program: 'Preschool Foundation',
      thumbnail:
        'https://img.rocket.new/generatedImages/rocket_gen_img_149ddede3-1765121383698.png',
      thumbnailAlt:
        'Young Indian boy with short black hair smiling confidently in bright classroom with colorful learning materials',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '3:45',
      testimonialPreview:
        'Aarav was shy and hesitant to speak. Within 6 months at GYANHOUZ, he became confident, curious, and started asking questions about everything. His transformation has been remarkable.',
      achievement: 'Confidence Builder',
      location: 'Mumbai',
      ageGroup: '4-6',
      programType: 'preschool',
    },
    {
      id: 2,
      parentName: 'Rajesh Kumar',
      childName: 'Ananya Kumar',
      childAge: 8,
      program: 'Science Labs',
      thumbnail:
        'https://img.rocket.new/generatedImages/rocket_gen_img_16b20fd38-1764686331200.png',
      thumbnailAlt:
        'Young Indian girl with long black hair in ponytail working on robotics project with electronic components on desk',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '4:20',
      testimonialPreview:
        'Ananya built her first robot at GYANHOUZ. She went from being afraid of technology to creating her own innovations. The hands-on learning approach changed everything.',
      achievement: 'Young Innovator',
      location: 'Bangalore',
      ageGroup: '6-10',
      programType: 'innovation',
    },
    {
      id: 3,
      parentName: 'Meera Patel',
      childName: 'Rohan Patel',
      childAge: 4,
      program: 'Preschool Foundation',
      thumbnail:
        'https://img.rocket.new/generatedImages/rocket_gen_img_1e8f07571-1764661581736.png',
      thumbnailAlt:
        'Young Indian boy with curly black hair engaged in hands-on science experiment with colorful liquids in test tubes',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '2:55',
      testimonialPreview:
        'Rohan struggled with basic concepts. GYANHOUZ made learning fun through play. Now he loves math and science, and his academic performance has improved dramatically.',
      achievement: 'Academic Excellence',
      location: 'Delhi',
      ageGroup: '2-4',
      programType: 'preschool',
    },
    {
      id: 4,
      parentName: 'Amit Verma',
      childName: 'Ishaan Verma',
      childAge: 7,
      program: 'School of Creativity',
      thumbnail:
        'https://img.rocket.new/generatedImages/rocket_gen_img_12acdfd3e-1763295869310.png',
      thumbnailAlt:
        'Young Indian boy with short black hair painting on large canvas with bright colors in art studio',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '3:30',
      testimonialPreview:
        'Ishaan discovered his passion for art at GYANHOUZ. The creative environment helped him express himself and develop unique problem-solving skills.',
      achievement: 'Creative Thinker',
      location: 'Pune',
      ageGroup: '6-10',
      programType: 'creativity',
    },
    {
      id: 5,
      parentName: 'Sneha Reddy',
      childName: 'Diya Reddy',
      childAge: 9,
      program: 'Career Discovery',
      thumbnail:
        'https://img.rocket.new/generatedImages/rocket_gen_img_1d8fb08bc-1764659821764.png',
      thumbnailAlt:
        'Young Indian girl with long black hair in lab coat conducting science experiment with microscope in modern laboratory',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '4:10',
      testimonialPreview:
        'Diya explored multiple career paths through GYANHOUZ programs. She found her passion for medicine and now has clear goals for her future.',
      achievement: 'Career Clarity',
      location: 'Hyderabad',
      ageGroup: '6-10',
      programType: 'career',
    },
    {
      id: 6,
      parentName: 'Vikram Singh',
      childName: 'Arjun Singh',
      childAge: 6,
      program: 'Science Labs',
      thumbnail:
        'https://img.rocket.new/generatedImages/rocket_gen_img_12acdfd3e-1763295869310.png',
      thumbnailAlt:
        'Young Indian boy with short black hair building structure with colorful blocks and engineering tools',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '3:15',
      testimonialPreview:
        'Arjun learned coding and robotics at age 6. The practical approach to STEM education has given him skills far beyond his age group.',
      achievement: 'Tech Prodigy',
      location: 'Chennai',
      ageGroup: '6-10',
      programType: 'innovation',
    },
  ];

  const transformations: Transformation[] = [
    {
      id: 1,
      childName: 'Kavya Nair',
      age: 5,
      program: 'Preschool Foundation',
      beforeImage:
        'https://img.rocket.new/generatedImages/rocket_gen_img_147794430-1763300922986.png',
      beforeImageAlt:
        'Young Indian girl with long black hair looking shy and withdrawn sitting alone at desk in classroom',
      afterImage:
        'https://img.rocket.new/generatedImages/rocket_gen_img_149ddede3-1765121383698.png',
      afterImageAlt:
        'Same young Indian girl now smiling confidently presenting project to classmates with raised hand',
      beforeDescription:
        'Kavya was extremely shy, avoided eye contact, and refused to participate in group activities.',
      afterDescription:
        'Now she leads group projects, presents confidently, and has become a natural leader among peers.',
      timeframe: '8 Months',
      keyImprovements: ['Confidence', 'Communication', 'Leadership', 'Social Skills'],
      ageGroup: '4-6',
      programType: 'preschool',
    },
    {
      id: 2,
      childName: 'Aditya Gupta',
      age: 7,
      program: 'Science Labs',
      beforeImage:
        'https://img.rocket.new/generatedImages/rocket_gen_img_155999e5d-1766048603574.png',
      beforeImageAlt:
        'Young Indian boy with short black hair looking confused at textbook with frustrated expression',
      afterImage:
        'https://img.rocket.new/generatedImages/rocket_gen_img_16333215f-1765104184849.png',
      afterImageAlt:
        'Same boy now enthusiastically working on robotics project with focused concentration and smile',
      beforeDescription:
        'Struggled with abstract concepts, showed no interest in STEM subjects, and had poor problem-solving skills.',
      afterDescription:
        'Built multiple working robots, excels in logical thinking, and actively participates in science competitions.',
      timeframe: '10 Months',
      keyImprovements: ['STEM Skills', 'Problem Solving', 'Critical Thinking', 'Innovation'],
      ageGroup: '6-10',
      programType: 'innovation',
    },
    {
      id: 3,
      childName: 'Siya Malhotra',
      age: 4,
      program: 'Preschool Foundation',
      beforeImage:
        'https://img.rocket.new/generatedImages/rocket_gen_img_149ddede3-1765121383698.png',
      beforeImageAlt:
        'Young Indian girl with short black hair sitting quietly alone looking at floor with sad expression',
      afterImage:
        'https://img.rocket.new/generatedImages/rocket_gen_img_1ccb67141-1764910375532.png',
      afterImageAlt:
        'Same girl now actively engaged in colorful hands-on learning activity with bright smile',
      beforeDescription:
        'Had difficulty focusing, showed no interest in learning activities, and struggled with basic concepts.',
      afterDescription:
        'Actively engages in all activities, shows curiosity about everything, and has developed strong foundational skills.',
      timeframe: '6 Months',
      keyImprovements: ['Focus', 'Curiosity', 'Learning Enthusiasm', 'Academic Skills'],
      ageGroup: '2-4',
      programType: 'preschool',
    },
  ];

  const achievements: Achievement[] = [
    {
      id: 1,
      childName: 'Riya Kapoor',
      age: 8,
      projectTitle: 'Solar-Powered Water Purifier',
      projectImage:
        'https://img.rocket.new/generatedImages/rocket_gen_img_1b9bd9048-1765043048613.png',
      projectImageAlt:
        'Young Indian girl with long black hair in lab coat presenting solar-powered water purification device with diagrams',
      category: 'Science Innovation',
      description:
        'Designed and built a working solar-powered water purification system to help communities with clean water access. The project won first place in the regional science fair.',
      skills: ['Engineering', 'Environmental Science', 'Problem Solving', 'Presentation'],
      date: 'November 2025',
      ageGroup: '6-10',
      programType: 'innovation',
    },
    {
      id: 2,
      childName: 'Kabir Joshi',
      age: 9,
      projectTitle: 'Smart Traffic Management System',
      projectImage:
        'https://img.rocket.new/generatedImages/rocket_gen_img_12acdfd3e-1763295869310.png',
      projectImageAlt:
        'Young Indian boy with short black hair demonstrating electronic traffic control system with LED lights and sensors',
      category: 'Robotics',
      description:
        'Created an automated traffic management system using sensors and Arduino to optimize traffic flow. The project was featured in local news.',
      skills: ['Coding', 'Electronics', 'Robotics', 'Urban Planning'],
      date: 'October 2025',
      ageGroup: '6-10',
      programType: 'innovation',
    },
    {
      id: 3,
      childName: 'Myra Shah',
      age: 7,
      projectTitle: 'Eco-Friendly Art Installation',
      projectImage:
        'https://img.rocket.new/generatedImages/rocket_gen_img_149ddede3-1765121383698.png',
      projectImageAlt:
        'Young Indian girl with long black hair standing next to large colorful art installation made from recycled materials',
      category: 'Creative Arts',
      description:
        'Designed a large-scale art installation using only recycled materials to raise awareness about environmental conservation. Displayed at city art gallery.',
      skills: ['Creativity', 'Sustainability', 'Art Design', 'Public Speaking'],
      date: 'September 2025',
      ageGroup: '6-10',
      programType: 'creativity',
    },
    {
      id: 4,
      childName: 'Vihaan Desai',
      age: 6,
      projectTitle: 'Interactive Storybook App',
      projectImage:
        'https://img.rocket.new/generatedImages/rocket_gen_img_12acdfd3e-1763295869310.png',
      projectImageAlt:
        'Young Indian boy with short black hair showing tablet with colorful interactive storybook application',
      category: 'Technology',
      description:
        'Developed a simple interactive storybook application that helps younger children learn through engaging stories and animations.',
      skills: ['Basic Coding', 'Storytelling', 'UI Design', 'Animation'],
      date: 'December 2025',
      ageGroup: '6-10',
      programType: 'innovation',
    },
    {
      id: 5,
      childName: 'Zara Khan',
      age: 8,
      projectTitle: 'Community Garden Initiative',
      projectImage:
        'https://img.rocket.new/generatedImages/rocket_gen_img_1765cd55e-1763301035988.png',
      projectImageAlt:
        'Young Indian girl with long black hair in garden showing vegetables grown in community garden project',
      category: 'Social Impact',
      description:
        'Led a community garden project that brought neighbors together and provided fresh vegetables to local families. Won community service award.',
      skills: ['Leadership', 'Agriculture', 'Community Building', 'Project Management'],
      date: 'August 2025',
      ageGroup: '6-10',
      programType: 'career',
    },
    {
      id: 6,
      childName: 'Arnav Mehta',
      age: 9,
      projectTitle: 'Math Learning Game',
      projectImage:
        'https://img.rocket.new/generatedImages/rocket_gen_img_12acdfd3e-1763295869310.png',
      projectImageAlt:
        'Young Indian boy with short black hair demonstrating educational math game on computer with colorful graphics',
      category: 'Educational Technology',
      description:
        'Created an engaging math learning game that makes complex concepts fun and accessible for younger students. Used by 50+ students.',
      skills: ['Game Design', 'Mathematics', 'Programming', 'User Testing'],
      date: 'July 2025',
      ageGroup: '6-10',
      programType: 'innovation',
    },
  ];

  const metrics: Metric[] = [
    {
      id: 1,
      label: 'Success Stories',
      value: '2,500+',
      icon: 'TrophyIcon',
      color: 'text-brand-orange',
      bgColor: 'bg-brand-orange/10',
    },
    {
      id: 2,
      label: 'Parent Satisfaction',
      value: '98%',
      icon: 'HeartIcon',
      color: 'text-error',
      bgColor: 'bg-error/10',
    },
    {
      id: 3,
      label: 'Skill Development',
      value: '95%',
      icon: 'AcademicCapIcon',
      color: 'text-brand-blue',
      bgColor: 'bg-brand-blue/10',
    },
    {
      id: 4,
      label: 'Confidence Growth',
      value: '92%',
      icon: 'SparklesIcon',
      color: 'text-brand-green',
      bgColor: 'bg-brand-green/10',
    },
  ];

  const filterContent = <
    T extends { ageGroup: string; programType: string; childName?: string; projectTitle?: string },
  >(
    items: T[]
  ): T[] => {
    return items.filter((item) => {
      const matchesAge = filters.ageGroup === 'all' || item.ageGroup === filters.ageGroup;
      const matchesProgram =
        filters.programType === 'all' || item.programType === filters.programType;
      const searchLower = filters.searchQuery.toLowerCase();
      const matchesSearch =
        !filters.searchQuery ||
        (item.childName && item.childName.toLowerCase().includes(searchLower)) ||
        (item.projectTitle && item.projectTitle.toLowerCase().includes(searchLower));

      return matchesAge && matchesProgram && matchesSearch;
    });
  };

  const filteredVideos = filterContent(videoTestimonials);
  const filteredTransformations = filterContent(transformations);
  const filteredAchievements = filterContent(achievements);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/3" />
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

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Real Stories, Real Transformations
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how GYANHOUZ has transformed the lives of thousands of children through
            innovative learning experiences. Every story is a testament to the power of experiential
            education.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="mb-12">
          <SuccessMetricsDashboard metrics={metrics} />
        </div>

        {/* Filters */}
        <StoryFilters onFilterChange={setFilters} />

        {/* Tabs */}
        <div className="flex items-center space-x-2 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-smooth whitespace-nowrap ${
              activeTab === 'videos'
                ? 'bg-brand-orange text-white shadow-brand'
                : 'bg-card text-foreground hover:bg-muted'
            }`}
          >
            <Icon
              name="PlayCircleIcon"
              size={20}
              variant={activeTab === 'videos' ? 'solid' : 'outline'}
            />
            <span>Video Testimonials</span>
            <span className="px-2 py-0.5 bg-white/20 rounded text-xs">{filteredVideos.length}</span>
          </button>
          <button
            onClick={() => setActiveTab('transformations')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-smooth whitespace-nowrap ${
              activeTab === 'transformations'
                ? 'bg-brand-orange text-white shadow-brand'
                : 'bg-card text-foreground hover:bg-muted'
            }`}
          >
            <Icon
              name="ArrowPathIcon"
              size={20}
              variant={activeTab === 'transformations' ? 'solid' : 'outline'}
            />
            <span>Transformations</span>
            <span className="px-2 py-0.5 bg-white/20 rounded text-xs">
              {filteredTransformations.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-smooth whitespace-nowrap ${
              activeTab === 'achievements'
                ? 'bg-brand-orange text-white shadow-brand'
                : 'bg-card text-foreground hover:bg-muted'
            }`}
          >
            <Icon
              name="TrophyIcon"
              size={20}
              variant={activeTab === 'achievements' ? 'solid' : 'outline'}
            />
            <span>Achievements</span>
            <span className="px-2 py-0.5 bg-white/20 rounded text-xs">
              {filteredAchievements.length}
            </span>
          </button>
        </div>

        {/* Content */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.length > 0 ? (
              filteredVideos.map((testimonial) => (
                <VideoTestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <Icon
                  name="FaceFrownIcon"
                  size={48}
                  className="text-muted-foreground mx-auto mb-4"
                />
                <p className="text-lg text-muted-foreground">
                  No stories found matching your filters.
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'transformations' && (
          <div className="space-y-8">
            {filteredTransformations.length > 0 ? (
              filteredTransformations.map((transformation) => (
                <TransformationSlider key={transformation.id} transformation={transformation} />
              ))
            ) : (
              <div className="text-center py-12">
                <Icon
                  name="FaceFrownIcon"
                  size={48}
                  className="text-muted-foreground mx-auto mb-4"
                />
                <p className="text-lg text-muted-foreground">
                  No transformations found matching your filters.
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'achievements' && (
          <>
            {filteredAchievements.length > 0 ? (
              <AchievementGallery achievements={filteredAchievements} />
            ) : (
              <div className="text-center py-12">
                <Icon
                  name="FaceFrownIcon"
                  size={48}
                  className="text-muted-foreground mx-auto mb-4"
                />
                <p className="text-lg text-muted-foreground">
                  No achievements found matching your filters.
                </p>
              </div>
            )}
          </>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-brand-orange to-brand-red rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Write Your Child's Success Story?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of parents who have witnessed remarkable transformations in their
            children. Book a free assessment today and start your journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact-campus-locator"
              className="px-8 py-4 bg-white text-brand-orange font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-smooth"
            >
              Book Free Assessment
            </a>
            <a
              href="/learning-programs-hub"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-brand-orange transition-smooth"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentSuccessStoriesInteractive;
