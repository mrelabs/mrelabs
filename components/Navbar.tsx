"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MRELogo from "@/components/MRELogo";

export default function Navbar() {

  const pathname = usePathname();

  // Hide navbar on landing page
  if (pathname === "/") {
    return null;
  }

  return (
    <nav className="border-b border-gray-800 bg-black px-6 py-6 text-white">

      <div className="mx-auto flex max-w-6xl items-center justify-between">

        <Link href="/">
          <MRELogo />
        </Link>


        <div className="flex gap-8 text-sm text-gray-400">

          <Link
            href="/products"
            className="transition hover:text-white"
          >
            Products
          </Link>


          <Link
            href="/vision"
            className="transition hover:text-white"
          >
            Vision
          </Link>


          <Link
            href="/about"
            className="transition hover:text-white"
          >
            About
          </Link>


          <Link
            href="/contact"
            className="transition hover:text-white"
          >
            Contact
          </Link>

        </div>

      </div>

    </nav>
  );
}