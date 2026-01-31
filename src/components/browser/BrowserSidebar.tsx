import { 
  Home, 
  Database, 
  Bot, 
  ShoppingCart, 
  Wallet, 
  Settings,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
}

const mainNavItems: NavItem[] = [
  { id: "home", icon: <Home className="w-5 h-5" />, label: "Home" },
  { id: "vault", icon: <Database className="w-5 h-5" />, label: "Vault" },
  { id: "agent", icon: <Bot className="w-5 h-5" />, label: "Agent" },
  { id: "hub", icon: <ShoppingCart className="w-5 h-5" />, label: "HUB" },
  { id: "wallet", icon: <Wallet className="w-5 h-5" />, label: "Wallet" },
];

const bottomNavItems: NavItem[] = [
  { id: "settings", icon: <Settings className="w-5 h-5" />, label: "Settings" },
];

interface BrowserSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BrowserSidebar({ activeTab, onTabChange }: BrowserSidebarProps) {
  return (
    <div className="w-16 lg:w-20 bg-card border-r border-border flex flex-col items-center py-4">
      {/* Logo */}
      <div className="mb-6">
        <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg">P</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 flex flex-col items-center gap-2">
        {mainNavItems.map((item) => (
          <SidebarButton
            key={item.id}
            item={item}
            active={activeTab === item.id}
            onClick={() => onTabChange(item.id)}
          />
        ))}

        {/* Add Mini App Button */}
        <button className="mt-4 p-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors border border-dashed border-border">
          <Plus className="w-5 h-5" />
        </button>
      </nav>

      {/* Bottom Navigation */}
      <div className="flex flex-col items-center gap-2 pt-4 border-t border-border">
        {bottomNavItems.map((item) => (
          <SidebarButton
            key={item.id}
            item={item}
            active={activeTab === item.id}
            onClick={() => onTabChange(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

function SidebarButton({ 
  item, 
  active, 
  onClick 
}: { 
  item: NavItem; 
  active: boolean; 
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 p-3 rounded-lg transition-all w-14",
        active 
          ? "bg-primary/10 text-primary" 
          : "text-muted-foreground hover:text-foreground hover:bg-muted"
      )}
    >
      {item.icon}
      <span className="text-[10px] font-medium">{item.label}</span>
    </button>
  );
}
