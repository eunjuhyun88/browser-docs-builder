import { motion } from "framer-motion";

const stats = [
  { label: "VAULTS CREATED:", value: "1,247,893", color: "text-primary" },
  { label: "PPAP MINTED:", value: "38,421", color: "text-primary" },
  { label: "DATA TRADED:", value: "92,156", color: "text-primary" },
  { label: "UPTIME:", value: "99.98%", color: "text-foreground" },
  { label: "LATENCY:", value: "7.2ms AVG", color: "text-foreground" },
];

export function SystemStatus() {
  return (
    <motion.div 
      className="bg-card border border-border p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-muted-foreground">├─</span>
          <span className="text-xs font-mono text-muted-foreground tracking-widest">SYSTEM STATUS</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neon-green animate-status-pulse" />
          <span className="text-xs font-mono text-neon-green">READY</span>
        </div>
      </div>

      <div className="space-y-3">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm font-mono text-muted-foreground">{stat.label}</span>
            <span className={`text-sm font-mono ${stat.color}`}>{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="h-2 bg-muted rounded-sm overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-neon-green to-neon-green/60"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
        <div className="flex justify-end mt-2">
          <span className="text-xs font-mono text-neon-green">READY</span>
        </div>
      </div>
    </motion.div>
  );
}
