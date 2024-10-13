import { Background } from "@/components/background";
import Footer from "@/components/footer";
import { Navbar } from "@/components/nav";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { baseUrl } from "./sitemap";

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
      <body className="antialiased">
        <Background />
        <main className="min-w0 mx-4 mt-6 flex min-h-screen max-w-xl flex-auto flex-col px-2 md:px-0 lg:mx-auto">
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
