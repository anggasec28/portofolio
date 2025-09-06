import type React from "react";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

const inter = localFont({
     src: [
    {
      path: './fonts/Inter-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Inter-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
   variable: "--font-inter",
});

export const metadata = {
   title: "IamGopal 💻 | Portofolio",
   description: "Independent Security Researcher & Engineer  | 📈 Social Media Growth Specialist",
   icon: "./fonts/profil.ico",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html
         lang='en'
         suppressHydrationWarning
         className={`${inter.variable} scroll-smooth`}
      >
         <body className={inter.className}>
            <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
               <Navbar />
               {children}
            </ThemeProvider>
         </body>
      </html>
   );
}

import "./globals.css";
