import Link from "next/link"; // 💡 ファイルの上のほうで一度だけインポートしてください

// 〜（中略：他のメンバー紹介などのコード）〜

{/* 🕰️ 【修正箇所】当日スケジュール部分をこれに置き換えます */}
<Link 
  href="/schedule" 
  className="block p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all group cursor-pointer"
>
  <div className="flex items-center gap-2 mb-2">
    {/* 赤団のテーマカラーに合わせて、左側に赤いアクセント線を入れます */}
    <span className="w-1 h-5 bg-red-600 rounded-full inline-block"></span>
    <span className="text-xl">🕰️</span>
    <h3 className="text-sm font-bold text-gray-800 group-hover:text-red-600 transition-colors">
      当日スケジュール
    </h3>
  </div>
  <p className="text-xs text-gray-500 leading-relaxed pl-3">
     当日のタイムスケジュール（時間割）の詳細はこちらからご確認いただけます。
  </p>
  <div className="mt-4 pl-3 text-xs font-semibold text-red-500 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
    詳細を見る →
  </div>
</Link>