"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="https://calendly.com/tarwiiga/sales?month=2024-10"
                className="btn-sm relative bg-green-200 border-green-200 border-2 py-[5px] text-black text-[16px]"
              >
                Talk to Expert
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
