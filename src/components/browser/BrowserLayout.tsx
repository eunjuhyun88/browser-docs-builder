import { useState } from "react";
import { BrowserTopBar } from "./BrowserTopBar";
import { BrowserSidebar } from "./BrowserSidebar";
import { BrowserStatusBar } from "./BrowserStatusBar";
import { AgentPanel } from "./AgentPanel";
import { HomeView } from "./views/HomeView";
import { VaultView } from "./views/VaultView";
import { AgentView } from "./views/AgentView";
import { HubView } from "./views/HubView";
import { WalletView } from "./views/WalletView";
import { SettingsView } from "./views/SettingsView";

export function BrowserLayout() {
  const [activeTab, setActiveTab] = useState("home");
  const [agentPanelOpen, setAgentPanelOpen] = useState(false);

  const renderView = () => {
    switch (activeTab) {
      case "home":
        return <HomeView />;
      case "vault":
        return <VaultView />;
      case "agent":
        return <AgentView />;
      case "hub":
        return <HubView />;
      case "wallet":
        return <WalletView />;
      case "settings":
        return <SettingsView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      {/* Top Bar */}
      <BrowserTopBar onAgentClick={() => setAgentPanelOpen(!agentPanelOpen)} />

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <BrowserSidebar activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Center View */}
        <main className="flex-1 overflow-y-auto">
          {renderView()}
        </main>

        {/* Agent Panel */}
        {agentPanelOpen && (
          <AgentPanel onClose={() => setAgentPanelOpen(false)} />
        )}
      </div>

      {/* Status Bar */}
      <BrowserStatusBar />
    </div>
  );
}
