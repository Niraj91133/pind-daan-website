import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import { LanguageProvider } from "@/lib/context/LanguageContext";

export const metadata: Metadata = {
  title: "Pind Daan Sewa | Gaya Ji Digital Reception Desk & Guidance",
  description: "Gaya Ji Pind Daan, Verified Teerth Purohit coordination, Shastriya ritual guidance aur travel sahayata — ek hi pawan sthan par.",
  keywords: ["Pind Daan Gaya Ji", "Teerth Pandit Gaya", "Tripindi Shradh Gaya", "Narayan Bali", "Gaya Pind Daan Sewa", "Pitru Paksha Gaya", "Vishnupad Gaya"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FCFCFD] text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900 antialiased">
        <LanguageProvider>
          <Header />
          <main className="flex-1 pb-20 md:pb-0">
            {children}
          </main>
          <Footer />
          <MobileBottomBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
