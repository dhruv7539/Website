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

export const metadata: Metadata = {
  title: "Dhruv Bhanderi — Software Engineer",
  description:
    "Software Engineer specializing in full-stack development, cloud infrastructure, and scalable systems. MS CS @ USC.",
  keywords: [
    "Dhruv Bhanderi",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "USC",
  ],
  authors: [{ name: "Dhruv Bhanderi" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Dhruv Bhanderi — Software Engineer",
    description:
      "Software Engineer specializing in full-stack development, cloud infrastructure, and scalable systems.",
    type: "website",
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
