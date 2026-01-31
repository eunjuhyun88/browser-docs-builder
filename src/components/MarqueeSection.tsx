export function MarqueeSection() {
  const items = [
    "OPEN SOURCE CORE",
    "MULTI-MODAL ANALYSIS",
    "PASSKEY AUTH",
    "REAL-TIME DETECTION",
    "99.8% ACCURACY",
    "ZERO KNOWLEDGE",
    "DATA OWNERSHIP",
    "AI TRAINING READY",
  ];

  return (
    <div className="py-6 border-y border-border bg-background/50 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="w-2 h-2 rounded-full bg-primary mr-4" />
            <span className="font-mono text-sm text-muted-foreground tracking-widest">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
