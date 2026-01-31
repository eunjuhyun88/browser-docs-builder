interface SectionIndicatorProps {
  currentSection: string;
  sectionNumber: string;
}

export function SectionIndicator({ currentSection, sectionNumber }: SectionIndicatorProps) {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-start gap-4">
      <div className="flex flex-col items-start">
        <span className="text-5xl font-bold text-primary font-mono">{sectionNumber}</span>
        <div className="w-10 h-0.5 bg-primary mt-2 mb-2" />
        <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
          {currentSection}
        </span>
      </div>
      
      {/* Page Progress */}
      <div className="mt-8 flex flex-col gap-2">
        <span className="text-xs font-mono text-muted-foreground">01 / 05</span>
        <div className="flex flex-col gap-1">
          <div className="w-6 h-1 bg-primary" />
          <div className="w-6 h-1 bg-primary" />
          <div className="w-6 h-0.5 bg-muted" />
          <div className="w-6 h-0.5 bg-muted" />
        </div>
      </div>

      {/* Online Status */}
      <div className="mt-8 flex items-center gap-2 px-3 py-1.5 border border-neon-green rounded-full">
        <span className="w-2 h-2 rounded-full bg-neon-green animate-status-pulse" />
        <span className="text-xs font-mono text-neon-green">ONLINE</span>
      </div>
    </div>
  );
}
