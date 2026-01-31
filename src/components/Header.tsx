import { Button } from "@/components/ui/button";

const navItems = [
  { label: "PROTOCOL", href: "#protocol" },
  { label: "APPROACH", href: "#approach" },
  { label: "SPECS", href: "#specs" },
  { label: "ACCESS", href: "#access" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground font-mono">● LIVE</span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-primary">PLAYARTS</span>
              <span className="text-xs text-muted-foreground font-mono">BROWSER ENGINE</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a 
              href="#docs" 
              className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              DOCS
            </a>
            <Button variant="default" size="sm" className="font-mono tracking-wide">
              START FREE
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
