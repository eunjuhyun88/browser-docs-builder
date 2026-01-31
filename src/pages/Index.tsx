import { Header } from "@/components/Header";
import { SectionIndicator } from "@/components/SectionIndicator";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { SystemStatus } from "@/components/SystemStatus";
import { ApproachSection } from "@/components/ApproachSection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <SectionIndicator currentSection="PROTOCOL" sectionNumber="01" />
      
      {/* Hero Section with System Status */}
      <div className="relative">
        <HeroSection />
        
        {/* System Status Card - positioned over hero */}
        <div className="container mx-auto px-6 relative z-20 -mt-20 pb-10">
          <div className="max-w-2xl ml-auto lg:mr-20">
            <SystemStatus />
          </div>
        </div>
      </div>
      
      {/* Marquee */}
      <MarqueeSection />
      
      {/* Approach Section */}
      <ApproachSection />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
