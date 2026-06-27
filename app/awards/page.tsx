"use client";

import React from "react";
import AwardsHero from "./components/Hero";
import AwardsMain from "./components/Main";
import Navbar from "../components/Navbar";
import Countdown from "../components/Countdown";
import Footer from "../3fes/components/Footer";

export default function AwardsPage() {
    return (
        /* 
          【調整ポイント】
          - relative を追加：Countdown が最下部でピタッと止まるための基準点（親）になります。
          - bg-[#F7F7F7] などの元のスタイルはそのまま維持しています。
        */
        <main className="relative w-full min-h-screen bg-[#F7F7F7] font-sans pb-24">
            {/* 
              ヘッダー部分 
              ※もし AwardsHero の中にもすでに <Navbar /> が入っている場合は、
              二重表示を防ぐためにここの <Navbar /> は削除するかコメントアウトしてください。
            */}
            {/* <Navbar /> */}
            
            <AwardsHero />

            {/* 左右交互の賞紹介コンテンツ部分 */}
            <AwardsMain />
            
            {/* 
              💡 修正ポイント
              フッター要素を検知できるように、外側を id="main-footer" を持った div で包みます。
            */}
            <div id="main-footer">
                <Footer />
            </div>

            {/* 
              💡 修正ポイント
              カウントダウンコンポーネントに、上で指定したフッターのIDを渡します。
            */}
            <Countdown footerId="main-footer" />
        </main>
    );
}