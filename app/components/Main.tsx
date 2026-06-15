import Image from "next/image";

export default function SanFesSection() {
  return (
    // 全体のコンテナ（Figma通りの 1440px × 720px）
    <section className="relative w-full max-w-[1440px] h-[720px] mx-auto overflow-hidden">
      {/* 新しい、豊かなサバンナの背景画像 */}
      {/* ※ public/images/new-savanna-bg.jpg に新しい背景画像を配置してパスを合わせてください */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/img/akadannsiryou3.jpg"
          alt="豊かなサバンナの背景"
          fill
          priority
          className="object-cover bg-no-repeat"
        />
      </div>

      <div className="relative w-full h-full flex items-center z-10">
        {/* 1. 左側の重なる赤枠カード */}
        {/* Figmaのデザイン通り、左側の角を丸くし、absoluteで配置して右側の画像に少し被せます */}
        <div className="absolute left-[10%] z-10 w-[520px] bg-[#b04a5a] text-white p-10 rounded-[30px] rounded-tl-[40px] rounded-br-[40px] shadow-2xl flex flex-col items-center text-center">
          <h2 className="text-[2.5rem] font-bold tracking-wider mb-2 border-b-2 border-white pb-1 px-4">
            三フェス
          </h2>

          <p className="text-lg font-semibold tracking-wide mb-6">
            三幸フェスティバルとは
          </p>

          <p className="text-sm leading-relaxed tracking-normal text-left mb-8 opacity-95">
            三幸フェスティバルとは、生徒が力を合わせてつくり上げる最大のイベント。助け合い、励まし合い、時にはうまくいかないことも・・・。いくつもの困難を乗り越えて得られる感動は、一生の思い出として胸に刻めます。
          </p>

          {/* ボタン部分 */}
          <div className="flex gap-4 w-full justify-center">
            <a
              href="#"
              className="px-6 py-3 bg-black text-white text-sm font-bold rounded-full hover:bg-gray-900 transition-colors duration-200"
            >
              詳しくはこちら
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-white text-gray-800 text-sm font-bold rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              セカンダリボタン
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
