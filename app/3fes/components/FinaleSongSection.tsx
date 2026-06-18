import React from "react";
import Image from "next/image";

export default function FinaleSongSection() {
  return (
    <section className="w-full max-w-[1442px] mx-auto px-8 py-16 md:px-24 flex flex-col md:flex-row items-center justify-between gap-8 relative bg-[#F7F7F7] overflow-hidden">
      {/* 背景の水彩画風グラデーションあしらい（Figmaの背景の再現） */}
      <div className="absolute inset-0 pointer-events-none opacity-70">
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-[-5%] w-[350px] h-[350px] bg-pink-100/40 rounded-full blur-3xl"></div>
      </div>

      {/* 左側：テキスト＆ボタンエリア */}
      <div className="w-full md:w-1/2 space-y-6 relative z-10">
        {/* タイトルと曲情報 */}
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-widest text-gray-900">
            フィナーレ曲について
          </h2>
          <div className="space-y-1 pl-1">
            <p className="text-sm md:text-base text-gray-400 font-medium tracking-wide">
              いつかこの涙が
            </p>
            <p className="text-sm md:text-base text-gray-400 font-medium tracking-wide">
              Little Glee Monster
            </p>
          </div>
        </div>

        {/* ボタングループ */}
        <div className="flex flex-wrap gap-4 pt-2">
          <button className="bg-black text-white px-8 py-3 rounded-md font-medium text-sm hover:bg-gray-800 transition-colors shadow-sm">
            曲はこちら
          </button>
          <button className="bg-[#E5E7EB] text-gray-800 px-6 py-3 rounded-md font-medium text-sm hover:bg-gray-300 transition-colors shadow-sm">
            セカンダリボタン
          </button>
        </div>
      </div>

      {/* 右側：画像エリア（Little Glee Monsterの写真用グラフィック） */}
      <div className="w-full md:w-[45%] relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100 z-10">
        <Image
          src="/img/sannfessiryou3.jpg"
          alt="Little Glee Monster"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}