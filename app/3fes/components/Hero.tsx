export default function Hero() {
  return (
    <section className="relative h-[60vh] flex flex-col items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      {/* 背景のオーバーレイ（文字を読みやすくするため暗くする） */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 px-4">
        <p className="text-sm tracking-widest text-neutral-300 mb-2">サイト名</p>
        <h1 className="text-4xl md:text-6xl font-bold text-red-600 tracking-wide drop-shadow-lg">
          三幸学園<br className="md:hidden" />フェスティバル
        </h1>
        <p className="text-xs text-neutral-400 mt-4 tracking-wider">ショッピングサイトの説明を含むサブ見出し</p>
      </div>
    </section>
  );
}