"use client"; // 💡 クリックイベント（useState）を使うため必須です

import React, { useState } from "react";
import Link from "next/link"; // 💡 Linkコンポーネントのエラーを回避するため、しっかりインポートを残します

interface NewsItem {
  id: string;
  date: string;
  category: "重要" | "お知らせ" | "イベント";
  title: string;
  href?: string;
  expandedContent?: React.ReactNode; // 折りたたんで表示したい詳細コンテンツ
}

const newsData: NewsItem[] = [
  // 🆕 新しく追加：代々木競技場 第一体育館 座席セレクションページへの案内お知らせ
  {
    id: "7",
    date: "2026.07.12",
    category: "重要",
    title:
      "🏟️ 代々木競技場 第一体育館の座席が公開されました！自分の学校のエリアをチェックしよう！",
    href: "/3fes/seat-map", // 👈 新しく作った座席マップページへジャンプ
  },
  // 🆕 歌の変更をお知らせする新着情報
  {
    id: "6",
    date: "2026.07.11",
    category: "お知らせ",
    title:
      "🎶 フィナーレ曲「いつかこの涙が」の歌詞や構成の一部が変更されました！詳細をチェックしよう！",
    href: "/songs", // 👈 歌詞や曲を確認できるページへ直接ジャンプします
  },
  // 🆕 新しく追加：「2026年の思い出」への案内お知らせ
  {
    id: "5",
    date: "2026.07.10",
    category: "お知らせ",
    title:
      "📸 2026年の思い出ページが公開されました！みんなの写真やエピソードを投稿しよう！",
    href: "/memories-2026", // 👈 先ほど作った2026年の思い出一覧ページへジャンプ
  },
  // 🆕 新しく追加：応援ページへの案内お知らせ
  {
    id: "4",
    date: "2026.07.09",
    category: "重要",
    title:
      "🔥 新しい応援ページが公開されました！動画や掛け声をチェックしよう！",
    href: "/support-page", // 👈 新しく作った応援ページへ直接ジャンプします
  },
  // 🆕 応援動画のお知らせ（必要に応じてページ内リンク用として残す場合）
  {
    id: "3",
    date: "2026.07.09",
    category: "お知らせ",
    title: "🎬 仲間と共に全力で挑む！応援動画カルーセルが公開されました！",
    href: "video-carousel", // 👈 URLの末尾を汚さないよう「#」を外してID名だけにします
  },
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
  const [showAll, setShowAll] = useState(false); // 💡 「もっと見る」で全件表示するかどうかの状態

  const toggleExpand = (id: string, hasContent: boolean) => {
    if (!hasContent) return;
    setOpenId(openId === id ? null : id);
  };

  // 💡 初期状態では最大3件まで表示し、「もっと見る」が押されたら全件表示する
  const displayedNews = showAll ? newsData : newsData.slice(0, 3);

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
            NEWS ({newsData.length}件)
          </span>
        </div>

        {/* 記事リスト */}
        <ul className="divide-y divide-zinc-800">
          {displayedNews.map((item) => {
            const hasContent = !!item.expandedContent;
            const isOpen = openId === item.id;

            // 💡 hrefが設定されており、かつ「/」から始まらない場合はページ内リンクと判定
            const isAnchorLink = item.href && !item.href.startsWith("/");

            // カテゴリごとの背景色を出し分け
            const categoryBg =
              item.category === "重要"
                ? "bg-red-600 text-white animate-pulse"
                : item.category === "イベント"
                  ? "bg-zinc-700 text-zinc-200"
                  : "bg-blue-600 text-white"; // お知らせ用の青

            return (
              <li key={item.id} className="py-2">
                {item.href ? (
                  isAnchorLink ? (
                    // 2-A. URLを変えずにスクロールするページ内リンク用のボタン
                    <button
                      onClick={() => {
                        const element = document.getElementById(item.href!);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="w-full text-left flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-4 px-2 transition-colors duration-200 hover:bg-zinc-900/50 rounded-lg group focus:outline-none"
                    >
                      <span className="text-zinc-400 font-mono text-sm min-w-[85px]">
                        {item.date}
                      </span>
                      <span
                        className={`inline-block text-center text-xs font-bold px-3 py-1 rounded w-fit min-w-[70px] ${categoryBg}`}
                      >
                        {item.category}
                      </span>
                      <p className="text-zinc-200 group-hover:text-red-400 transition-colors flex-1 text-sm md:text-base leading-relaxed">
                        {item.title}
                      </p>
                      <span className="hidden md:block text-zinc-600 group-hover:text-red-500 group-hover:translate-x-0.5 transition-all">
                        ↓
                      </span>
                    </button>
                  ) : (
                    // 1. 通常の別ページリンク（応援ページやタイムスケジュールなど）
                    <Link
                      href={item.href}
                      className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-4 px-2 transition-colors duration-200 hover:bg-zinc-900/50 rounded-lg group"
                    >
                      <span className="text-zinc-400 font-mono text-sm min-w-[85px]">
                        {item.date}
                      </span>
                      <span
                        className={`inline-block text-center text-xs font-bold px-3 py-1 rounded w-fit min-w-[70px] ${categoryBg}`}
                      >
                        {item.category}
                      </span>
                      <p className="text-zinc-200 group-hover:text-red-400 transition-colors flex-1 text-sm md:text-base leading-relaxed">
                        {item.title}
                      </p>
                      <span className="hidden md:block text-zinc-600 group-hover:text-red-500 group-hover:translate-x-0.5 transition-all">
                        →
                      </span>
                    </Link>
                  )
                ) : (
                  // 2-B. その場でアコーディオン展開（日程決定など）
                  <div className="w-full">
                    <button
                      onClick={() => toggleExpand(item.id, hasContent)}
                      className="w-full text-left flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-4 px-2 transition-colors duration-200 hover:bg-zinc-900/50 rounded-lg focus:outline-none group"
                    >
                      <span className="text-zinc-400 font-mono text-sm min-w-[85px]">
                        {item.date}
                      </span>
                      <span
                        className={`inline-block text-center text-xs font-bold px-3 py-1 rounded w-fit min-w-[70px] ${categoryBg}`}
                      >
                        {item.category}
                      </span>
                      <p className="text-zinc-200 group-hover:text-red-400 transition-colors flex-1 text-sm md:text-base leading-relaxed">
                        {item.title}
                      </p>
                      <span
                        className={`hidden md:block text-zinc-500 transition-transform duration-300 ${isOpen ? "rotate-95 text-red-500" : ""}`}
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

        {/* 💡 3件以上ある場合に「もっと見る」ボタンを表示して展開する */}
        {newsData.length > 3 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="py-2.5 px-8 bg-zinc-800 border border-zinc-700 text-zinc-300 font-bold rounded-lg shadow hover:bg-zinc-700 hover:text-white transition-all duration-200"
            >
              {showAll
                ? "閉じる"
                : `もっと見る (${newsData.length}件すべて表示) ↓`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
