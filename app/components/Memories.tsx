"use client";

import React from "react";
import Image from "next/image";

export default function MemoriesSection() {
  return (
    // 全体のコンテナ（ミフェスセクションと統一感のあるサイズ・フォント設定）
    <section className="relative w-full h-[720px] mx-auto overflow-hidden flex items-center justify-center font-sans">
      {/* 背景のグラフィック画像（共通の背景イラスト） */}
      <Image
        src="/img/akadansiryou5.png" 
        alt="赤団 背景"
        fill
        priority
        className="object-cover"
      />

      {/* 💡 前面のテキストカード（ミフェスとデザインを統一） */}
      <div className="relative z-10 w-[90%] max-w-[1000px] px-8 py-12 md:px-16 md:py-10 text-center bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm border border-white/40">
        
        {/* セクションタイトル */}
        <h2 className="text-[#FA2D66] text-4xl md:text-5xl font-black tracking-widest mb-4">
          2025の思い出
        </h2>
        <p className="text-xs text-gray-400 font-bold tracking-widest uppercase mb-8">
          Memories of Three Fes
        </p>

        {/* 💡 Figmaのアルバム感を伝えるシンプルな説明文 */}
        <p className="text-[#333333] text-sm md:text-base font-bold leading-relaxed max-w-[760px] mx-auto mb-10 tracking-wider">
          熱い声援、流した悔し涙、そして最高の笑顔。仲間と共に駆け抜けたあの眩しい一瞬一瞬を、写真とエピソードで振り返ります。赤団が一つになった、最高の記憶がここに。
        </p>

        {/* ボタン */}
        <div className="flex justify-center">
          <a
            href="/memories" // ← ギャラリーや詳細ページへの遷移先
            className="
              inline-block
              px-12
              py-4
              bg-[#FA2D66]
              text-white
              text-base
              font-bold
              rounded-2xl
              shadow-md
              hover:bg-[#d61f52]
              hover:shadow-lg
              hover:scale-105
              transition-all
              duration-200
              tracking-widest
              text-center
            "
          >
            思い出の写真を見る
          </a>
        </div>
      </div>
    </section>
  );
}