import type { Metadata } from "next";
import "./globals.css";
import { baseUrl } from "./sitemap";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/footer";
import { Navbar } from "@/components/nav";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Christoph Waffler",
  description: "Christoph Waffler",
  openGraph: {
    title: "Christoph Waffler",
    description: "Christoph Waffler",
    url: baseUrl,
    siteName: "Christoph Waffler",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(GeistSans.variable, GeistMono.variable)}>
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w0 mt-6 flex flex-col px-2 md:px-0">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
