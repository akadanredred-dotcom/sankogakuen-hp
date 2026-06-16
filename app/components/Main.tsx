import Image from "next/image";

export default function SanFesSection() {
  return (
    // 全体のコンテナ（Figma通りの 1440px × 720px）
    <section className="relative w-full max-w-[1440px] h-[720px] mx-auto overflow-hidden">
      
      {/* 背景画像 */}
      <Image
        src="/img/akadansiryou3.png"
        alt="赤団 背景"
        fill
        priority
        className="object-cover"
      />

      {/* ボタン */}
      <div className="absolute inset-0">
        <a
          href="3fes" // ← ここに飛ばしたいURLを入れる
          className="
            absolute
            left-[47.91%]
            top-[62.52%]
            translate-x-[-50.1%]
            px-20
            py-6
            bg-[#FA2D66]
            text-white
            text-sm
            font-bold
            rounded-2xl
            shadow-md
            hover:bg-[#d61f52]
            hover:shadow-lg
            hover:-translate-x-1/2
            transition-all
            duration-200
            tracking-wider
            text-center
          "
        >
          詳しくはこちら
        </a>
      </div>

    </section>
  );
}