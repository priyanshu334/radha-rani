import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Define a CSS variable for Inter
  display: "swap", // Fallback font displayed while Inter loads
});

export const metadata: Metadata = {
  title: "Next.js App with Inter Font",
  description: "Using Inter font globally in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
