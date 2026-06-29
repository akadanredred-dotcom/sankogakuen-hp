"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
// 1. ここでNavbarコンポーネントをインポートします（パスはご自身の環境に合わせて調整してください）
import Navbar from "../components/Navbar";
import Countdown from "../components/Countdown";

export default function MemoriesPage() {
  const [photos, setPhotos] = useState<string[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [initialLoaded, setInitialLoaded] = useState(false);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchPhotos = (cursorUrlParam: string | null = null) => {
    if (loading) return;
    setLoading(true);

    const url = cursorUrlParam
      ? `/api/photos?cursor=${encodeURIComponent(cursorUrlParam)}`
      : "/api/photos";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.photos)) {
          setPhotos((prev) => [...prev, ...data.photos]);
          setNextCursor(data.nextCursor);
        }
        setInitialLoaded(true);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load photos:", err);
        setLoading(false);
        setInitialLoaded(true);
      });
  };

  useEffect(() => {
    fetchPhotos(null);
  }, []);

  useEffect(() => {
    const currentObserverRef = observerRef.current;
    if (!currentObserverRef || !nextCursor) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          fetchPhotos(nextCursor);
        }
      },
      { threshold: 0.1, rootMargin: "200px" },
    );

    observer.observe(currentObserverRef);

    return () => {
      if (currentObserverRef) observer.unobserve(currentObserverRef);
    };
  }, [nextCursor, loading]);

  return (
    <div className="min-h-screen bg-[#f9f8f6] text-[#333] font-sans antialiased">
      {/* 2. 最上部にNavbarを配置します */}
      <Navbar />

      {/* Hero Area */}
      <header className="relative h-[40vh] w-full bg-gradient-to-r from-red-500 to-pink-500 flex flex-col justify-center items-center text-center px-4 text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-wider m-0 mb-3 drop-shadow-md">
          2025 思い出
        </h1>
        <p className="text-gray-100 text-sm md:text-lg font-medium m-0 max-w-md border-t border-white/30 pt-2">
          あの眩しい一瞬を、もう一度。
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto p-5 pb-20">
        {photos.length === 0 && !loading && initialLoaded && (
          <p className="text-center text-gray-400 py-20">画像がありません...</p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[10px]">
          {photos.map((url, index) => (
            <PhotoItem key={url + index} url={url} index={index} />
          ))}
        </div>

        <div
          ref={observerRef}
          className="w-full text-center py-10 h-10 flex items-center justify-center"
        >
          {loading && (
            <p className="text-gray-400 animate-pulse text-sm font-medium">
              さらに読み込み中...
            </p>
          )}
        </div>
      </main>

      {/* Footer */}
      <Countdown footerId="page-footer" />
    </div>
  );
}

function PhotoItem({ url, index }: { url: string; index: number }) {
  const [rowSpan, setRowSpan] = useState("row-span-[22]");

  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform bg-gray-200 w-full h-full ${rowSpan}`}
    >
      <Image
        src={url}
        alt={`思い出の写真 ${index + 1}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        onLoad={(e) => {
          const img = e.target as HTMLImageElement;
          const ratio = img.naturalHeight / img.naturalWidth;

          if (ratio > 1.2) {
            setRowSpan("row-span-[28]");
          } else if (ratio < 0.8) {
            setRowSpan("row-span-[16]");
          } else {
            setRowSpan("row-span-[22]");
          }
        }}
      />
    </div>
  );
}
