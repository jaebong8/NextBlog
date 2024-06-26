import Link from "next/link";
import "./globals.css";
import { Roboto_Flex, Noto_Sans_KR } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const noto = Noto_Sans_KR({ subsets: ["latin"], weight: "300" });
const roboto = Roboto_Flex({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="flex flex-col w-full mx-auto max-w-screen-2xl">
        <Header />
        <main className="bg-gray-100 grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
