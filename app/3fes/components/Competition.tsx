import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CompetitionDetail() {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 font-sans gap-6">
      
      <Link 
        href="/sport"
        className="relative block w-full max-w-5xl overflow-hidden rounded-3xl shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01] cursor-pointer"
      >
        <div className="relative aspect-[16/9] w-full">
          <Image
            src="/img/sannfessiryou8.png" 
            alt="競技イメージ"
            fill
            priority
            className="object-cover"
          />
        </div>
      </Link>

      <Link
        href="/sport"
        className="bg-black text-white px-10 py-3 rounded-md font-medium text-sm hover:bg-gray-800 transition-colors shadow-sm"
      >
        詳細はこちら
      </Link>
    </section>
  );
}