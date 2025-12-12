import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LIVE-ADDIS | Empowering Ethiopian Youth",
    template: "%s | LIVE-ADDIS",
  },
  description:
    "Livelihood Improvement for Vulnerable Ethiopians (LIVE)-ADDIS: Empowering youth through skills development, entrepreneurship, and health awareness in Addis Ababa.",
  keywords: [
    "LIVE-ADDIS",
    "youth empowerment",
    "Ethiopia",
    "Addis Ababa",
    "vocational training",
    "APHEET",
    "skills development",
    "entrepreneurship",
    "NGO Ethiopia",
  ],
  authors: [{ name: "LIVE-ADDIS" }],
  creator: "LIVE-ADDIS",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://liveaddis.org",
    siteName: "LIVE-ADDIS",
    title: "LIVE-ADDIS | Empowering Ethiopian Youth",
    description:
      "Empowering vulnerable Ethiopian youth through vocational training, entrepreneurship, and health awareness.",
    images: [
      {
        url: "/logo-1.png",
        width: 1200,
        height: 630,
        alt: "LIVE-ADDIS Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LIVE-ADDIS | Empowering Ethiopian Youth",
    description:
      "Empowering vulnerable Ethiopian youth through vocational training, entrepreneurship, and health awareness.",
    images: ["/logo-1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo-1.png",
    shortcut: "/logo-1.png",
    apple: "/logo-1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
