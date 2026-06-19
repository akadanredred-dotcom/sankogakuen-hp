import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CompetitionDetail() {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 font-sans">
      
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
    </section>
  );
}