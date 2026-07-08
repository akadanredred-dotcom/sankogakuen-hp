import React from "react";
import Link from "next/link";

// お知らせのデータ構造を定義
interface NewsItem {
  id: string;
  date: string;
  category: "重要" | "お知らせ" | "イベント";
  text: string;
  slug: string; // 詳細ページへのリンク用
}

const newsData: NewsItem[] = [
  {
    id: "1",
    date: "2026.07.08",
    category: "重要",
    text: "三フェス当日のタイムスケジュールが公開されました！",
    slug: "schedule-open",
  },
  {
    id: "2",
    date: "2026.07.01",
    category: "お知らせ",
    text: "赤団の応援グッズ（喧嘩上等Tシャツなど）のデザインをアップデートしました。",
    slug: "goods-update",
  },
];

export default function News() {
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
          {newsData.map((item) => (
            <li key={item.id} className="group">
              <Link
                href={`/news/${item.slug}`}
                className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-4 px-2 transition-colors duration-200 group-hover:bg-zinc-900/50 rounded-lg"
              >
                {/* 日付 */}
                <span className="text-zinc-400 font-mono text-sm">
                  {item.date}
                </span>

                {/* カテゴリタグ */}
                <span
                  className={`inline-block text-center text-xs font-bold px-3 py-1 rounded w-fit ${
                    item.category === "重要"
                      ? "bg-red-600 text-white animate-pulse"
                      : "bg-zinc-700 text-zinc-200"
                  }`}
                >
                  {item.category}
                </span>

                {/* タイトル */}
                <p className="text-zinc-200 group-hover:text-red-400 transition-colors flex-1 text-sm md:text-base leading-relaxed">
                  {item.text}
                </p>

                {/* 矢印アイコン (デスクトップ用) */}
                <span className="hidden md:block text-zinc-600 group-hover:text-red-500 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* もっと見るボタン */}
        <div className="text-center mt-8">
          <Link
            href="/news"
            className="inline-block border border-zinc-700 text-zinc-300 hover:text-white hover:border-red-600 hover:bg-red-600/10 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300"
          >
            一覧を見る →
          </Link>
        </div>
      </div>
    </section>
  );
}
