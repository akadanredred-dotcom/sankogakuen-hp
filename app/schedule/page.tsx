'use client'; // 戻るボタンの動き（onClick）を使うために必須です

// 💡 Countdownコンポーネントをインポート
import Countdown from "@/app/components/Countdown"; 

export default function SchedulePage() {
  return (
    // justify-start で上詰めに設定
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-4 md:p-8 space-y-6">
      
      {/* ⏰ 【ここを修正】浮いているCountdownのスタイルを、このページの中だけで強制解除します */}
      <div className="w-full max-w-4xl [&>div]:!fixed [&>div]:!top-6 [&>div]:!left-6 md:[&>div]:!left-8 [&>div]:!bottom-auto [&>div]:!right-auto">
        <Countdown footerId="footer" />
      </div>
      
      {/* 🖼️ 画像とボタンをまとめる箱（カウントダウンが左上に浮くので、上に少し余白を追加） */}
      <div className="max-w-4xl w-full space-y-4 pt-24 md:pt-20">
        
        {/* 画像本体 */}
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex justify-center">
          <img
            src="/img/jikanwari.png"
            alt="当日スケジュール時間割"
            className="max-w-full h-auto rounded"
          />
        </div>

        {/* 🔙 戻るボタン */}
        <div style={{ width: '100%', textAlign: 'right' }}>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-100 rounded-lg shadow-sm border border-gray-200 transition-all cursor-pointer"
          >
            ← 戻る
          </button>
        </div> 
        
      </div>

      {/* Countdownのバグ・エラー防止用の空フッター */}
      <div id="footer"></div>

    </main>
  );
}