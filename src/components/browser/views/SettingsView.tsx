import { 
  Settings, 
  User, 
  Shield, 
  Bell, 
  Link, 
  Key,
  ChevronRight,
  Fingerprint
} from "lucide-react";
import { Button } from "@/components/ui/button";

const settingsSections = [
  {
    title: "Account",
    items: [
      { icon: <User className="w-4 h-4" />, label: "Profile", description: "Manage your profile info" },
      { icon: <Fingerprint className="w-4 h-4" />, label: "Passkey", description: "Biometric authentication" },
      { icon: <Bell className="w-4 h-4" />, label: "Notifications", description: "Email and push notifications" },
    ]
  },
  {
    title: "Privacy",
    items: [
      { icon: <Shield className="w-4 h-4" />, label: "Data Sharing", description: "Control what data is shared" },
      { icon: <Key className="w-4 h-4" />, label: "Permissions", description: "Agent and app permissions" },
    ]
  },
  {
    title: "Integrations",
    items: [
      { icon: <Link className="w-4 h-4" />, label: "Connected Apps", description: "Gmail, Notion, Slack..." },
    ]
  },
];

export function SettingsView() {
  return (
    <div className="p-6 space-y-8 max-w-2xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <Settings className="w-6 h-6" />
          Settings
        </h1>
        <p className="text-muted-foreground mt-1">
          Manage your account and preferences
        </p>
      </div>

      {/* Settings Sections */}
      {settingsSections.map((section) => (
        <div key={section.title}>
          <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">
            {section.title}
          </h2>
          <div className="bg-card border border-border rounded-lg divide-y divide-border">
            {section.items.map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors text-left"
              >
                <div className="p-2 bg-muted rounded-lg text-muted-foreground">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Danger Zone */}
      <div>
        <h2 className="text-sm font-mono text-destructive uppercase tracking-wider mb-4">
          Danger Zone
        </h2>
        <div className="bg-card border border-destructive/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Delete Account</p>
              <p className="text-sm text-muted-foreground">
                Permanently delete your account and all data
              </p>
            </div>
            <Button variant="destructive" size="sm">
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
