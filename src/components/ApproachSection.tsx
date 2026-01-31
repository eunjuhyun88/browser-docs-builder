import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, Eye, Shield, Cpu, DollarSign } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "데이터 유출 리스크",
    description: "클라우드 저장 시 데이터 노출 위험"
  },
  {
    icon: TrendingUp,
    title: "폭증하는 AI 데이터",
    description: "매일 수억 건의 AI 대화 생성"
  },
  {
    icon: Eye,
    title: "소유권 불명확",
    description: "사용자 데이터의 권리 주장 불가"
  },
];

const solutions = [
  {
    icon: Shield,
    title: "Passkey 보안",
    description: "생체인증 기반 로컬 암호화"
  },
  {
    icon: Cpu,
    title: "Multi-Agent System",
    description: "자동화된 데이터 수집 및 분류"
  },
  {
    icon: DollarSign,
    title: "PPAP 마켓플레이스",
    description: "데이터 소유권 증명 및 거래"
  },
];

export function ApproachSection() {
  return (
    <section id="approach" className="py-32 section-approach relative">
      <div className="absolute inset-0 noise-overlay" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 pl-0 lg:pl-20">
          <span className="text-sm font-mono text-secondary tracking-widest mb-4 block">
            PROBLEM & SOLUTION
          </span>
          <div className="flex items-baseline gap-4">
            <span className="text-6xl font-bold text-secondary/50 font-mono">02</span>
            <span className="text-2xl font-mono tracking-widest">APPROACH</span>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-1 pl-0 lg:pl-20">
          {/* The Problem */}
          <motion.div 
            className="bg-card/50 border border-border p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 border border-destructive text-destructive text-xs font-mono mb-8">
              THE PROBLEM
            </div>
            
            <h3 className="text-4xl font-black mb-2">현실의</h3>
            <h3 className="text-4xl font-black gradient-text-purple mb-8">붕괴</h3>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-6 h-6 flex items-center justify-center text-destructive">
                    <problem.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{problem.title}</h4>
                    <p className="text-sm text-muted-foreground">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-8">
              <div className="flex justify-between text-xs font-mono text-muted-foreground mb-2">
                <span>DAILY AI CONTENT VOLUME</span>
                <span className="text-destructive">↑ 340%</span>
              </div>
              <div className="h-2 bg-muted rounded-sm overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary via-destructive to-destructive"
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </motion.div>

          {/* The Solution */}
          <motion.div 
            className="bg-card/50 border border-border p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 border border-secondary text-secondary text-xs font-mono mb-8">
              THE SOLUTION
            </div>
            
            <h3 className="text-4xl font-black mb-2">공학적</h3>
            <h3 className="text-4xl font-black gradient-text-purple mb-8">신뢰</h3>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-6 h-6 flex items-center justify-center text-secondary">
                    <solution.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{solution.title}</h4>
                    <p className="text-sm text-muted-foreground">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-8">
              <div className="flex justify-between text-xs font-mono text-muted-foreground mb-2">
                <span>OPERATIONAL COST REDUCTION</span>
                <span className="text-neon-green">-90%</span>
              </div>
              <div className="h-2 bg-muted rounded-sm overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-secondary to-neon-green"
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
