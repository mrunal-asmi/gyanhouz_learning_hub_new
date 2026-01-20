import ProgramAdmissionForm from '@/components/forms/ProgramAdmissionForm';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function PlaygroupProgramPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground font-poppins mb-6">
              Playgroup <span className="text-primary">Program</span>
            </h1>
            <p className="text-xl text-muted-foreground font-source">
              Fostering social skills and curiosity through structured play and interaction.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <ProgramAdmissionForm programName="Playgroup Program" />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
