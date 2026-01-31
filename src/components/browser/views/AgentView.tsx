import { motion } from "framer-motion";
import { Bot, Play, Pause, Settings, Plus, Zap, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const agents = [
  {
    id: "data-collector",
    name: "Data Collector",
    description: "Automatically collects and organizes data from connected services",
    status: "running",
    lastRun: "2 min ago",
    tasksCompleted: 1247,
    icon: "📥"
  },
  {
    id: "quality-scorer",
    name: "Quality Scorer",
    description: "Analyzes and scores your data for marketplace value",
    status: "idle",
    lastRun: "1 hour ago",
    tasksCompleted: 342,
    icon: "⭐"
  },
  {
    id: "ppap-minter",
    name: "PPAP Minter",
    description: "Automatically mints high-quality data as PPAPs",
    status: "paused",
    lastRun: "Yesterday",
    tasksCompleted: 42,
    icon: "🎫"
  },
];

const availableAgents = [
  { name: "Privacy Guardian", description: "Monitors and protects sensitive data", icon: "🛡️" },
  { name: "Market Analyzer", description: "Finds best selling opportunities", icon: "📊" },
  { name: "Auto Responder", description: "AI-powered email responses", icon: "✉️" },
];

export function AgentView() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <Bot className="w-6 h-6 text-secondary" />
            Agent Hub
          </h1>
          <p className="text-muted-foreground mt-1">
            Automate your data workflows with AI agents
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Agent
        </Button>
      </div>

      {/* Active Agents */}
      <div>
        <h2 className="text-lg font-semibold mb-4">My Agents</h2>
        <div className="grid gap-4">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border p-5 rounded-lg"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{agent.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold">{agent.name}</h3>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      agent.status === 'running' ? 'bg-neon-green/10 text-neon-green' :
                      agent.status === 'paused' ? 'bg-yellow-500/10 text-yellow-500' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {agent.status === 'running' && <span className="inline-block w-1.5 h-1.5 bg-neon-green rounded-full mr-1.5 animate-pulse" />}
                      {agent.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{agent.description}</p>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-6 mt-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      Last run: {agent.lastRun}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4" />
                      {agent.tasksCompleted} tasks completed
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  {agent.status === 'running' ? (
                    <Button variant="outline" size="sm" className="gap-2">
                      <Pause className="w-4 h-4" />
                      Pause
                    </Button>
                  ) : (
                    <Button size="sm" className="gap-2">
                      <Play className="w-4 h-4" />
                      Run
                    </Button>
                  )}
                  <Button variant="ghost" size="icon">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Available Agents */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Discover Agents</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {availableAgents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-card border border-border border-dashed p-5 rounded-lg hover:border-secondary transition-colors cursor-pointer group"
            >
              <div className="text-3xl mb-3">{agent.icon}</div>
              <h3 className="font-semibold group-hover:text-secondary transition-colors">
                {agent.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{agent.description}</p>
              <Button variant="ghost" size="sm" className="mt-4 gap-2 text-secondary">
                <Zap className="w-4 h-4" />
                Install
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
