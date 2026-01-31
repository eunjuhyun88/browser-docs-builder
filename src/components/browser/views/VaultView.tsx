import { motion } from "framer-motion";
import { 
  Database, 
  Lock, 
  FileText, 
  MessageSquare, 
  Code, 
  Music,
  MoreVertical,
  Search,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";

const dataCategories = [
  { 
    id: "conversations", 
    icon: <MessageSquare className="w-5 h-5" />, 
    label: "Conversations", 
    count: 1247,
    size: "342 MB",
    color: "text-neon-blue"
  },
  { 
    id: "documents", 
    icon: <FileText className="w-5 h-5" />, 
    label: "Documents", 
    count: 89,
    size: "156 MB",
    color: "text-neon-orange"
  },
  { 
    id: "code", 
    icon: <Code className="w-5 h-5" />, 
    label: "Code", 
    count: 234,
    size: "78 MB",
    color: "text-neon-green"
  },
  { 
    id: "media", 
    icon: <Music className="w-5 h-5" />, 
    label: "Media", 
    count: 56,
    size: "624 MB",
    color: "text-neon-purple"
  },
];

const recentData = [
  { 
    title: "ChatGPT conversation about React patterns",
    source: "ChatGPT",
    date: "Today",
    quality: "Gold",
    encrypted: true
  },
  { 
    title: "Meeting notes - Q4 Planning",
    source: "Notion",
    date: "Yesterday",
    quality: "Silver",
    encrypted: true
  },
  { 
    title: "Email thread with team",
    source: "Gmail",
    date: "2 days ago",
    quality: "Bronze",
    encrypted: true
  },
];

export function VaultView() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <Database className="w-6 h-6 text-primary" />
            Data Vault
          </h1>
          <p className="text-muted-foreground mt-1">
            Your encrypted data storage. Only you can access.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-neon-green/10 border border-neon-green/30 rounded text-neon-green text-sm">
            <Lock className="w-4 h-4" />
            <span>Encrypted</span>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-4">
        <div className="flex-1 flex items-center gap-3 bg-muted/50 border border-border rounded px-4 py-2">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-sm"
            placeholder="Search your vault..."
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filter
        </Button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {dataCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card border border-border p-4 rounded-lg hover:border-primary/50 transition-colors cursor-pointer"
          >
            <div className={`p-2 w-fit rounded-lg bg-muted ${category.color}`}>
              {category.icon}
            </div>
            <h3 className="font-medium mt-3">{category.label}</h3>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-2xl font-bold">{category.count}</span>
              <span className="text-xs text-muted-foreground">{category.size}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Data */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Data</h2>
          <Button variant="ghost" size="sm">View All</Button>
        </div>
        
        <div className="bg-card border border-border rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Title
                </th>
                <th className="text-left p-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Source
                </th>
                <th className="text-left p-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Quality
                </th>
                <th className="text-left p-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Date
                </th>
                <th className="w-10"></th>
              </tr>
            </thead>
            <tbody>
              {recentData.map((item, index) => (
                <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/50">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      {item.encrypted && <Lock className="w-3 h-3 text-neon-green" />}
                      <span className="font-medium">{item.title}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">{item.source}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      item.quality === 'Gold' ? 'bg-yellow-500/10 text-yellow-500' :
                      item.quality === 'Silver' ? 'bg-gray-400/10 text-gray-400' :
                      'bg-orange-600/10 text-orange-600'
                    }`}>
                      {item.quality}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">{item.date}</td>
                  <td className="p-4">
                    <button className="p-1 hover:bg-muted rounded">
                      <MoreVertical className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
