"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  // ページの一番上までスムーズにスクロールして戻る関数
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-8 md:px-10 lg:px-16 font-sans">
      {/* Responsive Grid Container: Stacks vertically on mobile (flex-col), 3 columns on desktop (md:grid-cols-3) */}
      <div className="mx-auto flex max-w-[1000px] flex-col gap-8 text-center sm:text-left md:grid md:grid-cols-3 md:items-start md:gap-6">
        {/* =================【左側ブロック】================= */}
        <div className="flex flex-col items-center gap-3 sm:items-start">
          {/* サイト名 */}
          <div className="text-xl font-bold tracking-wide text-black">
            赤団HP
          </div>

          {/* インスタグラム */}
          <div>
            <a
              href="https://www.instagram.com/hyouga_2026?igsh=MXZub2doM2d0NmMzdA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-800"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* =================【真ん中ブロック】================= */}
        <div className="flex flex-col items-center gap-3 text-sm md:items-center">
          <a
            href="#"
            onClick={scrollToTop}
            className="text-xs font-bold text-gray-500 transition-colors hover:text-black hover:underline"
          >
            トップへ戻る ↑
          </a>

          {/* Empty Links removed or cleaned up to keep uniform spacing */}
          <Link
            href="../information"
            className="font-medium text-gray-500 transition-colors hover:text-black hover:underline"
          >
            お問い合わせ
          </Link>
        </div>

        {/* =================【右側ブロック】================= */}
        <div className="flex flex-col items-center gap-2.5 text-sm sm:items-center md:items-end">
          <Link
            href="/"
            className="font-medium text-gray-500 transition-colors hover:text-black hover:underline"
          >
            赤団について
          </Link>
          <Link
            href="/3fes"
            className="font-medium text-gray-500 transition-colors hover:text-black hover:underline"
          >
            ３フェスについて
          </Link>
          <Link
            href="/sport"
            className="font-medium text-gray-500 transition-colors hover:text-black hover:underline"
          >
            競技一覧
          </Link>
        </div>
      </div>

      {/* コピーライト */}
      <div className="mx-auto mt-8 max-w-[1000px] border-t border-gray-100 pt-4 text-center text-xs text-gray-400">
        &copy; 2026 豹牙HP. All rights reserved.
      </div>
    </footer>
  );
}
