import { motion } from "framer-motion";
import { ShoppingCart, TrendingUp, Star, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredPPAPs = [
  {
    id: 1,
    title: "Senior Developer AI Conversations",
    seller: "dev_master.eth",
    price: "$299",
    rating: 4.9,
    sales: 127,
    quality: "Diamond",
    category: "Development"
  },
  {
    id: 2,
    title: "Marketing Strategy Insights",
    seller: "growth_hacker.eth",
    price: "$149",
    rating: 4.7,
    sales: 89,
    quality: "Gold",
    category: "Marketing"
  },
  {
    id: 3,
    title: "Legal Document Analysis",
    seller: "legal_ai.eth",
    price: "$499",
    rating: 4.8,
    sales: 45,
    quality: "Diamond",
    category: "Legal"
  },
  {
    id: 4,
    title: "Creative Writing Samples",
    seller: "wordsmith.eth",
    price: "$79",
    rating: 4.5,
    sales: 234,
    quality: "Gold",
    category: "Creative"
  },
];

const categories = [
  "All", "Development", "Marketing", "Legal", "Creative", "Finance", "Research"
];

export function HubView() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <ShoppingCart className="w-6 h-6 text-primary" />
            Data HUB
          </h1>
          <p className="text-muted-foreground mt-1">
            Discover and trade high-quality AI training data
          </p>
        </div>
        <Button className="gap-2">
          <TrendingUp className="w-4 h-4" />
          Sell Your Data
        </Button>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-4">
        <div className="flex-1 flex items-center gap-3 bg-muted/50 border border-border rounded px-4 py-2">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-sm"
            placeholder="Search marketplace..."
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filter
        </Button>
      </div>

      {/* Categories */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((cat, index) => (
          <Button
            key={cat}
            variant={index === 0 ? "default" : "outline"}
            size="sm"
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Featured PPAPs */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Featured PPAPs</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {featuredPPAPs.map((ppap, index) => (
            <motion.div
              key={ppap.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors cursor-pointer"
            >
              {/* Preview */}
              <div className="h-32 bg-gradient-to-br from-muted to-muted/50 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl opacity-50">📊</span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    ppap.quality === 'Diamond' ? 'bg-cyan-500/10 text-cyan-400' :
                    'bg-yellow-500/10 text-yellow-500'
                  }`}>
                    ◆ {ppap.quality}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{ppap.title}</h3>
                    <p className="text-sm text-muted-foreground font-mono">{ppap.seller}</p>
                  </div>
                  <span className="text-xl font-bold text-primary">{ppap.price}</span>
                </div>

                <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    {ppap.rating}
                  </div>
                  <span>{ppap.sales} sales</span>
                  <span className="px-2 py-0.5 bg-muted rounded text-xs">{ppap.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
