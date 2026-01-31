import { Github, FileText, Activity, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 bg-primary" />
              <span className="font-bold text-lg">PLAYARTS<sup className="text-xs">™</sup></span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              The MongoDB of AI Safety. 오픈소스 기반 AI 콘텐츠 안전 플랫폼으로 
              EU AI Act 규제 준수를 자동화합니다.
            </p>
            <p className="text-xs text-muted-foreground mt-4 font-mono">
              © 2025 PlayArts. All rights reserved.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-mono text-muted-foreground tracking-widest mb-4">
              RESOURCES
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <FileText className="w-4 h-4" />
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Activity className="w-4 h-4" />
                  API Status
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono text-muted-foreground tracking-widest mb-4">
              CONTACT
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  Contact Sales
                </a>
              </li>
            </ul>

            {/* Status */}
            <div className="mt-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-status-pulse" />
              <span className="text-xs font-mono text-neon-green">ALL SYSTEMS OPERATIONAL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
