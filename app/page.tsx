import Image from "next/image";
import Hero from "./components/Hero";
import SanFesSection from "./components/Main";
import AkadanSection from "./components/react";
import ArticleSection from "./components/ArticleSection";
import GoogleMap from "./components/GoogleMap";
import ScrollReveal from "./components/ScrollReveal"; // 💡 インポートを追加
import Footer from "./3fes/components/Footer";

export default function Home() {
    return (
        <div className="">
            {/* ヒーローは最初から見えているのでアニメーションなし */}
            <Hero
                backgroundImage={"/img/hero-bg.png"}
                mobileBackgroundImage="/img/hero2-bg.jpg"
            />

            {/* 💡 SanFesSectionは「左から」 */}
            <ScrollReveal direction="left">
                <SanFesSection />
            </ScrollReveal>

            {/* 💡 AkadanSectionは「右から」 */}
            <ScrollReveal direction="right">
                <AkadanSection />
            </ScrollReveal>

            {/* 💡 ArticleSectionは「左から」 */}
            <ScrollReveal direction="left">
                <ArticleSection />
            </ScrollReveal>

            {/* 💡 地図セクションは「上から（ふわっと浮き上がる）」 */}
            <ScrollReveal direction="up">
                {/* Figma再現の地図セクション */}
                <div
                    style={{
                        maxWidth: "1000px",
                        margin: "60px auto",
                        padding: "0 20px",
                    }}
                >
                    {/* ... (中身は今のまま) ... */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(320px, 1fr))",
                            gap: "40px",
                        }}
                    >
                        <div
                            style={{
                                borderRadius: "4px",
                                overflow: "hidden",
                                border: "1px solid #e0e0e0",
                                aspectRatio: "4 / 3",
                            }}
                        >
                            <GoogleMap />
                        </div>
                        {/* 住所リスト... */}
                    </div>
                </div>
            </ScrollReveal>

            {/* フッターは先ほどアニメーションを直に入れたのでそのままでOK */}
            <Footer />
        </div>
    );
}
