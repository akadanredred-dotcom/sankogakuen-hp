'use client';

import Link from 'next/link';
import React from 'react';

export default function Footer() {
  // ページの一番上までスムーズにスクロールして戻る関数
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // マウスが乗った時に下線をつける関数
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>, color = '#000000') => {
    const target = e.target as HTMLAnchorElement;
    target.style.color = color;
    target.style.textDecoration = 'underline';
  };

  // マウスが離れた時に下線を消す関数
  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>, color = '#606060') => {
    const target = e.target as HTMLAnchorElement;
    target.style.color = color;
    target.style.textDecoration = 'none';
  };

  return (
    <footer style={{
      backgroundColor: '#ffffff',
      borderTop: '1px solid #e0e0e0',
      padding: '30px 20px 20px 20px',
      fontFamily: 'sans-serif'
    }}>
      {/* 3カラム（左・中・右）のレイアウト */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '24px',
        alignItems: 'flex-start'
      }}>
        
        {/* =================【左側ブロック】================= */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* サイト名（一番左上） */}
          <div style={{ 
            fontSize: '20px', 
            fontWeight: '700', 
            color: '#000000',
            letterSpacing: '0.05em'
          }}>
            赤団HP
          </div>

          {/* インスタグラム */}
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
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: '#f5f5f5',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e8e8e8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f5f5f5';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#606060" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* =================【真ん中ブロック】================= */}
        {/* お知らせ・グッズ・お問い合わせを中央で【縦並び】に配置 */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', /* 💡 row から column に変更して縦並びに */
          gap: '12px', /* 💡 縦の隙間をちょうどいい幅に調整 */
          alignItems: 'center', /* 💡 中央揃えに配置 */
          fontSize: '13px'
        }}>
          <Link 
            href="/news" 
            style={{ color: '#606060', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s' }} 
            onMouseEnter={(e) => handleMouseEnter(e)} 
            onMouseLeave={(e) => handleMouseLeave(e)}
          >
            お知らせ
          </Link>
          <Link 
            href="/shop" 
            style={{ color: '#606060', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s' }} 
            onMouseEnter={(e) => handleMouseEnter(e)} 
            onMouseLeave={(e) => handleMouseLeave(e)}
          >
            グッズ購入
          </Link>
          <Link 
            href="/contact" 
            style={{ color: '#606060', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s' }} 
            onMouseEnter={(e) => handleMouseEnter(e)} 
            onMouseLeave={(e) => handleMouseLeave(e)}
          >
            お問い合わせ
          </Link>
        </div>

        {/* =================【右側ブロック】================= */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'flex-end', 
          gap: '10px',
          paddingTop: '2px' 
        }}>
          <a 
            href="#" 
            onClick={scrollToTop}
            style={{ 
              color: '#606060', 
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: '700',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => handleMouseEnter(e)} 
            onMouseLeave={(e) => handleMouseLeave(e)}
          >
            トップへ戻る ↑
          </a>

          <Link 
            href="/about" 
            style={{ 
              color: '#606060', 
              textDecoration: 'none', 
              fontSize: '13px',
              fontWeight: '500',
              transition: 'color 0.2s'
            }} 
            onMouseEnter={(e) => handleMouseEnter(e)} 
            onMouseLeave={(e) => handleMouseLeave(e)}
          >
            赤団について
          </Link>
        </div>

      </div>

      {/* コピーライト */}
      <div style={{ 
        maxWidth: '1000px', 
        margin: '30px auto 0 auto', 
        textAlign: 'center', 
        fontSize: '11px', 
        color: '#a0a0a0',
        borderTop: '1px solid #f0f0f0',
        paddingTop: '15px'
      }}>
        &copy; 2026 赤団HP. All rights reserved.
      </div>
    </footer>
  );
}