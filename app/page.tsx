import { Metadata } from "next"; // 💡 メタデータ用の型をインポート
import Image from "next/image";
import Hero from "./components/Hero";
import SanFesSection from "./components/Main";
import AkadanSection from "./components/react";
import ArticleSection from "./components/ArticleSection";
import GoogleMap from "./components/GoogleMap";
import ScrollReveal from "./components/ScrollReveal";
import Footer from "./3fes/components/Footer";

// 💡 サイトのタイトル、説明文、ファビコンの設定
export const metadata: Metadata = {
    title: "赤団HP",
    description:
        "ここにサイトの説明文（ディスクリプション）を入力します。検索結果に表示される大切な文章です。",
    icons: {
        icon: "/assets/favicon.ico", // public/favicon.ico を参照します
        // スマホのホーム画面用（必要に応じて public/ に配置してください）
        apple: "/assets/apple-touch-icon.png",
    },
};

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
            <ScrollReveal direction="left">
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

                        {/* 住所リスト（省略されていた箇所をそのまま配置できるように残しています） */}
                        <div>
                            {/* ここに住所やアクセスのテキストが入ります */}
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* フッター */}
            <Footer />
        </div>
    );
}
