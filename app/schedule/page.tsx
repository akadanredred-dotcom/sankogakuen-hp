"use client"; // 戻るボタンの動き（onClick）を使うために必須です

// 💡 Countdownコンポーネントをインポート
import Countdown from "@/app/components/Countdown";

export default function SchedulePage() {
    return (
        // 全体を画面の真ん中に集める設定はキープします
        <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 space-y-6">
            {/* ⏰ カウントダウン（外枠の縮める力を強制的に解除！） */}
            <div className="w-full max-w-7xl flex flex-col items-stretch">
                <Countdown footerId={""} />
            </div>

            {/* 🖼️ 画像とボタンをまとめる箱 */}
            <div className="max-w-4xl w-full space-y-4">
                {/* 画像本体 */}
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex justify-center">
                    <img
                        src="/img/jikanwari.png"
                        alt="当日スケジュール時間割"
                        className="max-w-full h-auto rounded"
                    />
                </div>

                {/* 🔙 戻るボタン（画像のすぐ下・右側をキープ） */}
                <div style={{ width: "100%", textAlign: "right" }}>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-100 rounded-lg shadow-sm border border-gray-200 transition-all cursor-pointer"
                    >
                        ← 戻る
                    </button>
                </div>
            </div>
        </main>
    );
}
