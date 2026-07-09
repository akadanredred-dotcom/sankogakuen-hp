'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules'; 

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const videoData = [
  { id: 1, src: '/movise/movise1.mp4' },
  { id: 2, src: '/movise/movise2.mp4' },
  { id: 3, src: '/movise/movise3.mp4' },
  { id: 4, src: '/movise/movise4.mp4' },
  { id: 5, src: '/movise/movise5.mp4' },
  { id: 6, src: '/movise/movise6.mp4' },
];

export default function VideoCarousel() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const swiperRef = useRef<any>(null);

  // アクティブなスライドの動画だけを再生する制御
  const handleSlideChange = (swiper: any) => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === swiper.realIndex) {
        video.currentTime = 0;
        video.play().catch((err) => console.log("再生ブロック:", err));
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  // 動画が最後まで再生されたら次のスライドへ
  const handleVideoEnded = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    /* PC版のコンテンツ幅をさらに広げて、左右の動画がしっかり見えるように max-w-2xl に拡張 */
    <div className="w-full max-w-md md:max-w-2xl mx-auto py-10 px-4 bg-gray-50 md:bg-transparent overflow-hidden relative group">
      
      {/* 💡 スタイル注入：中央（active）以外のスライドの不透明度を下げて色を薄くする */}
      <style jsx global>{`
        .swiper-slide {
          opacity: 0.4;
          transition: opacity 0.4s ease-in-out;
        }
        .swiper-slide-active {
          opacity: 1;
        }
      `}</style>

      <Swiper
        modules={[EffectCoverflow, Navigation]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        /* 💡 1.3 から 1.6 に変更し、前後の動画がより広く画面内に入るようにしました */
        slidesPerView={1.6} 
        loop={true}
        coverflowEffect={{
          rotate: 0,       
          stretch: -10,    // スライド間の隙間を少し詰めて綺麗に見せる調整
          depth: 80,       // 奥への引っ込み具合を少し浅くして見やすく
          modifier: 2,   
          slideShadows: false, 
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setTimeout(() => handleSlideChange(swiper), 100);
        }}
        onSlideChange={handleSlideChange}
        className="w-full"
      >
        {videoData.map((video, index) => (
          <SwiperSlide key={video.id} className="overflow-visible">
            <div className="relative aspect-[9/16] md:aspect-auto w-full rounded-2xl overflow-hidden shadow-2xl bg-zinc-900">
              <video
                ref={(el) => { videoRefs.current[index] = el; }}
                src={video.src}
                muted
                playsInline
                onEnded={handleVideoEnded}
                className="absolute inset-0 md:relative w-full h-full object-cover z-0"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 左側移動ボタン */}
      <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors cursor-pointer select-none">
        &#10094;
      </button>

      {/* 右側移動ボタン */}
      <button className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors cursor-pointer select-none">
        &#10095;
      </button>
    </div>
  );
}