'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, direction = 'left', delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // 一度表示されたら監視を終了
        }
      },
      { threshold: 0.1 } // 10%見えたらアニメーション開始
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
      case 'left': return 'translateX(-60px)';
      case 'right': return 'translateX(60px)';
      case 'up': return 'translateY(60px)';
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
      }}
    >
      {/* 包んだ中身（各セクション）がここにそのまま入ります */}
      {children}
    </div>
  );
}