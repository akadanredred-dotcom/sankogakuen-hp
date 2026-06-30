import Link from "next/link";

// 💡 画面全体をコンポーネントとして export default します
export default function SchedulePage() {
  return (
    // 画面全体の見た目を整えるためのコンテナ（必要に応じて調整してください）
    <div className="p-4 max-w-md mx-auto"> 
      
      {/* 🕰️ ここにさっきのコードをそのまま入れます */}
      <Link 
        href="/schedule" 
        className="block p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all group cursor-pointer"
      >
        <div className="flex items-center gap-2 mb-2">
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

    </div>
  );
}