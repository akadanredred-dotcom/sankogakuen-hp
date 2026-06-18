import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CompetitionDetail() {
  return (
    <section className="flex flex-col items-center justify-center bg-transparent py-12 px-4 font-sans">
      
      {/* 1. 画像だけのクリックエリア（黄色い帯を削除） */}
      <Link 
        href="/https://www.youtube.com/watch?v=pLeshxZIlII"
        className="relative block w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01] cursor-pointer"
      >
        <div className="relative aspect-[16/9] w-full bg-gray-100">
          <Image
            src="/img/sannfessiryou8.png" 
            alt="競技イメージ"
            fill
            priority
            className="object-cover"
          />
        </div>
      </Link>

      {/* 2. 導線ボタンエリア */}
      <div className="mt-6 text-center">
        <h4 className="text-sm font-bold text-gray-700 mb-2">
          競技詳細はこちら
        </h4>
        <button className="rounded-full bg-sky-100 border border-sky-200 px-6 py-2 text-xs font-semibold text-sky-600 shadow-sm transition-all hover:bg-sky-200 focus:outline-none">
          セカンドリボタン
        </button>
      </div>
    </section>
  );
}