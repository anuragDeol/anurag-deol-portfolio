import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import VisitorCounter from "@/components/visitor-count";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anurag Deol | Portfolio",
  description: "Welcome to Anurag Deol's portfolio website. Explore my projects, skills, and experiences in software development.",
  keywords: ["Anurag Deol", "Web Developer", "Portfolio", "React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "HTML", "CSS", "Web Development", "Portfolio Website", "SDE", "Deskera", "AI"],
  authors: [{ name: "Anurag Deol" }],
  creator: "Anurag Deol",
  publisher: "Anurag Deol",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.anuragdeol.com",
    siteName: "Anurag Deol Portfolio",
    images: [
      {
        url: "https://www.anuragdeol.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anurag Deol Portfolio",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="canonical" href="https://www.anuragdeol.com" />
        <meta name="robots" content="index, follow" />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-[#151515] dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#EED3D9] absolute top-[2rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#AD88C6]"></div>
        <div className="bg-[#E3E1D9] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#7469B6]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
              <Header />
              <VisitorCounter />
              {children}
              <Footer />
              <Toaster 
                position="top-right"
                toastOptions={{
                  style: {
                    borderRadius: '50px',
                  },
                }}
              />
            </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}