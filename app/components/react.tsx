import React from "react";
import Image from "next/image";

export default function AkadanPage() {
  return (
    // 外側のコンテナ：画面ぴったり（h-screen）に固定し、はみ出しをカット
    <div className="w-full h-screen bg-black relative overflow-hidden font-sans">
      
      {/* =================================================================
          PC版 (md以上) ：画像を画面の横・縦ぴったりに合わせて絶対に途切れさせない
          ================================================================= */}
      <div className="hidden md:block w-full h-full relative select-none">
        <Image
          src="/img/hyouga111.png" /* 文字入りPC版画像 */
          alt="赤団 豹牙 PC版"
          fill
          priority
          className="object-fill" /* object-fill で画面の形に合わせて全体をぴったり収める */
        />
      </div>

      {/* =================================================================
          スマホ版 (md未満) ：縦長画面ぴったりに収める
          ================================================================= */}
      <div className="block md:hidden w-full h-full relative select-none">
        <Image
          src="/img/sannkajyou.png" /* スマホ版画像 */
          alt="赤団 三箇条 スマホ版"
          fill
          priority
          className="object-fill" /* スマホも途切れずに全画面表示 */
        />
      </div>

    </div>
  );
}