import React from "react";
import Image from "next/image";

export default function AkadanPage() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden font-sans">
      {/* PC版 */}
      <div className="hidden md:block relative w-full h-full">
        <Image
          src="/img/hyouga.png"
          alt="赤団 豹牙"
          fill
          priority
          className="object-cover object-center z-10"
        />

        {/* PC版 文字オーバーレイ（背景画像の表示領域＝画面いっぱいに合わせて絶対配置） */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            fontFamily:
              "'Shippori Mincho', 'Zen Antique', 'Noto Serif JP', serif",
          }}
        >
          {/* スローガン（上部の赤筆ストロークの下の余白帯） */}
          <p
            className="absolute text-red-900 font-bold"
            style={{
              top: "11.5%",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "clamp(16px, 1.5vw, 26px)",
              letterSpacing: "0.65em",
              whiteSpace: "nowrap",
              textIndent: "0.65em",
              textShadow:
                "0 1px 0 rgba(255,255,255,0.5), 0 2px 4px rgba(0,0,0,0.15)",
            }}
          >
            スローガン
          </p>

          {/* 和気藹々 大見出し（3つの赤丸の真ん中、赤丸と黄色ストロークの間の余白） */}
          <h1
            className="absolute text-[#8a1010] font-black"
            style={{
              top: "29%",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "clamp(34px, 3.6vw, 58px)",
              letterSpacing: "0.32em",
              textIndent: "0.32em",
              whiteSpace: "nowrap",
              lineHeight: 1,
              textShadow:
                "0 2px 0 rgba(255,255,255,0.35), 0 4px 10px rgba(0,0,0,0.25)",
            }}
          >
            和気藹々
          </h1>

          {/* 3箇条 ラベル（黄色ストロークのすぐ下、見出しとして少し大きめ） */}
          <p
            className="absolute text-[#3b2a1a] font-extrabold"
            style={{
              top: "43.5%",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "clamp(20px, 2.1vw, 34px)",
              letterSpacing: "0.5em",
              textIndent: "0.5em",
              whiteSpace: "nowrap",
              textShadow: "0 1px 2px rgba(255,255,255,0.4)",
            }}
          >
            3箇条
          </p>

          {/* 区切り線（3箇条の下に細い飾り線） */}
          <div
            className="absolute bg-[#8a1010]/70"
            style={{
              top: "50.5%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "5%",
              height: "2px",
            }}
          />

          {/* ①笑顔（左の赤丸の真下） */}
          <div
            className="absolute flex flex-col items-center text-center"
            style={{
              top: "54%",
              left: "10%",
              transform: "translateX(-50%)",
              width: "27%",
            }}
          >
            <div className="flex items-center justify-center gap-[10px]">
              <span
                className="flex items-center justify-center rounded-full bg-[#8a1010] text-white font-black border-2 border-white/90"
                style={{
                  width: "clamp(28px, 2.6vw, 42px)",
                  height: "clamp(28px, 2.6vw, 42px)",
                  fontSize: "clamp(15px, 1.4vw, 22px)",
                  boxShadow:
                    "0 2px 5px rgba(0,0,0,0.35), inset 0 1px 1px rgba(255,255,255,0.3)",
                }}
              >
                1
              </span>
              <span
                className="text-[#241a10] font-extrabold"
                style={{
                  fontSize: "clamp(19px, 1.85vw, 30px)",
                  letterSpacing: "0.22em",
                  textIndent: "0.22em",
                }}
              >
                笑顔
              </span>
            </div>
            <p
              className="mt-[10px] text-[#3a2c1d] font-medium leading-[1.85]"
              style={{
                fontSize: "clamp(11px, 0.95vw, 16px)",
                letterSpacing: "0.04em",
              }}
            >
              仲間とたくさん笑い合い、
              <br />
              思いやりを忘れない。
              <br />
              笑顔あふれる団に！
            </p>
          </div>

          {/* ②元気（中央の赤丸の真下） */}
          <div
            className="absolute flex flex-col items-center text-center"
            style={{
              top: "54%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "27%",
            }}
          >
            <div className="flex items-center justify-center gap-[10px]">
              <span
                className="flex items-center justify-center rounded-full bg-[#8a1010] text-white font-black border-2 border-white/90"
                style={{
                  width: "clamp(28px, 2.6vw, 42px)",
                  height: "clamp(28px, 2.6vw, 42px)",
                  fontSize: "clamp(15px, 1.4vw, 22px)",
                  boxShadow:
                    "0 2px 5px rgba(0,0,0,0.35), inset 0 1px 1px rgba(255,255,255,0.3)",
                }}
              >
                2
              </span>
              <span
                className="text-[#241a10] font-extrabold"
                style={{
                  fontSize: "clamp(19px, 1.85vw, 30px)",
                  letterSpacing: "0.22em",
                  textIndent: "0.22em",
                }}
              >
                元気
              </span>
            </div>
            <p
              className="mt-[10px] text-[#3a2c1d] font-medium leading-[1.85]"
              style={{
                fontSize: "clamp(11px, 0.95vw, 16px)",
                letterSpacing: "0.04em",
              }}
            >
              大きな声・全力の応援！
              <br />
              最後まであきらめず、
              <br />
              みんなで盛り上げる！
            </p>
          </div>

          {/* ③メリハリ（右の赤丸の真下、豹の爪の範囲を避けてやや左寄り） */}
          <div
            className="absolute flex flex-col items-center text-center"
            style={{
              top: "54%",
              left: "89.5%",
              transform: "translateX(-50%)",
              width: "27%",
            }}
          >
            <div className="flex items-center justify-center gap-[10px]">
              <span
                className="flex items-center justify-center rounded-full bg-[#8a1010] text-white font-black border-2 border-white/90"
                style={{
                  width: "clamp(28px, 2.6vw, 42px)",
                  height: "clamp(28px, 2.6vw, 42px)",
                  fontSize: "clamp(15px, 1.4vw, 22px)",
                  boxShadow:
                    "0 2px 5px rgba(0,0,0,0.35), inset 0 1px 1px rgba(255,255,255,0.3)",
                }}
              >
                3
              </span>
              <span
                className="text-[#241a10] font-extrabold"
                style={{
                  fontSize: "clamp(19px, 1.85vw, 30px)",
                  letterSpacing: "0.14em",
                  textIndent: "0.14em",
                }}
              >
                メリハリ
              </span>
            </div>
            <p
              className="mt-[10px] text-[#3a2c1d] font-medium leading-[1.85]"
              style={{
                fontSize: "clamp(11px, 0.95vw, 16px)",
                letterSpacing: "0.04em",
              }}
            >
              やるときは全力でやる。
              <br />
              聞くときはしっかり聞く。
              <br />
              けじめをつけて行動する！
            </p>
          </div>

          {/* 一番下：まとめの一文（説明文の下〜人物シルエットの頭上の余白に自然配置） */}
          <p
            className="absolute font-extrabold text-[#fdf3dc]"
            style={{
              top: "73%",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "clamp(16px, 1.55vw, 25px)",
              letterSpacing: "0.08em",
              whiteSpace: "nowrap",
              textShadow:
                "0 1px 2px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            3つを大切にして、和気藹々をつくり上げよう！
          </p>
        </div>
      </div>

      {/* スマホ版 */}
      <div className="absolute inset-0 flex items-center justify-center md:hidden z-10">
        <Image
          src="/img/sannkajyou.png"
          alt="赤団 三箇条"
          width={700}
          height={1200}
          priority
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}