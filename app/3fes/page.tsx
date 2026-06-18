"use client";

// 💡 パスをすべて同じ階層の「./components/」に統一しました
import Hero from "./components/Hero";
import Concept from "./components/Concept";
import Competition from "./components/Competition";
import Awards from "./components/Awards";
import GoogleMap from "./components/GoogleMap";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import Navbar from "../components/Navbar";
import FinaleSongSection from "./components/FinaleSongSection";
import SeatInfoSection from "./components/SeatInfoSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white font-sans overflow-x-hidden">
      {/* メインビジュアル */}
      <Hero />
      <Navbar />

      {/* コンテンツエリア（スクロールで左右・下から出現） */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-24">
        <ScrollReveal direction="left">
          <Concept />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <Competition />
        </ScrollReveal>
        <ScrollReveal direction="left">
          <Awards />
        </ScrollReveal>

        <ScrollReveal direction="right">
          <FinaleSongSection />
        </ScrollReveal>
        <ScrollReveal direction="left">
          <SeatInfoSection />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <GoogleMap />
        </ScrollReveal>
      </div>

      {/* フッター */}
      <Footer />
    </main>
  );
}
