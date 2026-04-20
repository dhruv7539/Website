import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  weight: "100 900",
});

const siteDescription =
  "Software Engineer specializing in distributed systems, cloud infrastructure, and AI-powered platforms. MS CS @ USC.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dhruvbhanderi.com"),
  title: "Dhruv Bhanderi — Software Engineer",
  description: siteDescription,
  keywords: [
    "Dhruv Bhanderi",
    "Software Engineer",
    "Distributed Systems",
    "Cloud Infrastructure",
    "AI Platforms",
    "React",
    "Next.js",
    "Django",
    "USC",
  ],
  authors: [{ name: "Dhruv Bhanderi" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Dhruv Bhanderi — Software Engineer",
    description: siteDescription,
    type: "website",
    url: "https://dhruvbhanderi.com",
    siteName: "Dhruv Bhanderi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Bhanderi — Software Engineer",
    description: siteDescription,
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
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
