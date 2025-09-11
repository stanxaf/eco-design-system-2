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
  <div>Content</div>
</Panel>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
