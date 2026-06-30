"use client";

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
import Countdown from "../components/Countdown";

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
            {/* 背景カラーアクセント（固定・全体に薄く敷く） */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {/* 赤 */}
                <div className="absolute top-[5%] left-[-8%] w-[420px] h-[420px] bg-red-300/30 rounded-full blur-3xl" />
                {/* 青 */}
                <div className="absolute top-[30%] right-[-10%] w-[480px] h-[480px] bg-blue-300/30 rounded-full blur-3xl" />
                {/* 黄 */}
                <div className="absolute top-[55%] left-[10%] w-[400px] h-[400px] bg-yellow-200/40 rounded-full blur-3xl" />
                {/* 緑 */}
                <div className="absolute bottom-[5%] right-[5%] w-[460px] h-[460px] bg-green-200/35 rounded-full blur-3xl" />
            </div>

            {/* メインビジュアル */}
            <div className="relative z-10">
                <Hero />
                <Navbar />

                {/* コンテンツエリア */}
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
            </div>
            <Countdown footerId="page-footer" />
            <Footer />
        </main>
    );
}