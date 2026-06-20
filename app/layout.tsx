import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lashay's Study Journal",
  description:
    "A static blog journal about web development, GitHub, deployment, and learning through building.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>

        <footer className="mt-16 border-t border-gray-200 py-8 text-center text-sm text-gray-600">
          <p>
            Follow my web development journey on{" "}
            <a
              href="https://www.linkedin.com/in/lashay-walcott-641927224/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </footer>
      </body>
    </html>
  );
}