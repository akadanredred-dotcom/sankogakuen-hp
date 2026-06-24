import React from "react";
import Image from "next/image";

export default function AkadanPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      <Image
        src="/img/akadannsiryou4.png"
        alt="赤団 豹牙"
        fill
        priority
        className="object-cover object-center scale-105"
      />

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 flex w-full h-full items-center justify-end pr-4 md:pr-[2%] pl-6 pt-32">
        <div className="shrink-0 text-white flex flex-col justify-center items-start text-left">
          <div className="border-l-[32px] md:border-l-[48px] border-red-600 pl-8 md:pl-16 py-4">
            <h2 className="text-7xl md:text-[20rem] font-black mb-4 md:mb-8 tracking-[0.2em] leading-none drop-shadow-2xl">
              三か条
            </h2>
            <p className="text-5xl md:text-[11rem] font-black leading-[1.25] text-white/95 tracking-[0.15em] drop-shadow-xl whitespace-nowrap">
              1. 笑顔
              <br />
              2. 元気
              <br />
              3. メリハリ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}