import React from "react";
import Image from "next/image";
import Link from "next/link"; // Linkをインポート

export default function SeatInfoSection() {
  return (
    <section className="w-full max-w-[1442px] mx-auto px-8 py-16 md:px-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8 relative bg-white/50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] bg-purple-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full md:w-1/2 space-y-6 relative z-10">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="w-[4px] h-8 bg-[#DC2626] block rounded-full"></span>
            <h2 className="text-3xl font-bold tracking-widest text-gray-950">
              座席について
            </h2>
          </div>
          <p className="text-gray-600 text-base md:text-lg pl-4 font-medium">
            赤団の応援席・一般観覧席のご案内
          </p>
        </div>

        <div className="pl-4 space-y-6 text-sm md:text-base text-gray-600 leading-relaxed">
          <p>
            当日の座席配置は以下の通りです。
            <br />
            赤団の応援席は、渋谷口の南エリアになります。
            <br />
          </p>

          {/* 別ページへ飛ばす Link コンポーネント */}
          <div>
            <Link
              href="/3fes/seat-map" // 正しいパスに修正済み
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#DC2626] text-white font-medium shadow-md hover:bg-[#b91c1c] transition-colors duration-200"
            >
              <span>詳しくはこちら</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[45%] relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-white/60 border border-gray-100 flex items-center justify-center z-10">
        <Image
          src="/img/sannfessiryou4.png"
          alt="座席配置図"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
