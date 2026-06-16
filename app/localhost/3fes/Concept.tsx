export default function Concept() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700">
      {/* 左側：画像（自己紹介・画像エリア） */}
      <div className="aspect-video md:aspect-square bg-neutral-700 rounded-xl overflow-hidden flex items-center justify-center">
        {/* <img src="/images/kizuna.jpg" alt="絆" className="w-full h-full object-cover" /> */}
        <span className="text-neutral-400 text-sm">[ここに手の画像が入ります]</span>
      </div>

      {/* 右側：テキスト */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold border-l-4 border-red-600 pl-3">絆</h2>
        <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
          ひとりじゃ届かない夢も、仲間となら越えられる。<br />
          心を繋ぎ、想いを繋ぐことで築いた絆が、勝利を掴む鍵となる。
        </p>
        <div>
          <button className="bg-neutral-100 text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-neutral-200 transition">
            詳しくはこちら
          </button>
        </div>
      </div>
    </section>
  );
}