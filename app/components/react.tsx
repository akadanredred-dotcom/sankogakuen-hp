import React from "react";
import Image from "next/image";

export default function AkadanPage() {
  return (
    // 外側のコンテナ：背景を黒に指定
    <div className="w-full min-h-screen bg-black flex items-center justify-center overflow-hidden font-sans">
      
      {/* =================================================================
          PC版 (md以上)
          画像の比率 (1384x765 ≒ 1.8:1) を完全に固定して文字ズレを防ぐ
          ================================================================= */}
      <div className="hidden md:block relative w-full max-w-[1384px] aspect-[1384/765] mx-auto select-none">
        {/* 背景画像 */}
        <Image
          src="/img/hyouga.png"
          alt="赤団 豹牙"
          fill
          priority
          className="object-contain z-10"
        />

        {/* 文字オーバーレイ */}
        <div
          className="absolute inset-0 z-20 pointer-events-none text-[#241a10]"
          style={{
            fontFamily: "'Shippori Mincho', 'Zen Antique', 'Noto Serif JP', serif",
          }}
        >
          {/* 【左上】スローガン（画像の左上の位置に固定） */}
          <p
            className="absolute font-black text-[#a61c1c]"
            style={{
              top: "21.5%",
              left: "48%",
              transform: "translate(-50%, -50%)",
              fontSize: "clamp(16px, 2vw, 28px)",
              letterSpacing: "0.6em",
              textIndent: "0.6em",
              whiteSpace: "nowrap",
            }}
          >
            スローガン
          </p>

          {/* 【中央大見出し】和気藹々 */}
          <h1
            className="absolute font-black text-[#8a1010]"
            style={{
              top: "35%",
              left: "48%",
              transform: "translate(-50%, -50%)",
              fontSize: "clamp(36px, 5.2vw, 76px)",
              letterSpacing: "0.35em",
              textIndent: "0.35em",
              whiteSpace: "nowrap",
              lineHeight: 1,
              textShadow: "1px 1px 0px rgba(255,255,255,0.5)",
            }}
          >
            和気藹々
          </h1>

          {/* 【赤線の真上】3箇条 */}
          <p
            className="absolute font-black text-black"
            style={{
              top: "49.5%",
              left: "49.5%",
              transform: "translate(-50%, -50%)",
              fontSize: "clamp(20px, 2.8vw, 38px)",
              letterSpacing: "0.4em",
              textIndent: "0.4em",
              whiteSpace: "nowrap",
            }}
          >
            3箇条
          </p>


          {/* -----------------------------------------------------------------
              ① 笑顔ブロック（左側の赤丸・黄線エリア）
              ----------------------------------------------------------------- */}
          {/* 黄色線の上：タイトル */}
          <div
            className="absolute flex items-center justify-center gap-[6px]"
            style={{ top: "67.5%", left: "11.5%", transform: "translate(-50%, -50%)" }}
          >
            {/* 赤丸の中に入れたい 1 */}
            <span
              className="flex items-center justify-center rounded-full bg-[#8a1010] text-white font-black border border-white/80"
              style={{
                width: "clamp(20px, 2.4vw, 32px)",
                height: "clamp(20px, 2.4vw, 32px)",
                fontSize: "clamp(11px, 1.3vw, 16px)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
              }}
            >
              1
            </span>
            <span className="font-extrabold text-[#241a10]" style={{ fontSize: "clamp(16px, 1.8vw, 24px)" }}>
              笑顔
            </span>
          </div>
          {/* 赤丸の下：説明文 */}
          <p
            className="absolute font-medium leading-[1.7] text-[#3a2c1d]"
            style={{
              top: "73%",
              left: "11.5%",
              transform: "translateX(-50%)",
              width: "20%",
              fontSize: "clamp(10px, 1.05vw, 14px)",
            }}
          >
            仲間とたくさん笑い合い、
            <br />
            思いやりを忘れない。
            <br />
            笑顔あふれる団に！
          </p>


          {/* -----------------------------------------------------------------
              ② 元気ブロック（中央の赤丸・黄線エリア）
              ----------------------------------------------------------------- */}
          {/* 黄色線の上：タイトル */}
          <div
            className="absolute flex items-center justify-center gap-[6px]"
            style={{ top: "67.5%", left: "49.5%", transform: "translate(-50%, -50%)" }}
          >
            {/* 赤丸の中に入れたい 2 */}
            <span
              className="flex items-center justify-center rounded-full bg-[#8a1010] text-white font-black border border-white/80"
              style={{
                width: "clamp(20px, 2.4vw, 32px)",
                height: "clamp(20px, 2.4vw, 32px)",
                fontSize: "clamp(11px, 1.3vw, 16px)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
              }}
            >
              2
            </span>
            <span className="font-extrabold text-[#241a10]" style={{ fontSize: "clamp(16px, 1.8vw, 24px)" }}>
              元気
            </span>
          </div>
          {/* 赤丸の下：説明文 */}
          <p
            className="absolute font-medium leading-[1.7] text-[#3a2c1d]"
            style={{
              top: "73%",
              left: "49.5%",
              transform: "translateX(-50%)",
              width: "20%",
              fontSize: "clamp(10px, 1.05vw, 14px)",
            }}
          >
            大きな声・全力の応援！
            <br />
            最後まであきらめず、
            <br />
            みんなで盛り上げる！
          </p>


          {/* -----------------------------------------------------------------
              ③ メリハリブロック（右側の赤丸・黄線エリア）
              ----------------------------------------------------------------- */}
          {/* 黄色線の上：タイトル */}
          <div
            className="absolute flex items-center justify-center gap-[6px]"
            style={{ top: "67.5%", left: "87.5%", transform: "translate(-50%, -50%)" }}
          >
            {/* 赤丸の中に入れたい 3 */}
            <span
              className="flex items-center justify-center rounded-full bg-[#8a1010] text-white font-black border border-white/80"
              style={{
                width: "clamp(20px, 2.4vw, 32px)",
                height: "clamp(20px, 2.4vw, 32px)",
                fontSize: "clamp(11px, 1.3vw, 16px)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
              }}
            >
              3
            </span>
            <span className="font-extrabold text-[#241a10]" style={{ fontSize: "clamp(16px, 1.8vw, 24px)" }}>
              メリハリ
            </span>
          </div>
          {/* 赤丸の下：説明文 */}
          <p
            className="absolute font-medium leading-[1.7] text-[#3a2c1d]"
            style={{
              top: "73%",
              left: "87.5%",
              transform: "translateX(-50%)",
              width: "20%",
              fontSize: "clamp(10px, 1.05vw, 14px)",
            }}
          >
            やるときは全力でやる。
            <br />
            聞くときはしっかり聞く。
            <br />
            けじめをつけて行動する！
          </p>


          {/* 【最下部】まとめの一文（応援団シルエットの手前、黒帯の少し上） */}
          <p
            className="absolute font-extrabold text-[#fdf3dc] text-center"
            style={{
              bottom: "13.5%",
              left: "49.5%",
              transform: "translateX(-50%)",
              fontSize: "clamp(14px, 1.8vw, 24px)",
              letterSpacing: "0.08em",
              whiteSpace: "nowrap",
              textShadow: "0 2px 4px rgba(0,0,0,0.9), 0 1px 1px rgba(0,0,0,0.5)",
            }}
          >
            3つを大切にして、和気藹々をつくり上げよう！
          </p>
        </div>
      </div>

      {/* =================================================================
          スマホ版 (md未満)
          ================================================================= */}
      <div className="block md:hidden w-full relative">
        <Image
          src="/img/sannkajyou.png"
          alt="赤団 三箇条"
          width={720}
          height={1280}
          priority
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}