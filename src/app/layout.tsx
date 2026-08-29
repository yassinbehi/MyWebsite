import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yassinbehi.com"),
  title: "Yassin El Behi — Web & AI Developer",
  description:
    "Freelance web and AI developer. Software engineering student and certified AI developer (Claude Code Partner Program), building web applications, AI features and dashboards for real business needs.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Yassin El Behi — Web & AI Developer",
    description:
      "I build web and AI products businesses actually use. Web apps, AI features and dashboards, delivered end to end.",
    type: "website",
    images: ["/profile.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yassin El Behi — Web & AI Developer",
    description: "I build web and AI products businesses actually use.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts via link rather than next/font, to avoid Turbopack internal imports */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Inter+Tight:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
