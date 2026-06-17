'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

// TypeScript用の型定義（左、右、上、下なし を指定できるようにする）
interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'none';
  delay?: number;
}

export default function ScrollReveal({ children, direction = 'left', delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null); // 💡 TypeScriptの型エラーを防止
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current); // 一度表示されたら監視を終了
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // 💡 画面の下端より少し手前で発動させてスムーズに
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // 方向ごとの初期位置
  const getInitialTranslate = () => {
    switch (direction) {
      case 'left': return 'translateX(-50px)';
      case 'right': return 'translateX(50px)';
      case 'up': return 'translateY(50px)';
      default: return 'translateY(0)';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : getInitialTranslate(),
        transition: 'opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
        transitionDelay: `${delay}s`,
        // 💡 左右からスライドインさせるときに画面横がはみ出してスクロールバーが出ないようにガード
        overflow: 'hidden', 
        width: '100%',
      }}
    >
      {children}
    </div>
  );
}