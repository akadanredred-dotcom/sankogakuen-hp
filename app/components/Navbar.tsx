"use client"; // 💡 パス判定を行うため、先頭に追加します

import Link from "next/link";
import { usePathname } from "next/navigation"; // 💡 追加

export default function Navbar() {
  const pathname = usePathname(); // 💡 現在のURLパスを取得
  
  // 💡 パスが「/members」から始まる場合（メンバー詳細ページ）を判定
  const isMemberPage = pathname?.startsWith("/members");

  const navLinks = [
    { title: "トップページへ", path: "/" },
    { title: "三フェス", path: "/3fes" },
    { title: "賞状", path: "/awards" },
    { title: "競技", path: "/sport" },
  ];

  return (
    <nav 
      /* 💡 isMemberPage のときだけ背景色（bg-red-700/95）と影（shadow-md）を適用 */
      className={`absolute left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-4 md:px-10 lg:px-16 transition-colors duration-300 ${
        isMemberPage ? "bg-red-700/95 shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo Section (Top-Left) - ロゴと文字を横並びに変更 */}
      <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        {/* ロゴ画像：丸型(rounded-full)を維持しつつ、高さを少し調整 */}
        <img
          src="/img/logo.jpg"
          alt="Logo"
          className="h-10 w-10 rounded-full object-cover"
        />
        {/* ロゴの横に付ける文字テキスト */}
        <span className="text-xl font-black tracking-wider text-white lg:text-2xl">
          赤団HP
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