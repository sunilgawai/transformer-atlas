import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transformer Atlas — an interactive field guide",
  description: "A visual, interactive explanation of how Transformer models think.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
