import { useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  Search, 
  Bell, 
  Settings,
  Sparkles,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface BrowserTopBarProps {
  onAgentClick: () => void;
}

export function BrowserTopBar({ onAgentClick }: BrowserTopBarProps) {
  const [url, setUrl] = useState("playarts://vault");

  return (
    <div className="h-14 bg-card border-b border-border flex items-center px-4 gap-4">
      {/* Navigation Controls */}
      <div className="flex items-center gap-1">
        <button className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground hover:text-foreground">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground hover:text-foreground">
          <ChevronRight className="w-4 h-4" />
        </button>
        <button className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground hover:text-foreground">
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* URL Bar / Search */}
      <div className="flex-1 max-w-2xl">
        <div className="flex items-center gap-3 bg-muted/50 border border-border rounded px-4 py-2">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-sm font-mono text-foreground placeholder:text-muted-foreground"
            placeholder="Search or ask agent... (⌘K)"
          />
          <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-xs font-mono bg-background border border-border rounded">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2">
        {/* Agent Button */}
        <Button
          onClick={onAgentClick}
          size="sm"
          className="gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground"
        >
          <Sparkles className="w-4 h-4" />
          <span className="hidden sm:inline">Agent</span>
        </Button>

        {/* Notifications */}
        <button className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground hover:text-foreground relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
        </button>

        {/* User */}
        <button className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground hover:text-foreground">
          <User className="w-4 h-4" />
        </button>

        {/* Settings */}
        <button className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground hover:text-foreground">
          <Settings className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
