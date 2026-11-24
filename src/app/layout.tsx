import type { Metadata } from "next";
import { Inter, Montserrat, Michroma } from "next/font/google";
import "./globals.css";
import VisualEditing from "../components/VisualEditing";
import CustomCursor from "../components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
});

const michroma = Michroma({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-michroma',
});

export const metadata: Metadata = {
  title: "Future Proof Projects",
  description: "Renovations, additions and new builds across Perth and the South West. Built to look forward to.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${michroma.variable}`}>
      <body className="antialiased">
        <CustomCursor />
        {children}
        <VisualEditing />
      </body>
    </html>
  );
}
