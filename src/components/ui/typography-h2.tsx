import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface TypographyH2Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Typography H2 component for section headers.
 *
 * **IMPORTANT FOR v0: This is a standalone typography component.**
 * Use this component for section headers and secondary headings.
 *
 * **Font Setup Required:**
 * This component uses Inter font. Add this to your layout.tsx:
 * ```tsx
 * import { Inter } from "next/font/google";
 * 
 * const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
 * 
 * export default function RootLayout({ children }) {
 *   return (
 *     <html className={inter.variable}>
 *       <body>{children}</body>
 *     </html>
 *   );
 * }
 * ```
 *
 * **Styling:**
 * - Font: Inter (via --font-sans CSS variable)
 * - Font size: text-2xl (24px)
 * - Font weight: font-bold (700)
 * - Line height: leading-6 (1.5)
 *
 * **v0 Usage:**
 * ```tsx
 * import { TypographyH2 } from "@/components/ui/typography-h2";
 *
 * <TypographyH2>Section Header</TypographyH2>
 * <TypographyH2 className="text-blue-500">Custom Styled Header</TypographyH2>
 * ```
 *
 * **Alternative Utility Classes:**
 * ```tsx
 * <h2 className="font-sans font-bold text-2xl leading-6">Section Header</h2>
 * ```
 */
export function TypographyH2({ className, children, ...props }: TypographyH2Props) {
  return (
    <h2
      className={cn(
        "font-sans font-bold text-2xl leading-6",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
