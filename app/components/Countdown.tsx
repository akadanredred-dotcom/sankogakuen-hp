'use client';

import { useEffect, useState } from 'react';

interface CountdownProps {
  footerId?: string; // 💡 削らずにしっかり受け取ります
}

export default function Countdown({ footerId }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState('');
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    // 1. カウントダウンタイマーの処理
    const targetDate = new Date('2026-09-15T00:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft('本番当日です！');
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(`本番まであと ${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`);
    }, 1000);

    // 2. フッターを検知してついてくる（位置を固定する）処理
    const handleScroll = () => {
      if (!footerId) return;
      const footer = document.getElementById(footerId);
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // フッターが画面内に入ってきたら固定を解除してその場に止める
      if (footerTop <= windowHeight) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期チェック

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [footerId]);

  // 💡 isFixed の状態によって、画面下についてくる(fixed)か、フッター手前で止まる(absolute)かを切り替えます
  return (
    <div
      className={`w-full text-center py-4 bg-red-600 text-white font-bold text-lg shadow-inner z-50 transition-all ${
        isFixed ? 'fixed bottom-0 left-0' : 'absolute bottom-0 left-0'
      }`}
    >
      {timeLeft || '読み込み中...'}
    </div>
  );
}