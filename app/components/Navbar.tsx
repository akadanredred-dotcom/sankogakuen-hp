"use client"; // 💡 クライアントコンポーネントとして指定

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    // 💡 メンバーページ、またはお問い合わせページ（大文字・小文字どちらも考慮）かどうかを判定
    const isColoredPage =
        pathname?.startsWith("/members") ||
        pathname?.toLowerCase().startsWith("/information");

    const navLinks = [
        { title: "トップページへ", path: "/" },
        { title: "三フェス", path: "/3fes" },
        { title: "賞状", path: "/awards" },
        { title: "競技", path: "/sport" },
    ];

    return (
        <nav
            /* 💡 ページ背景と同化しないよう、対象ページでは「真っ白な背景（bg-white）」とシャドウを適用 */
            className={`absolute left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-4 md:px-10 lg:px-16 transition-all duration-300 ${
                isColoredPage
                    ? "bg-white shadow-sm border-b border-gray-100 text-gray-900"
                    : "bg-transparent text-white"
            }`}
        >
            {/* Logo Section (Top-Left) */}
            <Link
                href="/"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
                <img
                    src="/img/logo.jpg"
                    alt="Logo"
                    className="h-10 w-10 rounded-full object-cover"
                />
                {/* 💡 ページのタイプに合わせて、テキストの色を白と黒(gray-900)で自動切替 */}
                <span
                    className={`text-xl font-black tracking-wider lg:text-2xl transition-colors duration-300 ${
                        isColoredPage ? "text-gray-900" : "text-white"
                    }`}
                >
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
                            /* 💡 リンクの文字色も、背景に合わせて自動切替 */
                            className={`text-base font-semibold transition-colors duration-300 ${
                                isColoredPage
                                    ? "text-gray-600 hover:text-red-600"
                                    : "text-white hover:text-gray-200"
                            }`}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>

                {/* Contact CTA Button */}
                <Link href="/Information">
                    {/* 💡 ナビが白背景の時は、ボタンを赤くして目立たせる（通常時は白ボタン） */}
                    <button
                        className={`rounded-full border px-5 py-2 text-sm font-semibold transition md:text-base ${
                            isColoredPage
                                ? "border-red-600 bg-red-600 text-white hover:bg-red-700 shadow-sm"
                                : "border-gray-400 bg-white text-gray-900 hover:bg-gray-200"
                        }`}
                    >
                        お問い合わせ
                    </button>
                </Link>
            </div>
        </nav>
    );
}
