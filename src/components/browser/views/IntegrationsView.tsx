import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Plug, 
  Check, 
  ExternalLink, 
  Search,
  Sparkles,
  Bot,
  Workflow,
  Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

type IntegrationCategory = "llm" | "agent" | "automation" | "all";

interface Integration {
  id: string;
  name: string;
  description: string;
  logo: string;
  category: IntegrationCategory;
  connected: boolean;
  popular?: boolean;
}

const integrations: Integration[] = [
  // LLM Providers
  { id: "openai", name: "OpenAI", description: "GPT-4, GPT-5 및 DALL-E 모델 연동", logo: "🤖", category: "llm", connected: false, popular: true },
  { id: "anthropic", name: "Anthropic", description: "Claude 3.5 및 Claude 4 모델 연동", logo: "🧠", category: "llm", connected: true, popular: true },
  { id: "google-ai", name: "Google AI", description: "Gemini Pro, Gemini Ultra 모델 연동", logo: "🔮", category: "llm", connected: false, popular: true },
  { id: "cohere", name: "Cohere", description: "Command, Embed 모델 연동", logo: "💎", category: "llm", connected: false },
  { id: "mistral", name: "Mistral AI", description: "Mistral Large, Medium 모델 연동", logo: "🌀", category: "llm", connected: false },
  { id: "groq", name: "Groq", description: "초고속 LPU 추론 엔진", logo: "⚡", category: "llm", connected: false },
  
  // Agent Frameworks
  { id: "langchain", name: "LangChain", description: "LLM 애플리케이션 개발 프레임워크", logo: "🦜", category: "agent", connected: false, popular: true },
  { id: "crewai", name: "CrewAI", description: "멀티 에이전트 협업 프레임워크", logo: "👥", category: "agent", connected: false, popular: true },
  { id: "autogpt", name: "AutoGPT", description: "자율 AI 에이전트 플랫폼", logo: "🚀", category: "agent", connected: false },
  { id: "langflow", name: "Langflow", description: "비주얼 LLM 플로우 빌더", logo: "🔗", category: "agent", connected: false },
  { id: "llamaindex", name: "LlamaIndex", description: "데이터 인덱싱 및 검색 프레임워크", logo: "🦙", category: "agent", connected: false },
  { id: "semantic-kernel", name: "Semantic Kernel", description: "Microsoft AI 오케스트레이션 SDK", logo: "🎯", category: "agent", connected: false },
  
  // Automation Tools
  { id: "zapier", name: "Zapier", description: "5000+ 앱 연동 자동화 플랫폼", logo: "⚙️", category: "automation", connected: true, popular: true },
  { id: "make", name: "Make", description: "비주얼 워크플로우 자동화 도구", logo: "🔧", category: "automation", connected: false, popular: true },
  { id: "n8n", name: "n8n", description: "오픈소스 워크플로우 자동화", logo: "🔄", category: "automation", connected: false },
  { id: "pipedream", name: "Pipedream", description: "개발자 친화적 통합 플랫폼", logo: "📡", category: "automation", connected: false },
  { id: "activepieces", name: "Activepieces", description: "노코드 자동화 빌더", logo: "🧩", category: "automation", connected: false },
];

const categories = [
  { id: "all", label: "전체", icon: <Plug className="w-4 h-4" /> },
  { id: "llm", label: "LLM 제공자", icon: <Brain className="w-4 h-4" /> },
  { id: "agent", label: "에이전트 프레임워크", icon: <Bot className="w-4 h-4" /> },
  { id: "automation", label: "자동화 도구", icon: <Workflow className="w-4 h-4" /> },
];

export function IntegrationsView() {
  const [activeCategory, setActiveCategory] = useState<IntegrationCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [connectingId, setConnectingId] = useState<string | null>(null);

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesCategory = activeCategory === "all" || integration.category === activeCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleConnect = (id: string) => {
    setConnectingId(id);
    // Simulate connection process
    setTimeout(() => {
      setConnectingId(null);
    }, 2000);
  };

  const connectedCount = integrations.filter(i => i.connected).length;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <Plug className="w-6 h-6 text-secondary" />
            Integrations
          </h1>
          <p className="text-muted-foreground mt-1">
            AI 에이전트 및 자동화 서비스와 연결하세요
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1">
            <Check className="w-3 h-3 text-neon-green" />
            {connectedCount} 연결됨
          </Badge>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="서비스 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id as IntegrationCategory)}
              className="gap-2"
            >
              {category.icon}
              <span className="hidden sm:inline">{category.label}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Popular Section */}
      {activeCategory === "all" && !searchQuery && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-secondary" />
            <h2 className="font-semibold">인기 서비스</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations
              .filter((i) => i.popular)
              .map((integration, index) => (
                <motion.div
                  key={integration.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card border border-border p-4 rounded-lg hover:border-secondary/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{integration.logo}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold truncate">{integration.name}</h3>
                        {integration.connected && (
                          <span className="flex items-center gap-1 text-xs text-neon-green">
                            <Check className="w-3 h-3" />
                            연결됨
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {integration.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    {integration.connected ? (
                      <Button variant="outline" size="sm" className="flex-1">
                        설정
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => handleConnect(integration.id)}
                        disabled={connectingId === integration.id}
                      >
                        {connectingId === integration.id ? "연결 중..." : "연결"}
                      </Button>
                    )}
                    <Button variant="ghost" size="icon">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      )}

      {/* All Integrations */}
      <div>
        {(activeCategory !== "all" || searchQuery) && (
          <h2 className="font-semibold mb-4">
            {activeCategory === "all" ? "검색 결과" : categories.find(c => c.id === activeCategory)?.label}
          </h2>
        )}
        {activeCategory === "all" && !searchQuery && (
          <h2 className="font-semibold mb-4">모든 서비스</h2>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredIntegrations.map((integration, index) => (
            <motion.div
              key={integration.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              className={`bg-card border p-4 rounded-lg transition-colors ${
                integration.connected 
                  ? "border-neon-green/30 bg-neon-green/5" 
                  : "border-border hover:border-secondary/50"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">{integration.logo}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold truncate">{integration.name}</h3>
                    <Badge variant="outline" className="text-[10px] px-1.5">
                      {integration.category === "llm" ? "LLM" : 
                       integration.category === "agent" ? "Agent" : "Auto"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {integration.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                {integration.connected ? (
                  <>
                    <Button variant="outline" size="sm" className="flex-1 gap-1">
                      <Check className="w-3 h-3 text-neon-green" />
                      연결됨
                    </Button>
                    <Button variant="ghost" size="sm">
                      설정
                    </Button>
                  </>
                ) : (
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => handleConnect(integration.id)}
                    disabled={connectingId === integration.id}
                  >
                    {connectingId === integration.id ? "연결 중..." : "연결하기"}
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredIntegrations.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <Plug className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>검색 결과가 없습니다</p>
          </div>
        )}
      </div>
    </div>
  );
}
