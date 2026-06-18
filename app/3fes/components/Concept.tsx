import React from "react";
import Image from "next/image";

export default function KizunaSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-[#F7F7F7]">
      {/* 左側：画像エリア (image 4) */}
      <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-lg overflow-hidden shadow-sm bg-gray-200">
        {/* Next.jsのImageタグを使用する場合（パブリックフォルダに画像を配置してください） */}
        {
          <Image
            src="/img/kizunasain.png"
            alt="手を取り合う絆"
            fill
            className="object-cover"
            priority
          />
        }
        {/* プレースホルダー表示用 */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium"></div>
      </div>

      {/* 右側：テキストエリア */}
      <div className="w-full md:w-1/2 space-y-4 relative">
        {/* タイトル（緑の文字と左側のピンクの縦線） */}
        <div className="flex items-center gap-3">
          <span className="w-[4px] h-7 bg-[#E11D48] block rounded-full"></span>{" "}
          {/* アクセントのピンク線 */}
          <h2 className="text-3xl font-bold tracking-widest text-[#22C55E]">
            絆
          </h2>
        </div>

        {/* メインメッセージ */}
        <p className="text-xl font-bold leading-relaxed text-gray-800 pt-2">
          ひとりじゃ届かない夢も、仲間となら越えられる。
          心を繋ぎ、想いを繋ぐことで築いた絆が、勝利を掴む鍵となる。
        </p>

        {/* 右下のドット・植物系のあしらい（Figmaの右下のグラフィックの再現用） */}
        <div className="absolute bottom-[-20px] right-4 w-12 h-12 opacity-40 pointer-events-none">
          {/* 簡易的なドット柄の再現（必要なければ削除してください） */}
          <div className="grid grid-cols-4 gap-1">
            {[...Array(16)].map((_, i) => (
              <span
                key={i}
                className="w-1 h-1 bg-[#22C55E] rounded-full"
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
