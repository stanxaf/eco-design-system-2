import { Inter } from "next/font/google";

/**
 * Font configuration for Typography components.
 * 
 * This file provides the Inter font configuration that v0 needs
 * to properly render typography components with the correct font.
 * 
 * **For v0 Usage:**
 * 1. Import this font configuration in your layout.tsx
 * 2. Apply the font variable to your html element
 * 3. Use the Typography components - they will automatically use Inter
 * 
 * **Example Layout Setup:**
 * ```tsx
 * import { InterSans } from "@/lib/fonts";
 * 
 * export default function RootLayout({ children }) {
 *   return (
 *     <html className={InterSans.variable}>
 *       <body>{children}</body>
 *     </html>
 *   );
 * }
 * ```
 */
export const InterSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

/**
 * Font CSS variables for Typography components.
 * 
 * These variables ensure consistent font rendering across all typography components.
 * The Inter font is applied through the --font-sans CSS variable.
 */
export const fontVariables = {
  "--font-sans": "var(--font-sans), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
} as const;
