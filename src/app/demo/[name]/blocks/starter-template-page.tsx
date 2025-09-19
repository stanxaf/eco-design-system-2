/**
 * Starter Template Page Component
 * 
 * A minimal starter page that provides:
 * - Clean, simple layout without panel wrapper
 * - Centered placeholder content
 * - Ready-to-customize foundation
 * 
 * This component serves as a blank slate for users to build upon,
 * featuring the complete layout structure with sidebar and header.
 * 
 * @returns JSX element with simple layout and placeholder content
 */
export default function StarterTemplatePage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4">Starter Template</h1>
        <p className="text-muted-foreground text-lg">
          Your content goes here
        </p>
      </div>
    </div>
  );
}
