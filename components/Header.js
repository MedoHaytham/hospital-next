"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NAV, SITE_NAME } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="gutter sticky top-0 z-5 flex items-center justify-between gap-4 border-b border-line bg-white py-[0.7rem]">
      <Link className="flex items-center gap-[0.6rem] text-[1.15rem] font-bold text-teal" href="/">
        <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
          <rect width="30" height="30" rx="8" fill="#0E5E5C" />
          <path d="M12 7h6v5h5v6h-5v5h-6v-5H7v-6h5z" fill="#fff" />
        </svg>
        {SITE_NAME}
      </Link>
      <button
        className="size-11 cursor-pointer rounded-[10px] border border-line bg-transparent lg:hidden"
        aria-expanded={open}
        aria-controls="nav"
        aria-label="القائمة"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="relative m-auto block h-0.5 w-5 bg-ink before:absolute before:-top-[6px] before:left-0 before:block before:h-0.5 before:w-5 before:bg-ink before:content-[''] after:absolute after:top-[6px] after:left-0 after:block after:h-0.5 after:w-5 after:bg-ink after:content-['']" />
      </button>
      <nav
        id="nav"
        className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col gap-[0.3rem] border-b border-line bg-white px-5 py-[0.8rem] lg:static lg:flex lg:flex-row lg:border-0 lg:bg-transparent lg:p-0`}
        aria-label="القائمة الرئيسية"
      >
        {NAV.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={pathname === l.href ? "page" : undefined}
            className="whitespace-nowrap rounded-full px-[0.9rem] py-[0.4rem] hover:bg-mint aria-[current]:bg-teal aria-[current]:text-white"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
