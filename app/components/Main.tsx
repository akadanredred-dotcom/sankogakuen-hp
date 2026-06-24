import Image from "next/image";

export default function SanFesSection() {
    return (
        // 全体のコンテナ（Figma通りの 1440px × 720px、レスポンシブ対応のためhは可変または固定に調整可能）
        <section className="relative w-full  h-[720px] mx-auto overflow-hidden flex items-center justify-center font-sans">
            {/* 背景のグラフィック画像（文字部分を除いた背景イラストのみの画像を想定しています） */}
            <Image
                src="/img/akadansiryou5.png"
                alt="赤団 背景"
                fill
                priority
                className="object-cover"
            />

            {/* 前面のテキストカードコンテンツ */}
            <div className="relative z-10 w-[90%] max-w-[1000px]  px-8 py-12 md:px-16 md:py-4 text-center">
                {/* タイトル */}
                <h2 className="text-[#FA2D66] text-4xl md:text-5xl font-black tracking-widest mb-6">
                    三フェス
                </h2>

                {/* 説明文 */}
                <p className="text-[#333333] text-sm md:text-lg font-bold leading-relaxed max-w-[760px] mx-auto mb-8 tracking-wider">
                    三幸フェステリゾスポ生が姉妹校と力を合わせてつくり上げる最大のイベント。助け合い、励まし合い、時にはうまくいかないことも・・・。いくつもの困難を乗り越えて得られる感動は、一生の思い出として胸に刻まれます。
                </p>

                {/* ボタン */}
                <div className="flex justify-center">
                    <a
                        href="/3fes" // ← 必要に応じて適切なパスに変更してください
                        className="
              inline-block
              px-12
              py-4
              bg-[#FA2D66]
              text-white
              text-base
              font-bold
              rounded-2xl
              shadow-md
              hover:bg-[#d61f52]
              hover:shadow-lg
              hover:scale-105
              transition-all
              duration-200
              tracking-widest
              text-center
            "
                    >
                        詳しくはこちら
                    </a>
                </div>
            </div>
        </section>
    );
}
