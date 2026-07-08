"use client"; // 💡 クリックイベント（useState）を使うため必須です

import React, { useState } from "react";
import Link from "next/link";

interface NewsItem {
  id: string;
  date: string;
  category: "重要" | "お知らせ" | "イベント";
  title: string;
  href?: string;
  expandedContent?: React.ReactNode; // 折りたたんで表示したい詳細コンテンツ
}

const newsData: NewsItem[] = [
  {
    id: "1",
    date: "2026.07.08",
    category: "重要",
    title: "三フェス当日のタイムスケジュールが公開されました！",
    href: "/schedule", // 👈 クリックで直接スケジュールページへ
  },
  {
    id: "2",
    date: "2026.07.01",
    category: "イベント",
    title: "📅 首都圏三幸フェスティバルの日程が決定しました！",
    // 👈 クリックするとその場で浮き出てくるエリア
    expandedContent: (
      <div className="mt-4 p-5 bg-zinc-900 border-l-4 border-red-600 rounded-r-lg shadow-xl animate-fadeIn transition-all">
        <h4 className="font-bold text-sm text-gray-100 flex items-center gap-2 mb-3">
          📅 開催日程詳細
        </h4>
        <p className="text-zinc-300 text-xs md:text-sm leading-relaxed space-y-1">
          <span className="block">
            ・2026年9月8日(火)～11日(金) 三フェスweek
          </span>
          <span className="block">
            ・2026年9月14日(月) 会場設営、リハーサル
          </span>
          <span className="block text-red-400 font-bold">
            ・2026年9月15日(火) 首都圏三幸フェスティバル本番 🔥
          </span>
        </p>
      </div>
    ),
  },
];

export default function News() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleExpand = (id: string, hasContent: boolean) => {
    if (!hasContent) return;
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="news"
      className="bg-[#1a1a1a] text-white py-16 px-4 border-t border-b border-zinc-800"
    >
      <div className="max-w-4xl mx-auto">
        {/* 見出し */}
        <div className="flex items-baseline gap-4 mb-8 border-b border-red-600 pb-2">
          <h2 className="text-2xl font-bold tracking-wider">お知らせ</h2>
          <span className="text-xs text-zinc-400 tracking-widest font-mono">
            NEWS
          </span>
        </div>

        {/* 記事リスト */}
        <ul className="divide-y divide-zinc-800">
          {newsData.map((item) => {
            const hasContent = !!item.expandedContent;
            const isOpen = openId === item.id;

            return (
              <li key={item.id} className="py-2">
                {/* 1. 通常のページリンク（タイムスケジュールなど） */}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-4 px-2 transition-colors duration-200 hover:bg-zinc-900/50 rounded-lg group"
                  >
                    <span className="text-zinc-400 font-mono text-sm min-w-[85px]">
                      {item.date}
                    </span>
                    <span className="inline-block text-center text-xs font-bold px-3 py-1 rounded w-fit min-w-[70px] bg-red-600 text-white animate-pulse">
                      {item.category}
                    </span>
                    <p className="text-zinc-200 group-hover:text-red-400 transition-colors flex-1 text-sm md:text-base leading-relaxed">
                      {item.title}
                    </p>
                    <span className="hidden md:block text-zinc-600 group-hover:text-red-500 group-hover:translate-x-0.5 transition-all">
                      →
                    </span>
                  </Link>
                ) : (
                  // 2. その場でアコーディオン展開（日程決定など）
                  <div className="w-full">
                    <button
                      onClick={() => toggleExpand(item.id, hasContent)}
                      className="w-full text-left flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-4 px-2 transition-colors duration-200 hover:bg-zinc-900/50 rounded-lg focus:outline-none group"
                    >
                      <span className="text-zinc-400 font-mono text-sm min-w-[85px]">
                        {item.date}
                      </span>
                      <span className="inline-block text-center text-xs font-bold px-3 py-1 rounded w-fit min-w-[70px] bg-zinc-700 text-zinc-200">
                        {item.category}
                      </span>
                      <p className="text-zinc-200 group-hover:text-red-400 transition-colors flex-1 text-sm md:text-base leading-relaxed">
                        {item.title}
                      </p>
                      <span
                        className={`hidden md:block text-zinc-500 transition-transform duration-300 ${isOpen ? "rotate-90 text-red-500" : ""}`}
                      >
                        ▶
                      </span>
                    </button>

                    {/* 開閉アニメーションエリア */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-2 pb-4">{item.expandedContent}</div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
