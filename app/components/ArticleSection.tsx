import Image from "next/image";

export default function SanFesSection() {
  return (
    // 全体のコンテナ（Figma通りの 1440px × 720px）
    <section className="relative w-full max-w-[1440px] h-[720px] mx-auto overflow-hidden">
      
      {/* 背景画像（ポップアップの白枠やイラストがすべて含まれている一枚絵） */}
      <Image
        src="/img/akadansiryou3.png"
        alt="赤団 背景"
        fill
        priority
        className="object-cover bg-no-repeat"
      />

      {/* 🌟 ボタン設置エリア（画像の中の白カードの上に絶対配置でかぶせる） */}
      <div className="absolute inset-0 flex flex-col justify-end items-center pb-[180px]">
        {/* 詳しくはこちらボタン */}
        <a
          href="#" // 👈 ここに飛ばしたいURLを貼ってください
          className="px-10 py-3 bg-[#FA2D66] text-white text-sm font-bold rounded-full hover:bg-[#d61f52] shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 tracking-wider text-center"
        >
          詳しくはこちら
        </a>
      </div>
      
    </section>
  );
}