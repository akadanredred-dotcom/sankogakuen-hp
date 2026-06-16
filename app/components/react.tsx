import React from "react";
import Image from "next/image";

export default function AkadanPage() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[400px] overflow-hidden">
      <Image
        src="/img/akadannsiryou4.png"
        alt="赤団 豹牙"
        fill
        priority
        className="object-cover re object-center"
      />

      <div className="absolute inset-0 bg-black/45 z-10" />

      <div className="relative z-20 flex w-full h-full items-center px-[100px]">
        <div className="ml-auto flex flex-col justify-center w-[450px] shrink-0 text-white">
          <div className="border-l-[6px] border-red-600 pl-6 py-1">
            <h2 className="text-4xl font-black mb-4 tracking-wider">三か条</h2>
            <p className="text-lg font-medium leading-relaxed text-white/80">
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
