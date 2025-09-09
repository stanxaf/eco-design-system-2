export function ColumnDocs() {
  return (
    <div className="space-y-6">
      {/* Overview */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          A flexible layout component with header, content, and footer areas. Perfect for building responsive layouts.
        </p>
      </div>

      {/* Component */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Component</h2>
        <div className="rounded-md border bg-muted/50 p-4">
          <pre className="text-sm">
{`<div className="flex">
  <Column size="4" title="Column 1" borderRight={true}>
    <div>Content 1</div>
  </Column>
  <Column size="4" title="Column 2" borderRight={true}>
    <div>Content 2</div>
  </Column>
  <Column size="4" title="Column 3" borderRight={false}>
    <div>Content 3</div>
  </Column>
</div>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
