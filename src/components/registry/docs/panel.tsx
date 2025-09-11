export function PanelDocs() {
  return (
    <div className="space-y-6">
      {/* Overview */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          A flexible panel component with header, content, and footer areas. Perfect for building responsive layouts and organizing content.
        </p>
      </div>

      {/* Component */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Component</h2>
        <div className="rounded-md border bg-muted/50 p-4">
          <pre className="text-sm">
{`<Panel
  size="full"
  title="Sample Panel"
  borderRight={false}
  footer={<span>Status: Active</span>}
>
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Panel Content</h3>
    <p className="text-muted-foreground">
      This is a sample panel with header, content, and footer areas.
    </p>
    <div className="flex gap-2">
      <button className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm">
        Action
      </button>
      <button className="px-3 py-1 border border-input rounded text-sm">
        Secondary
      </button>
    </div>
  </div>
</Panel>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
