'use client';

import { useState } from 'react';
import ProgramCard from './ProgramCard';
import ComparisonTable from './ComparisonTable';
import AgeFilterTabs from './AgeFilterTabs';
import TestimonialCard from './TestimonialCard';
import CurriculumTimeline from './CurriculumTimeline';
import EnrollmentModal from './EnrollmentModal';

interface Program {
  id: string;
  title: string;
  ageRange: string;
  ageGroup: string;
  description: string;
  image: string;
  alt: string;
  features: Array<{ icon: string; text: string }>;
  price: string;
  seatsLeft: number;
}

interface AgeGroup {
  id: string;
  label: string;
  ageRange: string;
}

interface ComparisonFeature {
  feature: string;
  oldSchool: string;
  gyanhouz: string;
}

interface Testimonial {
  parentName: string;
  childName: string;
  childAge: number;
  program: string;
  testimonial: string;
  image: string;
  alt: string;
  rating: number;
}

interface Milestone {
  age: string;
  title: string;
  description: string;
  skills: string[];
}

export default function LearningProgramsInteractive() {
  const [activeTab, setActiveTab] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  const ageGroups: AgeGroup[] = [
    { id: 'all', label: 'All Programs', ageRange: '2-10 years' },
    { id: 'preschool', label: 'Preschool', ageRange: '2-6 years' },
    { id: 'creativity', label: 'Creativity', ageRange: '6-10 years' },
    { id: 'innovation', label: 'Science Labs', ageRange: '7-10 years' },
  ];

  const programs: Program[] = [
    {
      id: 'preschool-foundation',
      title: 'Preschool Foundation',
      ageRange: '2-6 years',
      ageGroup: 'preschool',
      description:
        'Build strong cognitive foundations through play-based learning, sensory exploration, and hands-on activities that develop critical thinking from an early age.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ccb67141-1764910375532.png',
      alt: 'Young children engaged in colorful hands-on learning activities with building blocks and educational toys in bright modern classroom',
      features: [
        { icon: 'BeakerIcon', text: 'Science through experiments & observation' },
        { icon: 'CalculatorIcon', text: 'Math through manipulatives & play' },
        { icon: 'BookOpenIcon', text: 'Language development through stories' },
        { icon: 'PuzzlePieceIcon', text: 'Problem-solving through games' },
        { icon: 'MusicalNoteIcon', text: 'Creative expression through arts' },
      ],

      price: '₹25,000/term',
      seatsLeft: 8,
    },
    {
      id: 'school-of-creativity',
      title: 'School of Creativity',
      ageRange: '6-10 years',
      ageGroup: 'creativity',
      description:
        'Unleash creative potential through project-based learning, design thinking workshops, and collaborative problem-solving activities.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ff77319b-1764777333730.png',
      alt: 'Elementary school children working together on creative art project with paints and craft materials in collaborative learning space',
      features: [
        { icon: 'PaintBrushIcon', text: 'Design thinking & innovation projects' },
        { icon: 'LightBulbIcon', text: 'Creative problem-solving challenges' },
        { icon: 'UserGroupIcon', text: 'Collaborative team projects' },
        { icon: 'SparklesIcon', text: 'Imagination-driven learning' },
        { icon: 'CubeIcon', text: '3D modeling & prototyping' },
      ],

      price: '₹32,000/term',
      seatsLeft: 12,
    },
    {
      id: 'robotics-lab',
      title: 'Robotics Science Lab',
      ageRange: '7-10 years',
      ageGroup: 'innovation',
      description:
        'Master robotics fundamentals through hands-on building, coding, and programming real robots with sensors and actuators.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1644626ed-1764661581325.png',
      alt: 'Children assembling and programming colorful educational robots with electronic components on modern lab workbench',
      features: [
        { icon: 'CpuChipIcon', text: 'Build & program real robots' },
        { icon: 'CodeBracketIcon', text: 'Block-based coding fundamentals' },
        { icon: 'BoltIcon', text: 'Sensor integration & automation' },
        { icon: 'CogIcon', text: 'Mechanical engineering basics' },
        { icon: 'TrophyIcon', text: 'Competition preparation' },
      ],

      price: '₹38,000/term',
      seatsLeft: 6,
    },
    {
      id: 'electronics-lab',
      title: 'Electronics Discovery Lab',
      ageRange: '7-10 years',
      ageGroup: 'innovation',
      description:
        'Explore electronics through circuit building, component understanding, and creating functional electronic projects.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d5d1e690-1764705515358.png',
      alt: 'Young students working with electronic circuits and LED lights on breadboards in hands-on electronics workshop',
      features: [
        { icon: 'CircleStackIcon', text: 'Circuit design & building' },
        { icon: 'BoltIcon', text: 'Component identification' },
        { icon: 'WrenchScrewdriverIcon', text: 'Soldering & assembly skills' },
        { icon: 'LightBulbIcon', text: 'LED & sensor projects' },
        { icon: 'RocketLaunchIcon', text: 'Arduino programming basics' },
      ],

      price: '₹36,000/term',
      seatsLeft: 9,
    },
    {
      id: 'science-lab',
      title: 'Experimental Science Lab',
      ageRange: '6-10 years',
      ageGroup: 'innovation',
      description:
        'Conduct real scientific experiments, learn the scientific method, and discover physics, chemistry, and biology through hands-on exploration.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d8fb08bc-1764659821764.png',
      alt: 'Children in safety goggles conducting colorful chemistry experiments with test tubes and beakers in modern science laboratory',
      features: [
        { icon: 'BeakerIcon', text: 'Chemistry experiments & reactions' },
        { icon: 'MagnifyingGlassIcon', text: 'Biology observation & study' },
        { icon: 'BoltIcon', text: 'Physics demonstrations' },
        { icon: 'DocumentTextIcon', text: 'Scientific method practice' },
        { icon: 'AcademicCapIcon', text: 'Research project development' },
      ],

      price: '₹34,000/term',
      seatsLeft: 15,
    },
    {
      id: 'career-discovery',
      title: 'Industry Club & Career Discovery',
      ageRange: '8-10 years',
      ageGroup: 'creativity',
      description:
        'Experience real-world careers through simulation labs, industry visits, and hands-on professional skill development.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_14ea4d42e-1766150225788.png',
      alt: 'Children role-playing different professions in career simulation lab with professional costumes and equipment',
      features: [
        { icon: 'BriefcaseIcon', text: 'Career simulation experiences' },
        { icon: 'BuildingOfficeIcon', text: 'Industry expert interactions' },
        { icon: 'UserGroupIcon', text: 'Professional skill workshops' },
        { icon: 'MapIcon', text: 'Field trips to workplaces' },
        { icon: 'StarIcon', text: 'Aptitude discovery sessions' },
      ],

      price: '₹30,000/term',
      seatsLeft: 11,
    },
  ];

  const comparisonFeatures: ComparisonFeature[] = [
    {
      feature: 'Learning Method',
      oldSchool: 'Rote memorization and textbook-based',
      gyanhouz: 'Hands-on experimentation and discovery',
    },
    {
      feature: 'Classroom Setup',
      oldSchool: 'Rows of desks facing blackboard',
      gyanhouz: 'Science Labs with project workstations',
    },
    {
      feature: 'Assessment',
      oldSchool: 'Written exams testing memory',
      gyanhouz: 'Project-based demonstrations of understanding',
    },
    {
      feature: 'Teacher Role',
      oldSchool: 'Lecturer delivering information',
      gyanhouz: 'Facilitator guiding exploration',
    },
    {
      feature: 'Curriculum Focus',
      oldSchool: 'Theory and concepts only',
      gyanhouz: 'Real-world application and problem-solving',
    },
    {
      feature: 'Career Preparation',
      oldSchool: 'No exposure until college',
      gyanhouz: 'Early career discovery and skill building',
    },
  ];

  const testimonials: Testimonial[] = [
    {
      parentName: 'Priya Sharma',
      childName: 'Aarav',
      childAge: 5,
      program: 'Preschool Foundation',
      testimonial:
        'Aarav has transformed from a shy child to a confident problem-solver. He now asks "why" and "how" about everything! The hands-on learning approach has made him genuinely curious about the world.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_111e29bbe-1763294966477.png',
      alt: 'Indian woman with long black hair in blue traditional dress smiling warmly at camera',
      rating: 5,
    },
    {
      parentName: 'Rajesh Kumar',
      childName: 'Ananya',
      childAge: 8,
      program: 'Robotics Science Lab',
      testimonial:
        'My daughter built her first robot at age 7! She now understands coding concepts that I learned in college. GYANHOUZ has given her skills that will define her future career.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_15c82c971-1763293909823.png',
      alt: 'Indian man with short black hair in white shirt smiling confidently in professional setting',
      rating: 5,
    },
    {
      parentName: 'Meera Patel',
      childName: 'Rohan',
      childAge: 9,
      program: 'Career Discovery Club',
      testimonial:
        'Rohan discovered his passion for architecture through the career simulation labs. He now knows exactly what he wants to become and is already developing relevant skills. This clarity at age 9 is incredible!',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_10b181b9e-1764772448979.png',
      alt: 'Indian woman with shoulder-length brown hair in green kurta with warm smile outdoors',
      rating: 5,
    },
  ];

  const milestones: Milestone[] = [
    {
      age: '2-3',
      title: 'Sensory Foundation',
      description:
        'Building cognitive foundations through sensory exploration, basic motor skills, and early language development.',
      skills: ['Sensory Play', 'Motor Skills', 'Language Basics', 'Social Interaction'],
    },
    {
      age: '4-5',
      title: 'Curiosity Expansion',
      description:
        'Developing critical thinking through questioning, experimentation, and structured play-based learning.',
      skills: ['Scientific Thinking', 'Math Concepts', 'Creative Expression', 'Problem Solving'],
    },
    {
      age: '6-7',
      title: 'Skill Building',
      description:
        'Mastering foundational academic skills while introducing hands-on project work and collaborative learning.',
      skills: ['Reading & Writing', 'Computational Thinking', 'Team Projects', 'Design Basics'],
    },
    {
      age: '8-9',
      title: 'Innovation & Discovery',
      description:
        'Engaging in complex projects, robotics, electronics, and career exploration through simulation labs.',
      skills: ['Robotics', 'Electronics', 'Career Awareness', 'Advanced Projects'],
    },
    {
      age: '10+',
      title: 'Mastery & Specialization',
      description:
        'Developing expertise in chosen areas, preparing for competitive challenges, and building portfolio projects.',
      skills: ['Specialization', 'Competition Prep', 'Portfolio Building', 'Leadership'],
    },
  ];

  const filteredPrograms =
    activeTab === 'all' ? programs : programs.filter((program) => program.ageGroup === activeTab);

  const handleEnroll = (programTitle: string) => {
    setSelectedProgram(programTitle);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-orange via-brand-red to-brand-blue text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Where IQ Actually Develops
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            India's Most Integrated Learning Ecosystem - From Preschool to Career Discovery
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
              ✓ Hands-On Learning Labs
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
              ✓ Career Discovery Programs
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
              ✓ Innovation Workshops
            </div>
          </div>
        </div>
      </section>

      {/* Age Filter Tabs */}
      <section className="py-12 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
            Explore Programs by Age Group
          </h2>
          <AgeFilterTabs ageGroups={ageGroups} activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <ProgramCard
                key={program.id}
                {...program}
                onEnroll={() => handleEnroll(program.title)}
              />
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No programs found for this age group.</p>
            </div>
          )}
        </div>
      </section>

      {/* Old School vs GYANHOUZ Comparison */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Old School vs New School
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how GYANHOUZ revolutionizes traditional education with experiential learning
            </p>
          </div>
          <ComparisonTable features={comparisonFeatures} />
        </div>
      </section>

      {/* Curriculum Timeline */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Development Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track your child's learning milestones from preschool to innovation mastery
            </p>
          </div>
          <CurriculumTimeline milestones={milestones} />
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Parent Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real transformations from families who chose GYANHOUZ
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-orange to-brand-red text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Limited Seats Available for 2025 Batch
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't miss the opportunity to give your child the GYANHOUZ advantage
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                setSelectedProgram('Any Program');
                setIsModalOpen(true);
              }}
              className="px-8 py-4 bg-white text-brand-orange font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-smooth"
            >
              Book Free Assessment
            </button>
            <a
              href="/contact-campus-locator"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-brand-orange transition-smooth"
            >
              Find Nearest Campus
            </a>
          </div>
        </div>
      </section>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        programName={selectedProgram}
      />
    </>
  );
}
