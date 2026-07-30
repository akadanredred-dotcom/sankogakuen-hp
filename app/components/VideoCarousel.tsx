"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Link from "next/link"; // Next.jsのLinkコンポーネントを使用する場合

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const videoData = [
  { id: 1, src: "/movise/movise1.mp4" },
  { id: 2, src: "/movise/movise2.mp4" },
  { id: 3, src: "/movise/movise3.mp4" },
  { id: 4, src: "/movise/movise4.mp4" },
  { id: 5, src: "/movise/movise5.mp4" },
  { id: 6, src: "/movise/movise6.mp4" },
];

export default function VideoCarousel() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const swiperRef = useRef<any>(null);

  // 🔊 音声のON/OFF状態
  const [isMuted, setIsMuted] = useState(true);

  // アクティブなスライドの動画だけを再生する制御
  const handleSlideChange = (swiper: any) => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === swiper.realIndex) {
        video.currentTime = 0;
        video.muted = isMuted;
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

  // 🔊 音声ボタンがクリックされた時の処理
  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);

    if (swiperRef.current) {
      const activeIndex = swiperRef.current.realIndex;
      const currentVideo = videoRefs.current[activeIndex];
      if (currentVideo) {
        currentVideo.muted = newMutedState;
      }
    }
  };

  return (
    <div
      id="video-carousel"
      className="w-full max-w-md md:max-w-2xl mx-auto py-10 px-2 md:px-4 bg-gray-50 md:bg-transparent overflow-hidden relative group scroll-mt-10 flex flex-col items-center"
    >
      <style jsx global>{`
        .swiper-slide {
          opacity: 0.4;
          transition: opacity 0.4s ease-in-out;
        }
        .swiper-slide-active {
          opacity: 1;
        }
      `}</style>

      {/* 🔊 ミュート切り替えボタン */}
      <button
        onClick={toggleMute}
        className="absolute top-14 right-4 md:right-6 z-30 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full transition-colors backdrop-blur-sm cursor-pointer select-none flex items-center justify-center shadow-lg"
        title={isMuted ? "音声をオンにする" : "音声をオフにする"}
      >
        {isMuted ? (
          <span className="text-xs md:text-sm font-medium px-1">🔇 音なし</span>
        ) : (
          <span className="text-xs md:text-sm font-medium px-1">🔊 音あり</span>
        )}
      </button>

      <Swiper
        modules={[EffectCoverflow, Navigation]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.2}
        breakpoints={{
          768: {
            slidesPerView: 1.6,
          },
        }}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: -10,
          depth: 80,
          modifier: 2,
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
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
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={video.src}
                muted={isMuted}
                playsInline
                onEnded={handleVideoEnded}
                className="absolute inset-0 md:relative w-full h-full object-cover z-0"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 左側移動ボタン */}
      <button className="swiper-button-prev-custom absolute left-2 top-[calc(50%-2rem)] -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors cursor-pointer select-none">
        &#10094;
      </button>

      {/* 右側移動ボタン */}
      <button className="swiper-button-next-custom absolute right-2 top-[calc(50%-2rem)] -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors cursor-pointer select-none">
        &#10095;
      </button>

      {/* 🔗 詳しくはこちらボタン */}
      <div className="mt-6 z-20">
        <Link
          href="/support-page" // 👈 遷移先のパスに変更してください
          className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-md transition-all transform hover:scale-105 text-sm md:text-base"
        >
          詳しくはこちら →
        </Link>
      </div>
    </div>
  );
}
