"use client";

import React from "react";
import Image from "next/image";

interface AwardItem {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  primaryBtnText: string;
  secondaryBtnText: string;
}

// Figmaのデザインをベースにした賞のデータ
const awardsList: AwardItem[] = [
  {
    id: 1,
    title: "パフォーマンス賞",
    description: "このセクションのサブ見出しは、長くても短くても構いません。圧倒的な表現力と団結力で会場を魅了したパフォーマンスに贈られます。",
    imgUrl: "/img/akadannsiryou8.jpg", // 適切な画像パスに変更してください
    primaryBtnText: "ボタン",
    secondaryBtnText: "セカンダリボタン",
  },
  {
    id: 2,
    title: "演舞賞",
    description: "このセクションのサブ見出しは、長くても短くても構いません。伝統と熱意を背負い、一糸乱れぬ完璧な演舞を披露した団に贈られます。",
    imgUrl: "/img/akadannsiryou8.jpg",
    primaryBtnText: "ボタン",
    secondaryBtnText: "セカンダリボタン",
  },
  {
    id: 3,
    title: "絆賞",
    description: "このセクションのサブ見出しは、長くても短くても構いません。お互いを支え合い、最も熱いチームワークと友情を見せてくれた団に贈られます。",
    imgUrl: "/img/akadannsiryou8.jpg",
    primaryBtnText: "ボタン",
    secondaryBtnText: "セカンダリボタン",
  },
];

export default function AwardsMain() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-16 md:gap-24">
      {awardsList.map((award, index) => {
        // 偶数番目の項目は左右を反転させる判定
        const isEven = index % 2 === 1;

        return (
          <div
            key={award.id}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
              isEven ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* テキストエリア */}
            <div className="flex-1 w-full space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-wide border-b-2 border-red-500 pb-2 inline-block">
                {award.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed pt-2">
                {award.description}
              </p>
              
              {/* Figma通りの2つのボタン */}
              <div className="flex items-center gap-3 pt-4">
                <button className="bg-black text-white text-xs font-bold px-4 py-2 rounded shadow-sm hover:bg-gray-800 transition-colors">
                  {award.primaryBtnText}
                </button>
                <button className="bg-white text-gray-700 text-xs font-bold px-4 py-2 rounded border border-gray-300 shadow-sm hover:bg-gray-50 transition-colors">
                  {award.secondaryBtnText}
                </button>
              </div>
            </div>

            {/* 画像エリア */}
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] w-full bg-gray-100 rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <Image
                  src={award.imgUrl}
                  alt={award.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}