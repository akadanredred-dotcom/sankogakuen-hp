import React from "react";
import Image from "next/image";

export default function AkadanPage() {
  return (
    <div className="relative w-full h-screen bg-[#b9b7ae] overflow-hidden font-sans">
      {/* PC版 */}
      <Image
        src="/img/hyouga.jpg"
        alt="赤団 豹牙"
        fill
        priority
        className="hidden md:block object-contain z-10"
      />

      {/* スマホ版 */}
      <div className="absolute inset-0 flex items-center justify-center md:hidden z-10">
        <Image
          src="/img/sannkajyou.png"
          alt="赤団 三箇条"
          width={700}
          height={1200}
          priority
          className="w-[95%] h-[98%] object-contain"
        />
      </div>

      {/* 黒いオーバーレイ */}
    </div>
  );
}
