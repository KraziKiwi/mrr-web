import type { Metadata } from "next";
import { Inter, Montserrat, Michroma } from "next/font/google";
import "./globals.css";
import VisualEditing from "../components/VisualEditing";

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
  title: "Marlborough Roadside Recovery",
  description: "Marlborough Roadside Recovery and Towing. Fast, reliable towing and roadside assistance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${michroma.variable}`}>
      <body className="antialiased">
        {children}
        <VisualEditing />
      </body>
    </html>
  );
}
