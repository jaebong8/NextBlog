import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-20 p-5 bg-gray-300">
      <Link href="/">
        <h1 className="text-xl font-bold">JaeHyuns Blog</h1>
      </Link>
      <nav>
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
    </header>
  );
};

export default Header;
