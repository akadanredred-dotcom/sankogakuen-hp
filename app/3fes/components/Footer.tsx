'use client';

import Link from 'next/link';

export default function Footer() {
  // ページの一番上までスムーズにスクロールして戻る関数
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer style={{
      backgroundColor: '#ffffff',
      borderTop: '1px solid #e0e0e0',
      padding: '60px 20px 40px 20px',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '40px'
      }}>
        
        {/* =================【左側列】================= */}
        {/* サイト名とその下にインスタグラム */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '200px' }}>
          {/* サイト名（一番左上） */}
          <div style={{ 
            fontSize: '24px', 
            fontWeight: '700', 
            color: '#000000',
            letterSpacing: '0.05em'
          }}>
            赤団HP
          </div>

          {/* インスタグラム（サイト名の下） */}
          <div>
            <a 
              href="https://www.instagram.com/hyouga_2026?igsh=MXZub2doM2d0NmMzdA%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Instagram"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#f5f5f5',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e8e8e8'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* =================【右側列】================= */}
        {/* 右側の中で、さらに左（トップへ戻る）と右（ページリンク）に分割 */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          gap: '80px', /* 「トップへ戻る」と「リンク集」の間の広さ */
          alignItems: 'flex-start',
          minWidth: '300px',
          justifyContent: 'flex-end',
          flexWrap: 'wrap'
        }}>
          
          {/* 右列の中の【左側】：「トップへ戻る」 */}
          <div style={{ paddingTop: '4px' }}>
            <a 
              href="#" 
              onClick={scrollToTop}
              style={{ 
                color: '#606060', 
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '700' /* Figmaの見出しに合わせた太め設定 */
              }}
              onMouseEnter={(e) => e.target.style.color = '#000000'}
              onMouseLeave={(e) => e.target.style.color = '#606060'}
            >
              トップへ戻る ↑
            </a>
          </div>

          {/* 右列の中の【右側】：他のページに飛べるリンク集（Figma仕様の縦並び） */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px',
            fontSize: '14px',
            minWidth: '120px'
          }}>
            {/* Figmaの見出し「ページ」にあたる部分。不要なら消してもOK */}
            <span style={{ fontWeight: '700', color: '#000000' }}>メニュー</span>
            
            <Link href="/news" style={{ color: '#606060', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#000000'} onMouseLeave={(e) => e.target.style.color = '#606060'}>
              お知らせ
            </Link>
            <Link href="/shop" style={{ color: '#606060', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#000000'} onMouseLeave={(e) => e.target.style.color = '#606060'}>
              グッズ購入
            </Link>
            <Link href="/about" style={{ color: '#606060', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#000000'} onMouseLeave={(e) => e.target.style.color = '#606060'}>
              赤団について
            </Link>
            <Link href="/contact" style={{ color: '#606060', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#000000'} onMouseLeave={(e) => e.target.style.color = '#606060'}>
              お問い合わせ
            </Link>
          </div>

        </div>

      </div>

      {/* コピーライト（一番下の真ん中） */}
      <div style={{ 
        maxWidth: '1000px', 
        margin: '50px auto 0 auto', 
        textAlign: 'center', 
        fontSize: '12px', 
        color: '#a0a0a0',
        borderTop: '1px solid #f0f0f0',
        paddingTop: '20px'
      }}>
        &copy; 2026 赤団HP. All rights reserved.
      </div>
    </footer>
  );
}