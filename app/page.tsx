import { Metadata } from "next"; // 💡 メタデータ用の型をインポート
import Image from "next/image";
import Hero from "./components/Hero";
import SanFesSection from "./components/Main";
import AkadanSection from "./components/react";
import ArticleSection from "./components/ArticleSection";
import GoogleMap from "./components/GoogleMap";
import ScrollReveal from "./components/ScrollReveal";
import Footer from "./3fes/components/Footer";
import Memories from "./components/Memories";

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
            <ScrollReveal direction="left">
        <Memories />
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
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
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
              <div
                style={{
                  flex: "1 1 300px",
                  padding: "20px",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "15px",
                    color: "#333",
                  }}
                >
                  開催概要
                </h2>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    lineHeight: "1.8",
                  }}
                >
                  <li style={{ marginBottom: "10px" }}>
                    <strong>イベント名:</strong> 三幸学園フェスティバル
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <strong>日程:</strong>
                    <span
                      style={{
                        display: "block",
                        paddingLeft: "15px",
                      }}
                    >
                      ・2026年9月14日(月) 会場設営・リハーサル
                    </span>
                    <span
                      style={{
                        display: "block",
                        paddingLeft: "15px",
                      }}
                    >
                      ・2026年9月15日(火) 本番
                    </span>
                  </li>
                </ul>

                <div style={{ marginTop: "20px" }}>
                  <a
                    href="https://maps.google.com/maps?ll=35.670065,139.694966&z=16&t=m&hl=ja&gl=JP&mapclient=embed&cid=3800131593595043646"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      backgroundColor: "#d32f2f", // 赤団カラー
                      color: "#fff",
                      textDecoration: "none",
                      borderRadius: "4px",
                      fontWeight: "bold",
                    }}
                  >
                    Googleマップで開く
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* フッター */}
      <Footer />
    </div>
  );
}
