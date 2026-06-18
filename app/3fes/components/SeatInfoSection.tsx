import React from 'react';
import Image from 'next/image'; // 👈 1. エラーを防ぐために必ずインポートを追加！

export default function SeatInfoSection() {
  return (
    <section className="w-full max-w-[1442px] mx-auto px-8 py-16 md:px-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8 relative bg-[#F7F7F7] overflow-hidden">
      
      {/* 背景の淡いグラデーションあしらい */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] bg-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      {/* 右側（PC時）：テキスト＆案内エリア */}
      <div className="w-full md:w-1/2 space-y-6 relative z-10">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            {/* 左側のアクセント縦線（赤団の赤を採用） */}
            <span className="w-[4px] h-8 bg-[#DC2626] block rounded-full"></span>
            <h2 className="text-3xl font-bold tracking-widest text-gray-950">
              座席について
            </h2>
          </div>
          <p className="text-gray-600 text-base md:text-lg pl-4 font-medium">
            赤団の応援席・一般観覧席のご案内
          </p>
        </div>

        <div className="pl-4 space-y-3 text-sm md:text-base text-gray-600 leading-relaxed">
          <p>
            当日のトラック周辺の座席配置は以下の通りです。<br />
            赤団の応援席は、本部テントから向かって【左側】のエリアとなります。
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-500 text-sm">
            <li>登校後、速やかに指定の座席へ移動してください。</li>
            <li>一般観覧席での三脚エリアには限りがあります。</li>
          </ul>
        </div>
        
        {/* ボタンエリア */}
        <div className="flex flex-wrap gap-4 pl-4 pt-2">
          <button className="bg-black text-white px-8 py-3 rounded-md font-medium text-sm hover:bg-gray-800 transition-colors shadow-sm">
            拡大マップを見る
          </button>
          <button className="bg-[#E5E7EB] text-gray-800 px-6 py-3 rounded-md font-medium text-sm hover:bg-gray-300 transition-colors shadow-sm">
            セカンダリボタン
          </button>
        </div>
      </div>

      {/* 左側（PC時）：座席表・マップ画像エリア */}
      <div className="w-full md:w-[45%] relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100 flex items-center justify-center z-10">
        {/* 👈 2. コメントアウトを解除し、パスを他のコードと同じ画像に変更しました */}
        <Image 
          src="/img/sannfessiryou5.jpg" 
          alt="座席配置図" 
          fill 
          className="object-cover"
          priority
        /> 
        
        {/* 👈 3. 画像の上に被さっていたダミー表示（📍マークのdiv）を完全に消去しました */}
      </div>

    </section>
  );
}