'use client';

// 💡 パスをフォルダー構造に合わせてすべて「./components/」に統一
import Hero from "./components/Hero";
import Concept from "./components/Concept";
import Competition from "./components/Competition";
import Awards from "./components/Awards";
import GoogleMap from "./components/GoogleMap";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white font-sans">
      {/* メインビジュアル */}
      <Hero />

      {/* コンテンツエリア */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-24">
        
        {/* 💡 1. 絆・コンセプト：左からスライドイン */}
        <ScrollReveal direction="left">
          <Concept />
        </ScrollReveal>

        {/* 💡 2. 競技について：右からスライドイン */}
        <ScrollReveal direction="right">
          <Competition />
        </ScrollReveal>

        {/* 💡 3. 賞について：左からスライドイン */}
        <ScrollReveal direction="left">
          <Awards />
        </ScrollReveal>

        {/* 💡 4. Googleマップ：下からふわっと浮き上がる */}
        <ScrollReveal direction="up">
          <GoogleMap />
        </ScrollReveal>
       
      </div>

      {/* 💡 フッターは背景を白く画面幅いっぱいに広げるため、div（max-w-4xl）の外に出します */}
      <Footer />
    </main>
  );
}