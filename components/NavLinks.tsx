"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Meetings" },
  { href: "/about", label: "About" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6">
      {links.map((link) => {
        const active =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors ${
              active
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-muted hover:text-primary"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}