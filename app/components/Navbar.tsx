// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { title: "三フェス", path: "/3fes" },
    { title: "賞状", path: "/awards" },
    { title: "競技", path: "/sport" },
  ];

  return (
    <nav className="absolute left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-4 md:px-10 lg:px-16">
      {/* Logo Section (Top-Left) */}
      <Link href="/" className="flex items-center gap-3">
        {/* Red circle logo placeholder */}
        <span className="text-xl font-bold text-white lg:text-2xl">
          <img
            src="/img/logo.jpg"
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
        </span>
      </Link>

      {/* Nav Links and Button (Top-Right) */}
      <div className="flex items-center gap-6 lg:gap-10">
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="text-base font-semibold text-white hover:text-gray-200"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Contact CTA Button */}
        <button className="rounded-full border border-gray-400 bg-white px-5 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-200 md:text-base">
          お問い合わせ
        </button>
      </div>
    </nav>
  );
}
