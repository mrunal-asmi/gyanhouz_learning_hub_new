import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Robotics & Electronics Lab | GYANHOUZ Innovation Hub',
  description: 'Master 21st-century skills through our 5-phase Robotics and Electronics maturity pathway.',
};

export default function RoboticsElectronicsLabPage() {
  const learningLevels = [
    { level: "L1", name: "Explorer", focus: "Circuits & Components", projects: "3 Projects", desc: "Build curiosity with paper circuits, light mazes, and touch alarms." },
    { level: "L2", name: "Tinkerer", focus: "Sensors & Automation", projects: "3-4 Projects", desc: "Intro to machines that sense—automatic night lamps and obstacle alerts." },
    { level: "L3", name: "Coder", focus: "Block-based Coding", projects: "4-5 Projects", desc: "Where code meets circuits. Program your first responsive robot." },
    { level: "L4", name: "Inventor", focus: "Logic & Prototyping", projects: "5-6 Projects", desc: "Master debugging and complex systems like smart garbage bins." },
    { level: "L5", name: "Integrator", focus: "IoT & App Control", projects: "6+ Projects", desc: "Connect to the cloud with smart home models and mobile-controlled bots." },
    { level: "L6", name: "Innovator", focus: "AI & Social Impact", projects: "6-8 Projects", desc: "Solve real-world problems using AI-powered tech and full systems." }
  ];

  return (
    <main className="min-h-screen bg-[#155AA8] text-white selection:bg-white/30">
      <Header />
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md">
              <span className="text-xs font-bold tracking-[0.2em] uppercase">Gyanhouz Innovation Ladder™</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
              Where Imagination <br /> Meets <span className="text-blue-200">Invention.</span>
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl font-medium leading-relaxed mb-10">
              Our Electronics & Robotics Lab is a career-launchpad. We prepare students not to compete with machines, but to build and program them.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-[#155AA8] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-xl">
                Book a Free Trial
              </button>
              <button className="border-2 border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                Download Curriculum
              </button>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Element */}
  

<div className="absolute top-0 right-0 w-1/2 h-full  hidden lg:block">
  {/* Gradient overlay */}
  <div className="absolute inset-0 " />

  {/* Image */}
  <div className="relative w-full h-full">
    <Image
      src="/assets/images/robotics.jpg"
      alt="Robotics Lab"
      fill
      className="object-cover"
      priority
    />
  </div>
</div>

      </section>

      {/* --- THE G.L.A.S.S. METHODOLOGY --- */}
      <section className="py-24 bg-white/5 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">The G.L.A.S.S. Framework</h2>
            <p className="text-blue-100/60 max-w-xl mx-auto">Our unique 5-step cycle to turn curiosity into capability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { s: "G", t: "Get Hands-On", d: "Assemble, wire, and power up real circuits." },
              { s: "L", t: "Learn the Why", d: "Understand principles like Ohm’s Law and digital logic." },
              { s: "A", t: "Ask & Argue", d: "Brainstorm use-cases like automated plant watering." },
              { s: "S", t: "Synthesize", d: "Design, write reports, and explain working models." },
              { s: "S", t: "Show What You Know", d: "Public demos and mini hackathons." }
            ].map((step, i) => (
              <div key={i} className="p-6 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                <div className="text-4xl font-black mb-4 text-blue-300">{step.s}</div>
                <h4 className="font-bold mb-2">{step.t}</h4>
                <p className="text-sm text-blue-100/70">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LEARNING LEVELS (THE LADDER) --- */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-4xl font-bold">The Innovation Ladder</h2>
            <p className="text-blue-100/70 max-w-md">Progress at your own pace through skill-based mastery, not just age.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningLevels.map((lvl, i) => (
              <div key={i} className="group p-8 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 hover:border-white/30 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl font-black opacity-30 group-hover:opacity-100 transition-opacity">{lvl.level}</span>
                  <span className="bg-blue-400 text-[#155AA8] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{lvl.projects}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{lvl.name}</h3>
                <div className="text-blue-300 text-sm font-bold mb-4 uppercase tracking-tighter">{lvl.focus}</div>
                <p className="text-blue-100/70 text-sm leading-relaxed mb-6">{lvl.desc}</p>
                <button className="text-white font-bold text-sm border-b border-white/30 pb-1 hover:border-white transition-all">
                  View Projects
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY US / UNIQUE FEATURES --- */}
      <section className="py-24 bg-white text-[#155AA8] rounded-t-[3rem] lg:rounded-t-[5rem]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">What Makes <br /> Gyanhouz Unique?</h2>
              <div className="space-y-6">
                {[
                  { t: "Gamified Progression", d: "Earn badges, belts, and certifications as you level up." },
                  { t: "Real Kit Ownership", d: "Children keep their tools to continue innovating at home." },
                  { t: "Future-Skills First", d: "Aligned with emerging careers in AI, IoT, and Automation." },
                  { t: "Mastery-Based", d: "Flexible pace for different learners—move as fast as you build." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#155AA8] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-xl">{item.t}</h4>
                      <p className="text-slate-600">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square bg-blue-100 rounded-[3rem] overflow-hidden relative">
               {/* Replace with a high-quality lab photo */}
               <div className="absolute inset-0 flex items-center justify-center text-xl font-bold "> <Image
      src="/assets/images/rblab.jpg"
      alt="Robotics Lab"
      fill
      className="object-cover"
      priority
    /></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}