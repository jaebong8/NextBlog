import Link from "next/link";
import "./globals.css";
import { Roboto_Flex, Noto_Sans_KR } from "next/font/google";

const noto = Noto_Sans_KR({ subsets: ["latin"], weight: "300" });
const roboto = Roboto_Flex({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${roboto.className}`}>
                <nav className="flex justify-between h-20 items-center p-5">
                    <h1 className="text-xl font-bold">
                        <Link href="/">JaeHyun's Blog</Link>
                    </h1>
                    <ul className="flex gap-4">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/posts">Posts</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                {children}
            </body>
        </html>
    );
}