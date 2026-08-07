"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type SchoolData = {
  name: string;
  color: string;
  description: string;
  image: string;
  transformOrigin: string;
  scale: string;
};

// 英語のキー（ID）を使用するように変更
const schoolSeatData: Record<string, SchoolData> = {
  tokyoSweets: {
    name: "東京スイーツ＆カフェ専門学校",
    color: "bg-purple-500 text-white",
    description: "1階：H列（全席） / 2階：半分",
    image: "/img/seat6.jpg",
    transformOrigin: "65% 20%",
    scale: "scale-110",
  },
  tokyoTachikawa: {
    name: "東京立川こども専門学校",
    color: "bg-yellow-400 text-gray-900",
    description: "1階：J列（全部） / 2階：H列（半分）",
    image: "/img/seat7.jpg",
    transformOrigin: "35% 20%",
    scale: "scale-110",
  },
  tokyoResort: {
    name: "東京リゾート＆スポーツ専門学校",
    color: "bg-blue-500 text-white",
    description: "1階：K列（全部） / 2階：J列（3分の2）",
    image: "/img/seat8.jpg",
    transformOrigin: "35% 80%",
    scale: "scale-110",
  },
  tokyoBeauty: {
    name: "東京ビューティー＆ブライダル専門学校",
    color: "bg-red-500 text-white",
    description: "1階：L列（全部） / 2階：J列（残り3分の1）、K列（2行）",
    image: "/img/seat9.jpg",
    transformOrigin: "15% 80%",
    scale: "scale-110",
  },
  tokyoMirai: {
    name: "東京みらいAI&IT専門学校",
    color: "bg-green-500 text-white",
    description: "2階：K列（全部）、L列（半分）",
    image: "/img/seat10.jpg",
    transformOrigin: "65% 80%",
    scale: "scale-110",
  },
};

export default function SeatMapPage() {
  const [selectedSchool, setSelectedSchool] = useState<string>("");
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const handleSchoolChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedSchool(value);
    setIsZoomed(!!value);
  };

  const currentData = selectedSchool ? schoolSeatData[selectedSchool] : null;
  const imageSrc = currentData ? currentData.image : "/img/seat4.jpg";

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <Link
            href="/3fes"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            ← 三フェストップページに戻る
          </Link>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
          代々木競技場 第一体育館 座席セレクション
        </h1>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <label className="font-bold text-gray-700 text-base">
            学校を選択してください：
          </label>
          <select
            value={selectedSchool}
            onChange={handleSchoolChange}
            className="border border-gray-300 rounded-xl p-3 w-full md:w-96 bg-white shadow-inner text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">-- すべての全体図を表示 --</option>
            {Object.entries(schoolSeatData).map(([key, data]) => (
              <option key={key} value={key}>
                {data.name}
              </option>
            ))}
          </select>
        </div>

        <div className="relative w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <div
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
              isZoomed && currentData ? currentData.scale : "scale-100"
            }`}
            style={{
              transformOrigin:
                isZoomed && currentData
                  ? currentData.transformOrigin
                  : "center center",
            }}
          >
            <Image
              key={imageSrc}
              src={imageSrc}
              alt="座席マップ"
              fill
              className="object-contain"
              priority
            />
          </div>

          {!selectedSchool && (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-center text-white z-10">
              <p className="text-sm md:text-base font-medium">
                上のプルダウンから学校を選ぶと、該当エリアへズームして詳細が表示されます。
              </p>
            </div>
          )}
        </div>

        {currentData && (
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-red-600 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                {currentData.name}
              </h2>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${currentData.color}`}
              >
                選択中
              </span>
            </div>
            <p className="text-gray-600 text-sm md:text-base font-medium">
              <strong className="text-gray-900">座席割り当て：</strong>{" "}
              {currentData.description}
            </p>
            <p className="text-xs text-gray-400">
              ※赤団の応援席（渋谷口南エリア周辺）の詳細な配置情報です。
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
