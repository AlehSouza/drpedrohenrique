import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/app/ui/footer";
import Menu from "@/app/ui/menu";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doutor Pedro Henrique Paolucci",
  description: "Doutor Pedro Henrique Paolucci (CRM 211.102 / RQE 111.971 / TEOT 19.153) Especialista em saúde do joelho: tecnologia avançada e acolhimento humano para devolver movimento e qualidade de vida ao seu dia a dia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} antialiased bg-background`}>
        <Menu />

        <main className="min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
