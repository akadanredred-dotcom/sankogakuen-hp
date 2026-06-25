import React from "react";
import Image from "next/image";

export default function AkadanPage() {
    return (
        <div className="relative w-full h-screen max-h-[86.6667vh] overflow-hidden font-sans">
            <Image
                src="/img/akadannsiryou4.png"
                alt="赤団 豹牙"
                fill
                priority
                className="object-cover object-center "
            />

            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* 
        全体の配置コンテナ 
        md:pr-[12%] で右側の余白を少し広げ、よりバランスを取りやすくしています
      */}
            <div className="relative z-20 flex w-full h-full items-center justify-center md:justify-end md:pr-[12%] p-4 pt-24">
                {/* コンテナの最大幅を小さく指定（max-w-sm / md:max-w-lg） */}
                <div className="w-full max-w-sm md:max-w-lg text-white flex flex-col justify-center items-start text-left">
                    {/* 左側の赤い線：文字が小さくなったため、線の太さと左の余白（pl）を細めに調整 */}
                    <div className="border-l-[6px] md:border-l-[12px] border-red-600 pl-3 md:pl-8 py-1 w-full">
                        {/* 「三か条」：スマホ text-2xl、PC text-4xl に縮小（旧: 3xl / 6xl） */}
                        <h2 className="text-2xl md:text-4xl font-black mb-2 md:mb-4 tracking-[0.1em] leading-none drop-shadow-2xl">
                            三か条
                        </h2>

                        {/* 本文：スマホ text-lg、PC text-2xl に縮小（旧: xl / 4xl） */}
                        <p className="text-lg md:text-2xl font-black leading-relaxed text-white/95 tracking-[0.1em] drop-shadow-xl break-words">
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
