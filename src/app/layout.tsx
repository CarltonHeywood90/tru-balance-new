import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LocalBusinessSchema from '@/components/LocalBusinessSchema';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400", // Regular weight
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tru Balance | Massage & Reiki in Orem, Utah",
    template: "%s | Tru Balance Bodywork"
  },
  description: "Professional medical massage, Reiki, and postural alignment in Orem, Utah. Holistic healing designed to restore your body's natural balance.",
  keywords: ["Massage Orem", "Reiki Utah", "Postural Alignment", "Gua Sha Utah", "Soft Tissue Therapy"],
  openGraph: {
    title: "Tru Balance | Massage & Reiki",
    description: "Holistic healing and alignment services in Orem, Utah.",
    url: "https://trubalancebodywork.com",
    siteName: "Tru Balance Bodywork",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${montserrat.variable} font-sans`}>
        <LocalBusinessSchema />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}