import type { Metadata } from "next";

import "./globals.css";

import { League_Spartan as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { JobProvider } from "@/JobContext/JobContextProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Developer Job Finder",
  description:
    "Developer Job Finder is a sleek and user-friendly app that allows developers to browse and filter job listings by category, such as Frontend, Backend, and Fullstack roles. The app provides up-to-date job listings with relevant details, making the job search process easier and more efficient.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen w-full font-sans antialiased",
          fontSans.variable
        )}
      >
        <JobProvider>{children}</JobProvider>
      </body>
    </html>
  );
}
