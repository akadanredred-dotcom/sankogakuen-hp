"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CompetitionItem {
  id: number;
  number: string;
  title: string;
  imgUrl: string;
}

const competitionList: CompetitionItem[] = [
  {
    id: 1,
    number: "1",
    title: "台風の目",
    imgUrl: "/img/akadannsiryou8.jpg",
  },
  {
    id: 2,
    number: "2",
    title: "綱取り",
    imgUrl: "/img/akadannsiryou8.jpg",
  },
  { id: 3, number: "3", title: "大玉送り", imgUrl: "/img/akadannsiryou8.jpg" },
  { id: 4, number: "4", title: "綱引き", imgUrl: "/img/akadannsiryou8.jpg" },
  {
    id: 5,
    number: "5",
    title: "いなばのしろうさぎ",
    imgUrl: "/img/akadannsiryou8.jpg",
  },
  {
    id: 6,
    number: "6",
    title: "女子リレー",
    imgUrl: "/img/akadannsiryou8.jpg",
  },
  {
    id: 7,
    number: "7",
    title: "男子リレー",
    imgUrl: "/img/akadannsiryou8.jpg",
  },
];

export default function CompetitionsListPage() {
  // データを「奇数番（左列）」と「偶数番（右列）」に分ける
  const leftColumnItems = competitionList.filter((_, index) => index % 2 === 0); // 1, 3, 5, 7
  const rightColumnItems = competitionList.filter(
    (_, index) => index % 2 !== 0,
  ); // 2, 4, 6

  // 各競技カードの共通パーツ
  const renderCard = (comp: CompetitionItem) => (
    <Link
      key={comp.id}
      href={`/competitions/${comp.id}`}
      className="bg-white overflow-hidden shadow-sm border border-gray-200 transition-all hover:shadow-md hover:scale-[1.01] flex flex-col cursor-pointer mb-6"
    >
      <div className="relative aspect-[16/10] w-full bg-gray-100">
        <Image
          src={comp.imgUrl}
          alt={comp.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-3 bg-white flex flex-col gap-2">
        <div className="self-start bg-blue-900 text-white font-black text-xs px-3 py-1 rounded-sm">
          {comp.number} {comp.title}
        </div>
      </div>
    </Link>
  );

  return (
    <main className="w-full min-h-screen bg-[#F7F7F7] font-sans pb-24">
      {/* ページヘッダー */}
      <div className="w-full bg-gradient-to-r from-red-500 to-amber-500 text-white py-12 px-6 text-center shadow-sm">
        <h1 className="text-3xl font-black tracking-widest">
          三フェス競技詳細
        </h1>
        <p className="text-sm text-orange-50 mt-2">
          タップして各競技の詳細やルールを見よう！
        </p>
      </div>

      {/* 左右の列を独立させた2カラムレイアウト */}
      <div className="max-w-[900px] mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 items-start">
          {/* 左列 (1, 3, 5, 7番目) -> 💡 md:mt-12 でPCの時だけ左側を下に下げる */}
          <div className="flex flex-col ">
            {leftColumnItems.map((comp) => renderCard(comp))}
          </div>

          {/* 右列 (2, 4, 6番目) -> 💡 上揃えスタート */}
          <div className="flex flex-col md:mt-12">
            {rightColumnItems.map((comp) => renderCard(comp))}
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-20 text-center">
          {/* 🔥 変更：大きめの斜め文字にするために枠を消してフォントサイズを大きくし、斜めに設定 */}
          <div className="inline-block text-3xl md:text-5xl font-extrabold text-red-400 transform rotate-[-5deg]">
            🔥 一緒に頑張りましょう！！！
          </div>
        </div>
      </div>
    </main>
  );
}