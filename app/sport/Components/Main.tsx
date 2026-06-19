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
  { id: 1, number: "1", title: "詳しくはこちらへ", imgUrl: "/img/akadannsiryou8.png" },
  { id: 2, number: "2", title: "詳しくはこちらへ", imgUrl: "/img/akadannsiryou8.png" },
  { id: 3, number: "3", title: "詳しくはこちらへ", imgUrl: "/img/akadannsiryou8.png" },
  { id: 4, number: "4", title: "詳しくはこちらへ", imgUrl: "/img/akadannsiryou8.png" },
  { id: 5, number: "5", title: "詳しくはこちらへ", imgUrl: "/img/akadannsiryou8.png" },
  { id: 6, number: "6", title: "詳しくはこちらへ", imgUrl: "/img/akadannsiryou8.png" },
  { id: 7, number: "7", title: "詳しくはこちらへ", imgUrl: "/img/akadannsiryou8.png" },
];

export default function Main() {
  const leftColumnItems = competitionList.filter((_, index) => index % 2 === 0);
  const rightColumnItems = competitionList.filter((_, index) => index % 2 !== 0);

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
    <div className="max-w-[900px] mx-auto px-6 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 items-start">
        <div className="flex flex-col">
          {leftColumnItems.map((comp) => renderCard(comp))}
        </div>
        <div className="flex flex-col md:mt-12">
          {rightColumnItems.map((comp) => renderCard(comp))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-24 mb-12 text-center overflow-hidden py-4">
        <div className="inline-block text-4xl md:text-6xl font-black text-amber-500 tracking-wider select-none transform -rotate-[5deg] drop-shadow-sm">
          🔥 一緒に頑張りましょう！！！
        </div>
      </div>
    </div>
  );
}