import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";

const stats = [
  { label: "Total Data Value", value: "$2,847", change: "+12.4%", positive: true },
  { label: "PPAP Minted", value: "42", change: "+3", positive: true },
  { label: "Active Agents", value: "5", change: "0", positive: true },
  { label: "Vault Size", value: "1.2 GB", change: "+120 MB", positive: true },
];

const quickActions = [
  { icon: <Shield className="w-5 h-5" />, label: "Connect Service", description: "Gmail, Notion, Slack..." },
  { icon: <TrendingUp className="w-5 h-5" />, label: "Mint PPAP", description: "Turn data into assets" },
  { icon: <Zap className="w-5 h-5" />, label: "Run Agent", description: "Automate data tasks" },
];

export function HomeView() {
  return (
    <div className="p-6 space-y-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <h1 className="text-3xl font-bold">Welcome back 👋</h1>
        <p className="text-muted-foreground">
          Your AI data is safe and earning value. Here's what's happening.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card border border-border p-4 rounded-lg"
          >
            <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
              {stat.label}
            </p>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-2xl font-bold">{stat.value}</span>
              <span className={`text-xs ${stat.positive ? 'text-neon-green' : 'text-destructive'}`}>
                {stat.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg text-left hover:border-primary transition-colors group"
            >
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                {action.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium group-hover:text-primary transition-colors">
                  {action.label}
                </h3>
                <p className="text-sm text-muted-foreground">{action.description}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="bg-card border border-border rounded-lg divide-y divide-border">
          {[
            { action: "Gmail synced", time: "2 min ago", icon: "📧" },
            { action: "PPAP #42 minted", time: "1 hour ago", icon: "🎫" },
            { action: "Agent completed task", time: "3 hours ago", icon: "🤖" },
            { action: "Notion connected", time: "Yesterday", icon: "📝" },
          ].map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-4">
              <span className="text-xl">{activity.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-medium">{activity.action}</p>
              </div>
              <span className="text-xs text-muted-foreground">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
