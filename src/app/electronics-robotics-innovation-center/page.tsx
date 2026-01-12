import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ElectronicsRoboticsInteractive from './components/ElectronicsRoboticsInteractive';

export const metadata: Metadata = {
  title: 'Electronics & Robotics Innovation Center - GYANHOUZ | Best Robotics Classes for Kids Near Me',
  description: 'Transform your child into a technology creator at India\'s most advanced electronics and robotics lab. Hands-on Arduino, Raspberry Pi, IoT, and competitive robotics training. Age-progressive STEM programs from basic circuits to advanced robotics competitions.',
};

export default function ElectronicsRoboticsInnovationCenterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <ElectronicsRoboticsInteractive />
      </main>
    </div>
  );
}