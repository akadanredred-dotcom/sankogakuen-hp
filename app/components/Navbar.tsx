"use client"; // 💡 クライアントコンポーネントとして指定

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

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
        <>
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

                {/* Desktop Nav Links and Actions (Hidden on Mobile) */}
                <div className="hidden items-center gap-6 md:flex lg:gap-10">
                    <div className="flex items-center gap-8">
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
                    <Link href="/information">
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

                {/* Hamburger Button (Visible on Mobile Only) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="relative z-50 block md:hidden p-2 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <div className="flex w-6 flex-col items-end justify-center gap-1.5">
                        <span
                            className={`h-0.5 w-6 rounded-full transform transition duration-300 ${
                                isOpen
                                    ? "rotate-45 translate-y-2 bg-gray-900"
                                    : isColoredPage
                                      ? "bg-gray-900"
                                      : "bg-white"
                            }`}
                        />
                        <span
                            className={`h-0.5 w-4 rounded-full transition duration-300 ${
                                isOpen
                                    ? "opacity-0"
                                    : isColoredPage
                                      ? "bg-gray-900"
                                      : "bg-white"
                            }`}
                        />
                        <span
                            className={`h-0.5 rounded-full transform transition duration-300 ${
                                isOpen
                                    ? "-rotate-45 -translate-y-2 w-6 bg-gray-900"
                                    : isColoredPage
                                      ? "bg-gray-900 w-5"
                                      : "bg-white w-5"
                            }`}
                        />
                    </div>
                </button>
            </nav>

            {/* Mobile Drawer Overlay */}
            <div
                className={`fixed inset-y-0 right-0 z-100 w-4/5 max-w-sm transform bg-white p-8 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex h-full flex-col justify-between pt-16">
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.path}
                                onClick={() => setIsOpen(false)}
                                className="text-xl font-bold text-gray-800 hover:text-red-600 border-b border-gray-100 pb-2"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-auto">
                        <Link
                            href="/information"
                            onClick={() => setIsOpen(false)}
                        >
                            <button className="w-full rounded-full bg-red-600 py-3 text-center text-base font-bold text-white shadow-md hover:bg-red-700 transition">
                                お問い合わせ
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Dark background tint when menu is open */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
