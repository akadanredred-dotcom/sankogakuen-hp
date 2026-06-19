import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AwardSection() {
  return (
    <section className="w-full max-w-[1442px] min-h-[400px] mx-auto px-8 py-16 md:px-24 flex flex-col md:flex-row items-center justify-between gap-8 relative bg-white/50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-[250px] h-[250px] bg-pink-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full md:w-1/2 space-y-6 relative z-10">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="w-[4px] h-8 bg-[#3B82F6] block rounded-full"></span>
            <h2 className="text-3xl font-bold tracking-widest text-[#EA580C]">
              賞について
            </h2>
          </div>
          <p className="text-gray-600 text-base md:text-lg pl-4">
            表彰は全部で3つあります
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pl-4">
          <Link
            href="/awards"
            className="bg-black text-white px-6 py-3 rounded-md font-medium text-sm hover:bg-gray-800 transition-colors shadow-sm"
          >
            詳しくはこちら
          </Link>
        </div>
      </div>

      <div className="w-full md:w-[45%] relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-white/80 border border-gray-100 flex items-center justify-center z-10">
        <Image
          src="/img/sannfessiryou2.jpg"
          alt="賞について"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
