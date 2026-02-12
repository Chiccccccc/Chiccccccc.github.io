"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

type NavChild = { href: string; label: string };
type NavItem = { href: string; label: string; children?: NavChild[] };

const NAV: NavItem[] = [
  { href: "/", label: "HOME" },
  { href: "/people", label: "PEOPLE" },
  {
    href: "/research",
    label: "RESEARCH",
    children: [
      { href: "/research/nucleic-acid-delivery", label: "NUCLEIC ACID DELIVERY" },
      { href: "/research/artificial-systems", label: "ARTIFICIAL SYSTEMS" },
      { href: "/research/exciton-modulation", label: "EXCITON MODULATION" },
    ],
  },
  { href: "/publications", label: "PUBLICATIONS" },
  { href: "/patents", label: "PATENTS" },
  { href: "/contact", label: "CONTACT" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);

  const activeHref = useMemo(() => {
    if (!pathname) return "/";
    if (pathname === "/") return "/";

    if (pathname.startsWith("/research")) return "/research";

    const found = NAV.find((n) => n.href !== "/" && pathname.startsWith(n.href));
    return found?.href ?? "/";
  }, [pathname]);

  const isResearchActive = !!pathname?.startsWith("/research");

  return (
    <header className="siteHeader">
      <div className="headerOuter">
        <div className="headerInner">
          <Link
            href="/"
            className="brand"
            aria-label="PANDAS LAB Home"
            onClick={() => {
              setOpen(false);
              setResearchOpen(false);
            }}
          >
            <Image src="/logo.png" alt="PANDAS LAB logo" width={34} height={34} priority />
            <div className="brandName">PANDAS LAB</div>
          </Link>

          {/* Desktop nav */}
          <nav className="nav navDesktop" aria-label="Main navigation">
            {NAV.map((item) => {
              // Research dropdown
              if (item.children && item.children.length) {
                return (
                  <div key={item.href} className={`navItemHasMenu ${isResearchActive ? "active" : ""}`}>
                    <Link href={item.href} className={`navTopLink ${isResearchActive ? "active" : ""}`}>
                      {item.label}
                    </Link>

                    <div className="navMenu" role="menu" aria-label="Research submenu">
                      {item.children.map((c) => (
                        <Link key={c.href} href={c.href} className="navMenuItem">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              // Normal links
              const active = item.href === activeHref;
              return (
                <Link key={item.href} href={item.href} className={active ? "active" : undefined}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            className="navToggle"
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => {
              setOpen((v) => !v);
              if (open) setResearchOpen(false);
            }}
          >
            ☰
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <nav className="navMobile" aria-label="Mobile navigation">
            {NAV.map((item) => {
              // Research expandable group
              if (item.children && item.children.length) {
                return (
                  <div key={item.href} className="navMobileGroup">
                    <button
                      type="button"
                      className={`navMobileTop ${isResearchActive ? "active" : ""}`}
                      onClick={() => setResearchOpen((v) => !v)}
                      aria-expanded={researchOpen}
                    >
                      {item.label}
                      <span className="navMobileChevron">{researchOpen ? "▲" : "▼"}</span>
                    </button>

                    {researchOpen && (
                      <div className="navMobileSub">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className={`navMobileSubLink ${pathname === c.href ? "active" : ""}`}
                            onClick={() => {
                              setOpen(false);
                              setResearchOpen(false);
                            }}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const active = item.href === activeHref;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={active ? "active" : undefined}
                  onClick={() => {
                    setOpen(false);
                    setResearchOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
