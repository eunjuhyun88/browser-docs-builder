import { motion } from "framer-motion";
import { Wallet, ArrowUpRight, ArrowDownLeft, Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const transactions = [
  { type: "in", label: "PPAP Sale", amount: "+$149.00", time: "2 hours ago", from: "buyer123.eth" },
  { type: "out", label: "Agent Fee", amount: "-$2.50", time: "5 hours ago", to: "Protocol" },
  { type: "in", label: "PPAP Sale", amount: "+$299.00", time: "Yesterday", from: "data_buyer.eth" },
  { type: "in", label: "Staking Reward", amount: "+$12.40", time: "2 days ago", from: "Protocol" },
];

export function WalletView() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <Wallet className="w-6 h-6 text-primary" />
          Wallet
        </h1>
        <p className="text-muted-foreground mt-1">
          Manage your earnings and transactions
        </p>
      </div>

      {/* Balance Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-primary/20 via-card to-secondary/20 border border-border rounded-lg p-6"
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Total Balance</p>
            <p className="text-4xl font-bold mt-2">$2,847.00</p>
            <p className="text-sm text-neon-green mt-1">+$458.40 this month</p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" className="gap-2">
              <ArrowUpRight className="w-4 h-4" />
              Send
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowDownLeft className="w-4 h-4" />
              Receive
            </Button>
          </div>
        </div>

        {/* Wallet Address */}
        <div className="mt-6 p-3 bg-muted/50 rounded flex items-center justify-between">
          <span className="font-mono text-sm">0x7a3B...4f2D</span>
          <div className="flex gap-2">
            <button className="p-1.5 hover:bg-muted rounded transition-colors">
              <Copy className="w-4 h-4 text-muted-foreground" />
            </button>
            <button className="p-1.5 hover:bg-muted rounded transition-colors">
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-card border border-border p-4 rounded-lg">
          <p className="text-xs text-muted-foreground font-mono uppercase">Total Earnings</p>
          <p className="text-2xl font-bold mt-2">$4,521</p>
        </div>
        <div className="bg-card border border-border p-4 rounded-lg">
          <p className="text-xs text-muted-foreground font-mono uppercase">PPAPs Sold</p>
          <p className="text-2xl font-bold mt-2">23</p>
        </div>
        <div className="bg-card border border-border p-4 rounded-lg">
          <p className="text-xs text-muted-foreground font-mono uppercase">Staked vePLART</p>
          <p className="text-2xl font-bold mt-2">1,250</p>
        </div>
      </div>

      {/* Transactions */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <div className="bg-card border border-border rounded-lg divide-y divide-border">
          {transactions.map((tx, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-4"
            >
              <div className={`p-2 rounded-full ${
                tx.type === 'in' ? 'bg-neon-green/10' : 'bg-destructive/10'
              }`}>
                {tx.type === 'in' ? (
                  <ArrowDownLeft className="w-4 h-4 text-neon-green" />
                ) : (
                  <ArrowUpRight className="w-4 h-4 text-destructive" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-medium">{tx.label}</p>
                <p className="text-sm text-muted-foreground">
                  {tx.from ? `From: ${tx.from}` : `To: ${tx.to}`}
                </p>
              </div>
              <div className="text-right">
                <p className={`font-medium ${
                  tx.type === 'in' ? 'text-neon-green' : 'text-destructive'
                }`}>
                  {tx.amount}
                </p>
                <p className="text-sm text-muted-foreground">{tx.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
