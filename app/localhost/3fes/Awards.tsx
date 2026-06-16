export default function Awards() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center border-t border-neutral-800 pt-16">
      {/* 左側：テキスト情報 */}
      <div className="space-y-4 order-2 md:order-1">
        <h2 className="text-2xl font-bold border-l-4 border-red-600 pl-3">賞について</h2>
        <p className="text-neutral-400 text-sm">表彰は全部で3つあります</p>
        
        <div className="flex gap-3 pt-2">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-sm font-semibold transition">
            詳しくはこちら
          </button>
          <button className="border border-neutral-600 hover:bg-neutral-800 text-neutral-300 px-6 py-2 rounded-md text-sm font-semibold transition">
            セカンダリボタン
          </button>
        </div>
      </div>

      {/* 右側：トロフィー画像など */}
      <div className="aspect-video bg-neutral-800 rounded-xl overflow-hidden flex items-center justify-center order-1 md:order-2">
        {/* <img src="/images/trophy.jpg" alt="賞のイメージ" className="w-full h-full object-cover" /> */}
        <span className="text-neutral-400 text-sm">[ここに賞・トロフィーの画像が入ります]</span>
      </div>
    </section>
  );
}