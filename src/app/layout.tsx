import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yassin El Behi",
  description: "Yassin El Behi - Web Developer Portfolio",
  icons: {
    icon: "/profile.jpg",
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
        {/* Use Google Fonts link instead of next/font to avoid Turbopack internal imports */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Fira+Code:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans">
        {children}
        <footer className="bg-slate-950 text-slate-300 py-8 border-t border-slate-800">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm md:text-base">
              © {new Date().getFullYear()} Yassin Behi. Built with Next.js.
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Designed to showcase my web development portfolio and CV.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
