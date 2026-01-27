import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Science Labs | GYANHOUZ Discovery Center',
  description: 'Step into a world of wonder where experiments come to life.',
};

export default function ScienceLabsPage() {
  const labModules = [
    {
      title: 'Molecular Magic',
      subject: 'Chemistry',
      image: '/assets/images/chemistry.jpg',
      desc: 'From polymer slime to pH-changing potions, children explore the building blocks of matter.',
      color: 'from-emerald-400 to-cyan-500',
    },
    {
      title: 'Kinetic Worlds',
      subject: 'Physics',
      image: '/assets/images/physics.jpg',
      desc: 'Gravity, magnetism, and motion brought alive through hands-on builds and experiments.',
      color: 'from-sky-400 to-indigo-500',
    },
    {
      title: 'Eco Explorers',
      subject: 'Biology',
      image: '/assets/images/biology.jpg',
      desc: 'Discover plant DNA, ecosystems, and microscopic life in engaging real-world labs.',
      color: 'from-amber-400 to-orange-500',
    },
  ];

  return (
    <main className="min-h-screen bg-[#155AA8] text-white selection:bg-white/30">
      <Header />

      {/* HERO */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[-15%] right-[10%] w-[520px] h-[520px] bg-[#60a5fa]/40 blur-[140px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] left-[5%] w-[420px] h-[420px] bg-[#3b82f6]/30 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-2 rounded-full mb-8">
            <Icon name="BeakerIcon" size={18} className="text-white" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Live Science Labs
            </span>
          </div>

          <h1 className="text-5xl lg:text-8xl font-black mb-8 font-poppins leading-tight">
            Where Curiosity
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white">
              Becomes Clarity
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto font-source mb-10">
            At GYANHOUZ, science is not memorized — it is discovered through safe,
            hands-on experiments using everyday materials.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-[#155AA8] px-10 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-2xl">
              Book a Lab Session
            </button>
            <button className="bg-white/10 border border-white/30 backdrop-blur-md px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
              Watch Experiments
            </button>
          </div>
        </div>
      </section>

      {/* SCIENTIFIC METHOD */}
      <section className="py-24 bg-[#0f3f73]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 font-poppins">
            The GYANHOUZ Way
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Observe', icon: 'MagnifyingGlassIcon', text: 'See beyond the obvious.' },
              { label: 'Question', icon: 'QuestionMarkCircleIcon', text: 'Ask bold scientific questions.' },
              { label: 'Predict', icon: 'LightBulbIcon', text: 'Apply logic before testing.' },
              { label: 'Explain', icon: 'ChatBubbleLeftEllipsisIcon', text: 'Express ideas with clarity.' },
            ].map((step, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#1b4f8f]/70 border border-white/15 backdrop-blur-sm hover:border-white/40 transition-all"
              >
                <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mb-6">
                  <Icon name={step.icon as any} size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 font-poppins">{step.label}</h3>
                <p className="text-blue-100 text-sm font-source">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAB MODULES */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 font-poppins text-center">
            Choose Your Lab
          </h2>

          <div className="grid lg:grid-cols-3 gap-10">
            {labModules.map((module, i) => (
              <div
                key={i}
                className="group relative rounded-[2rem] overflow-hidden bg-[#0f3f73] border border-white/15"
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src={module.image}
                    alt={module.subject}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                <div className="absolute bottom-0 p-8 w-full">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 bg-gradient-to-r ${module.color}`}
                  >
                    {module.subject}
                  </span>
                  <h3 className="text-2xl font-bold mb-3 font-poppins">
                    {module.title}
                  </h3>
                  <p className="text-blue-100 text-sm font-source mb-6">
                    {module.desc}
                  </p>
                  <button className="flex items-center gap-2 text-white font-bold text-sm hover:underline">
                    <span>View Curriculum</span>
                    <Icon name="ArrowRightIcon" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 container mx-auto px-4">
        <div className="relative rounded-[3rem] p-16 lg:p-24 text-center overflow-hidden border border-white/20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/40 to-[#60a5fa]/40 backdrop-blur-2xl" />
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              Ready to Spark a Reaction?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Weekend workshops and full-term science programs designed to inspire future innovators.
            </p>
            <button className="bg-white text-[#155AA8] px-14 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl">
              ENROLL NOW
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
