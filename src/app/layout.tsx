import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['400', '700']
 });

export const metadata: Metadata = {
  title: "Landing Page Itaú",
  description: "Tela de apresentação do banco Itaú",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="https://fav.farm/🖥" />
      </head>
      <body className={lato.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
