import ProgramAdmissionForm from '@/components/forms/ProgramAdmissionForm';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function NurseryProgramPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground font-poppins mb-6">
              Nursery <span className="text-primary">Program</span>
            </h1>
            <p className="text-xl text-muted-foreground font-source">
              Building a strong foundation for academic and personal development.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <ProgramAdmissionForm programName="Nursery Program" />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
