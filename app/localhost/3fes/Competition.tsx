export default function Competition() {
  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-wider text-red-500">競技について</h2>
        <p className="text-neutral-400 text-sm mt-1">赤団が挑む熱い競技のラインナップ</p>
      </div>

      {/* 競技一覧のグリッド（仮） */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700/60">
          <h3 className="text-xl font-semibold mb-2">応援合戦</h3>
          <p className="text-neutral-400 text-sm">団結したパフォーマンスで会場を圧倒します。</p>
        </div>
        <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700/60">
          <h3 className="text-xl font-semibold mb-2">集団行動 / ダンス</h3>
          <p className="text-neutral-400 text-sm">一糸乱れぬ動きで美しさと力強さを表現。</p>
        </div>
      </div>
    </section>
  );
}