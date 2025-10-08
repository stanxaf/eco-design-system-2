import { cn } from "@/lib/utils";

interface LogoContainerProps {
  logo: React.ComponentType;
  className?: string;
}

export function LogoContainer({
  logo: LogoComponent,
  className = "size-4",
}: LogoContainerProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>svg]:max-h-full [&>svg]:max-w-full [&>svg]:h-auto [&>svg]:w-auto",
        className,
      )}
    >
      <LogoComponent />
    </div>
  );
}

