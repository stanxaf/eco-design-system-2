import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface TypographyH1Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Typography H1 component for main page titles.
 *
 * **IMPORTANT FOR v0: This is a standalone typography component.**
 * Use this component for main page titles and primary headings.
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
 * import { TypographyH1 } from "@/components/ui/typography-h1";
 *
 * <TypographyH1>Main Page Title</TypographyH1>
 * <TypographyH1 className="text-blue-500">Custom Styled Title</TypographyH1>
 * ```
 *
 * **Alternative Utility Classes:**
 * ```tsx
 * <h1 className="font-bold text-2xl leading-6 font-sans">Main Title</h1>
 * ```
 */
export function TypographyH1({ className, children, ...props }: TypographyH1Props) {
  return (
    <h1
      className={cn(
        "font-sans font-bold text-2xl leading-6",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
