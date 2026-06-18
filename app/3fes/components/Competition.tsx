'use client';

export default function Competition() {
  return (
    <section style={{ fontFamily: 'sans-serif', padding: '20px 0' }}>
      <div style={{ borderLeft: '4px solid #e50012', paddingLeft: '16px', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '800', margin: '0', color: '#ffffff' }}>COMPETITION</h2>
        <p style={{ fontSize: '12px', color: '#a3a3a3', margin: '4px 0 0 0' }}>競技について</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
        <div style={{ backgroundColor: '#262626', padding: '20px', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#e50012', margin: '0 0 10px 0' }}>団体競技：大綱引き</h3>
          <p style={{ fontSize: '14px', color: '#d4d4d4', lineHeight: '1.6', margin: '0' }}>全員の呼吸を完全に合わせ、一瞬の隙も与えず力で圧倒する、赤団のパワーを見せつける競技です。</p>
        </div>
        <div style={{ backgroundColor: '#262626', padding: '20px', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#e50012', margin: '0 0 10px 0' }}>団結リレー</h3>
          <p style={{ fontSize: '14px', color: '#d4d4d4', lineHeight: '1.6', margin: '0' }}>バトンに想いを乗せてトラックを駆け抜けます。選ばれし俊足たちが魅せる最高のドラマです。</p>
        </div>
      </div>
    </section>
  );
}