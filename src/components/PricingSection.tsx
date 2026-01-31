import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    tier: "OPEN SOURCE",
    name: "FREE",
    description: "커뮤니티 지원 기본 탐지",
    price: null,
    features: [
      "기본 데이터 보관",
      "Passkey 인증",
      "커뮤니티 지원",
      "Self-hosted",
    ],
    cta: "DOWNLOAD",
    ctaVariant: "outline" as const,
    popular: false,
  },
  {
    tier: "PRO",
    name: "$299",
    period: "/mo",
    description: "성장하는 플랫폼을 위한 SaaS",
    features: [
      "95%+ 정확도 모델",
      "SLA 보장 (99.9%)",
      "전용 대시보드",
      "우선 지원",
      "실시간 웹훅",
    ],
    cta: "START FREE TRIAL",
    ctaVariant: "default" as const,
    popular: true,
  },
  {
    tier: "ENTERPRISE",
    name: "CUSTOM",
    description: "Fortune 500을 위한 자율 운영",
    features: [
      "99.8% 정확도 보장",
      "자율 운영 에이전트",
      "전용 인프라",
      "24/7 전담 지원",
      "규제 준수 보증",
      "맞춤형 통합",
    ],
    cta: "CONTACT SALES",
    ctaVariant: "outline" as const,
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="access" className="py-32 section-access relative">
      <div className="absolute inset-0 noise-overlay" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-6 pl-0 lg:pl-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.tier}
              className={`relative p-8 border ${
                plan.popular 
                  ? 'border-primary bg-card/80' 
                  : 'border-border bg-card/50'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-px left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-mono">
                  MOST POPULAR
                </div>
              )}

              {/* Header */}
              <div className="mb-8">
                <span className="text-xs font-mono text-muted-foreground tracking-widest">
                  {plan.tier}
                </span>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-5xl font-black">{plan.name}</span>
                  {plan.period && (
                    <span className="text-lg text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className={`w-4 h-4 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                variant={plan.ctaVariant} 
                className="w-full font-mono tracking-wide group"
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
