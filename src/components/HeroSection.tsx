import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function HeroSection() {
  return (
    <section id="protocol" className="min-h-screen relative section-protocol pt-32 pb-20 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="pl-0 lg:pl-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-mono text-primary tracking-widest mb-4 block">
                SYSTEM DEFINITION
              </span>
              
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-6xl font-bold text-muted-foreground font-mono">01</span>
                <span className="text-2xl font-mono tracking-widest">PROTOCOL</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-4">
                <span className="text-foreground">DATA</span>
                <br />
                <span className="gradient-text-orange">TERMINAL.</span>
              </h1>

              <p className="text-lg text-muted-foreground mt-8 max-w-lg leading-relaxed">
                PlayArts는 AI 대화 데이터로부터 기업의 <span className="text-foreground">데이터 소유권</span>을
                지키는 <span className="text-primary font-semibold">유일한 오픈소스 브라우저 플랫폼</span>입니다.
              </p>

              {/* Features List */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span><span className="text-foreground font-semibold">99.8% accuracy</span> <span className="text-muted-foreground">데이터 암호화 보장</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span><span className="text-foreground font-semibold">Sub-10ms latency</span> <span className="text-muted-foreground">실시간 동기화</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span><span className="text-foreground font-semibold">Passkey 기반</span> <span className="text-muted-foreground">생체인증 보안</span></span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 mt-10">
                <Button size="lg" className="font-mono tracking-wide px-8">
                  START ANALYSIS
                </Button>
                <Button variant="outline" size="lg" className="font-mono tracking-wide px-8">
                  LEARN MORE
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative h-[500px] hidden lg:block">
            {/* Decorative Orange Circle */}
            <motion.div 
              className="absolute top-0 right-1/3 w-24 h-24 rounded-full bg-primary/80"
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Status Indicator */}
            <div className="absolute top-8 right-0 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-muted-foreground" />
                <span className="text-xs font-mono text-muted-foreground">PENDING ANALYSIS</span>
              </div>
              <button className="flex items-center gap-2 text-primary text-xs font-mono hover:underline">
                <span className="text-lg">⟳</span> ANALYZE ALL
              </button>
            </div>

            {/* Floating Data Cards */}
            <FloatingCard 
              label="interview_clip.mp4" 
              status="PENDING"
              position="top-32 left-0"
              rotation={-12}
              delay={0}
            />
            <FloatingCard 
              label="documentary.mp4" 
              status="PENDING"
              position="top-40 left-32"
              rotation={-5}
              delay={0.2}
            />
            <FloatingCard 
              label="product_demo.mp4" 
              status="PENDING"
              position="top-48 right-32"
              rotation={8}
              delay={0.4}
            />
            <FloatingCard 
              label="news_broadcast.mp4" 
              status="PENDING"
              position="top-64 right-0"
              rotation={15}
              delay={0.6}
            />
            <FloatingCard 
              label="social_video.mp4" 
              status="PENDING"
              position="bottom-20 left-20"
              rotation={-8}
              delay={0.8}
            />

            {/* Click to Analyze Text */}
            <div className="absolute bottom-0 right-0 text-xs font-mono text-muted-foreground">
              CLICK ANYWHERE TO ANALYZE • 8 VIDEOS PENDING
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingCard({ 
  label, 
  status, 
  position, 
  rotation, 
  delay 
}: { 
  label: string; 
  status: string; 
  position: string; 
  rotation: number;
  delay: number;
}) {
  return (
    <motion.div 
      className={`absolute ${position} bg-card border border-border p-4 w-48 cursor-pointer hover:border-primary transition-colors`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      style={{ transform: `rotate(${rotation}deg)` }}
      whileHover={{ scale: 1.05, rotate: 0 }}
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-muted flex items-center justify-center">
          <span className="text-xs">📹</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-mono text-foreground truncate">{label}</p>
          <p className="text-[10px] font-mono text-muted-foreground mt-1">{status}...</p>
        </div>
      </div>
      <div className="absolute top-2 right-2 text-[10px] font-mono text-muted-foreground">
        #{String(Math.floor(Math.random() * 8) + 1).padStart(2, '0')}
      </div>
    </motion.div>
  );
}
