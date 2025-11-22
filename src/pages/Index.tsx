import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProblemsSection } from '@/components/ProblemsSection';
import { FraudProtectionSection } from '@/components/FraudProtectionSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { InstagramSection } from '@/components/InstagramSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black-dark">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProblemsSection />
        <FraudProtectionSection />
        <TestimonialsSection />
        <InstagramSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;