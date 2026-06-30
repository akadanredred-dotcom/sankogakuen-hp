'use client';

import { useEffect, useState } from 'react';

interface CountdownProps {
  footerId?: string;
}

export default function Countdown({ footerId }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
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

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full text-center py-4 bg-red-600 text-white font-bold text-lg shadow-inner">
      {timeLeft || '読み込み中...'}
    </div>
  );
}