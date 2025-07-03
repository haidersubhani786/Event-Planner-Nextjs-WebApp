"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Italianno } from "next/font/google";
import ScrollupArea from "./components/ScrollupArea";
import Navbar from "./components/Navbar";
import FooterArea from "./components/FooterArea";
import Loader from "./components/loader";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import store from "@/store/AuthStore";

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // Adjust duration as needed
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {loading && <Loader />}
        <Provider store={store}>
        {children}
        </Provider>
        <ScrollupArea />
      </body>
    </html>
  );
}
