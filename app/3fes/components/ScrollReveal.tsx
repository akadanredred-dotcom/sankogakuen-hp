'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'none';
  delay?: number;
}

export default function ScrollReveal({ children, direction = 'left', delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // 💡 画面の下端より少し手前でスッと発動させる
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
        overflow: 'hidden', // 横揺れ・はみ出し防止
        width: '100%',
      }}
    >
      {children}
    </div>
  );
}