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
          // 一度表示されたら監視を止める（スクロールで戻っても消えない）
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // 要素が20%見えたらアニメーション開始
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

  // アニメーションの方向（初期位置）を設定
  const getInitialTranslate = () => {
    switch (direction) {
      case 'left': return 'translateX(-50px)';
      case 'right': return 'translateX(50px)';
      case 'up': return 'translateY(50px)';
      default: return 'translateX(-50px)';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : getInitialTranslate(),
        transition: `opacity 0.8s ease-out, transform 0.8s ease-out`,
        transitionDelay: `${delay}s`, // アニメーション開始を遅らせる
      }}
    >
      {children}
    </div>
  );
}