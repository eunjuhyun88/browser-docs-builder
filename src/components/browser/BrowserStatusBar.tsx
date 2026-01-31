export function BrowserStatusBar() {
  return (
    <div className="h-8 bg-card border-t border-border flex items-center justify-between px-4 text-xs font-mono">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">Network:</span>
          <span className="text-foreground">Arbitrum</span>
          <span className="w-2 h-2 rounded-full bg-neon-green animate-status-pulse" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">Gas:</span>
          <span className="text-neon-green">Sponsored</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">Sync:</span>
          <span className="text-foreground">✓ 2 min ago</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">Vault:</span>
          <span className="text-foreground">🔒 Encrypted</span>
        </div>
      </div>
    </div>
  );
}
