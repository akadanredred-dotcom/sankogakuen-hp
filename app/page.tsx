import Image from "next/image";
import Hero from "./components/Hero";
import SanFesSection from "./components/Main";
import AkadanSection from "./components/react";
import ArticleSection from "./components/ArticleSection";
import ShopSection from "./components/ShopSection";
import Footer from "./components/Footer";
import GoogleMap from "./components/GoogleMap"; // 💡 地図をインポート

export default function Home() {
  return (
    <div className="">
      <Hero backgroundImage={"/img/hero-bg.png"} />
      <SanFesSection />
      <AkadanSection />
      <ArticleSection />

      {/* 💡 ここから追加：Figma再現のアクセスマップセクション */}
      <div style={{ 
        maxWidth: '1000px', 
        margin: '60px auto', 
        padding: '0 20px', 
        fontFamily: 'sans-serif' 
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'start'
        }}>
          
          {/* 左側：Google Map（iframe版コンポーネント） */}
          <div style={{
            borderRadius: '4px',
            overflow: 'hidden',
            border: '1px solid #e0e0e0',
            aspectRatio: '4 / 3'
          }}>
            <GoogleMap />
          </div>

          {/* 右側：場所と住所リスト（Figmaのテキストと色 #606060 を反映） */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 4px 0', color: '#000000' }}>
              場所
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* 住所1 */}
              <div>
                <p style={{ fontSize: '14px', fontWeight: '700', margin: '0 0 6px 0', color: '#000000' }}>
                  東京ミッドタウン日比谷
                </p>
                <p style={{ fontSize: '12px', margin: '0', color: '#606060', lineHeight: '1.5' }}>
                  〒100-0006 東京都千代田区有楽町1-1-2
                </p>
              </div>

              {/* 住所2 */}
              <div>
                <p style={{ fontSize: '14px', fontWeight: '700', margin: '0 0 6px 0', color: '#000000' }}>
                  東京ミッドタウン日比谷
                </p>
                <p style={{ fontSize: '12px', margin: '0', color: '#606060', lineHeight: '1.5' }}>
                  〒100-0006 東京都千代田区有楽町1-1-2
                </p>
              </div>

              {/* 住所3 */}
              <div>
                <p style={{ fontSize: '14px', fontWeight: '700', margin: '0 0 6px 0', color: '#000000' }}>
                  東京ミッドタウン日比谷
                </p>
                <p style={{ fontSize: '12px', margin: '0', color: '#606060', lineHeight: '1.5' }}>
                  〒100-0006 東京都千代田区有楽町1-1-2
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* 💡 ここまで追加 */}

      <Footer />
    </div>
  );
}