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

      {/* justify-center で画面中央〜右寄りに配置し、
        p-4 や md:p-12 で画面端に文字がぶつからないよう余白を確保 
      */}
      <div className="relative z-20 flex w-full h-full items-center justify-center md:justify-end md:pr-[10%] p-4 pt-24">
        {/* max-w-full を指定して、親要素より外側に文字が飛び出さないように制限 */}
        <div className="w-full max-w-md md:max-w-xl text-white flex flex-col justify-center items-start text-left">
          
          {/* 左側の赤い線（border）の太さと余白をスマホ用に最適化 */}
          <div className="border-l-[8px] md:border-l-[16px] border-red-600 pl-4 md:pl-10 py-2 w-full">
            
            {/* 「三か条」：スマホでは text-3xl、PCでは text-6xl */}
            <h2 className="text-3xl md:text-6xl font-black mb-3 md:mb-6 tracking-[0.1em] leading-none drop-shadow-2xl">
              三か条
            </h2>
            
            {/* 本文：スマホでは text-xl、PCでは text-4xl に縮小。
              whitespace-nowrap を削除し、画面幅が狭いときは自動で改行されるように変更。
            */}
            <p className="text-xl md:text-4xl font-black leading-relaxed text-white/95 tracking-[0.1em] drop-shadow-xl break-words">
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