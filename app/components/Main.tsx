'use client';

import Image from 'next/image';

export default function SanFesSection() {
  return (
    <section style={{ 
      maxWidth: '1000px', 
      margin: '0 auto', 
      padding: '60px 20px', 
      fontFamily: 'sans-serif',
      color: '#000000'
    }}>
      {/* 1. 中央のメインタイトルエリア */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#606060', margin: '0 0 8px 0' }}>三幸学園</p>
        <h1 style={{ fontSize: '36px', fontWeight: '900', color: '#e50012', margin: '0', letterSpacing: '0.05em' }}>
          フェスティバル
        </h1>
      </div>

      {/* 2. メインビジュアル（写真2枚の並びなど） */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '24px', 
        marginBottom: '60px' 
      }}>
        <div style={{ position: 'relative', aspectRatio: '16/10', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
          {/* 画像を実際に配置する場合はsrcを変更してください */}
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
            [メインイメージ 1]
          </div>
        </div>
        <div style={{ position: 'relative', aspectRatio: '16/10', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
            [メインイメージ 2]
          </div>
        </div>
      </div>

      {/* 3. 詳細グリッド（競技について / フィナーレについて / 座席について） */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '40px' 
      }}>
        {/* 競技について */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', borderBottom: '2px solid #e50012', paddingBottom: '6px', margin: '0' }}>
            競技について
          </h3>
          <p style={{ fontSize: '14px', color: '#606060', lineHeight: '1.6', margin: '0' }}>
            各団がプライドをかけて戦う熱い競技の数々。一人ひとりの全力の走りとチームワークが、会場全体を興奮の渦に巻き込みます。
          </p>
        </div>

        {/* フィナーレについて */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', borderBottom: '2px solid #e50012', paddingBottom: '6px', margin: '0' }}>
            フィナーレについて
          </h3>
          <p style={{ fontSize: '14px', color: '#606060', lineHeight: '1.6', margin: '0' }}>
            感動のクライマックスを飾るフィナーレ曲。すべての団が一体となり、最高の笑顔と拍手でフェスティバルを締めくくります。
          </p>
        </div>

        {/* 座席について */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', borderBottom: '2px solid #e50012', paddingBottom: '6px', margin: '0' }}>
            座席について
          </h3>
          <p style={{ fontSize: '14px', color: '#606060', lineHeight: '1.6', margin: '0' }}>
            応援席は各団ごとにエリアが分かれています。赤団の座席から一丸となって、大きな声援と拍手を届けて仲間を後押ししましょう！
          </p>
        </div>
      </div>
    </section>
  );
}