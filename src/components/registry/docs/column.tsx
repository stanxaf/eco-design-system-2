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
{`<Column
  size="4"
  title="Column Title"
  footer={<div>Footer</div>}
>
  <div>Content</div>
</Column>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
