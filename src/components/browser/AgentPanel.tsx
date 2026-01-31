import { useState } from "react";
import { X, Send, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AgentPanelProps {
  onClose: () => void;
}

const suggestions = [
  "Analyze my data quality",
  "Find selling opportunities",
  "Summarize today's activity",
  "Mint my best conversations",
];

export function AgentPanel({ onClose }: AgentPanelProps) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{role: 'user' | 'agent', content: string}>>([
    { role: 'agent', content: "Hello! I'm your PlayArts Agent. I can help you manage your data, find selling opportunities, and automate tasks. What would you like to do?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (!message.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', content: message }]);
    setMessage("");
    setIsLoading(true);
    
    // Simulate response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'agent', 
        content: "I'm analyzing your request. This is a demo response - in production, I would process your data and provide actionable insights!" 
      }]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="w-80 lg:w-96 bg-card border-l border-border flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-secondary" />
          <span className="font-semibold">Agent</span>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-muted rounded">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] p-3 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
              }`}
            >
              <p className="text-sm">{msg.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted p-3 rounded-lg">
              <Loader2 className="w-4 h-4 animate-spin" />
            </div>
          </div>
        )}
      </div>

      {/* Suggestions */}
      {messages.length === 1 && (
        <div className="px-4 pb-4">
          <p className="text-xs text-muted-foreground mb-2">Suggestions</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setMessage(suggestion)}
                className="text-xs px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-full transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask your agent..."
            className="flex-1 bg-muted/50 border border-border rounded px-4 py-2 text-sm outline-none focus:border-secondary"
          />
          <Button size="icon" onClick={handleSend} disabled={!message.trim()}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
