"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

interface LyricLine {
  id: number;
  text: string;
  start: number;
  end: number;
  section?: string;
  sectionKey?: string;
}

// ご指定いただいた正確な秒数をそのまま反映させたデータ
const lyricsData: LyricLine[] = [
  // 1番
  {
    id: 1,
    text: "誰にも負けないと誓ったあの日から",
    start: 12.45,
    end: 18.0,
    section: "【1番】",
    sectionKey: "section-1",
  },
  { id: 2, text: "きっと戦っていた敵は自分で", start: 18.0, end: 24.0 },
  { id: 3, text: "限界まで努力できる才能だけ", start: 24.0, end: 30.5 },
  { id: 4, text: "ずっと胸の奥で信じてた", start: 30.5, end: 37.0 },
  { id: 5, text: "いつも一人じゃないから", start: 37.0, end: 42.0 }, // 37秒：そう何度も の前
  { id: 6, text: "そう何度も何度も立ち上がって", start: 42.0, end: 47.0 }, // 42秒：同じ夢を の前
  { id: 7, text: "同じ夢を追いかけた", start: 47.0, end: 49.0 }, // 47秒：サビ いつか の前

  // サビ
  {
    id: 8,
    text: "いつかこの涙が",
    start: 49.0,
    end: 52.0,
    section: "【サビ】",
    sectionKey: "section-chorus-1",
  }, // 49秒：この仲間と の前
  { id: 9, text: "この仲間と過ごして", start: 52.0, end: 56.0 }, // 52秒：ぶつかり合った の前
  { id: 10, text: "ぶつかり合った日々が", start: 56.0, end: 59.0 }, // 56秒：勲章 の前
  { id: 11, text: "勲章に変わる今は", start: 59.0, end: 64.0 }, // 59秒：この涙に似合う の前
  { id: 12, text: "この涙に似合う言葉はないから", start: 64.0, end: 68.0 }, // 1分4秒（64秒）：何も言わないで の前
  { id: 13, text: "何も言わないで肩を", start: 68.0, end: 72.0 }, // 1分8秒（68秒）：抱きしめていよう の前
  { id: 14, text: "抱きしめていよう", start: 72.0, end: 83.0 },

  // 2番
  {
    id: 15,
    text: "高い場所からしか見えない景色は",
    start: 83.0,
    end: 88.5,
    section: "【2番】",
    sectionKey: "section-2",
  }, // 1分23秒（83秒）：2番入り
  { id: 16, text: "いつも壁を登った先にあった", start: 88.5, end: 94.5 },
  { id: 17, text: "想像できる未来には興味などなくて", start: 94.5, end: 101.0 },
  { id: 18, text: "ずっと熱い目で夢を見てた", start: 101.0, end: 107.5 },
  { id: 19, text: "やがて不可能が可能に", start: 107.5, end: 112.5 },
  { id: 20, text: "ほんの少しずつ変わっていく", start: 112.5, end: 117.5 },
  { id: 21, text: "青すぎる時の中で", start: 117.5, end: 119.5 },

  // サビ2
  {
    id: 22,
    text: "いつかこの涙が",
    start: 119.5,
    end: 122.5,
    section: "【サビ】",
    sectionKey: "section-chorus-2",
  },
  { id: 23, text: "この仲間と過ごして", start: 122.5, end: 126.5 },
  { id: 24, text: "ぶつかり合った日々が", start: 126.5, end: 129.5 },
  { id: 25, text: "勲章に変わる きっと", start: 129.5, end: 134.5 },
  { id: 26, text: "この涙に似合う言葉はないから", start: 134.5, end: 138.5 },
  { id: 27, text: "何も言わないで肩を", start: 138.5, end: 142.5 },
  { id: 28, text: "抱きしめて", start: 142.5, end: 147.0 },

  // ラストサビ
  {
    id: 29,
    text: "ああこの笑顔が",
    start: 147.0,
    end: 151.5,
    section: "【ラストサビ】",
    sectionKey: "section-last-chorus",
  },
  { id: 30, text: "この仲間と出会って", start: 151.5, end: 156.0 },
  { id: 31, text: "信じあえた日々が", start: 156.0, end: 160.5 },
  { id: 32, text: "勲章に変わる今は", start: 160.5, end: 165.5 },
  { id: 33, text: "この終わりのない", start: 165.5, end: 169.5 },
  { id: 34, text: "自分への挑戦の", start: 169.5, end: 174.0 },
  { id: 35, text: "先に眩しい未来が待っているから", start: 174.0, end: 180.0 },
  {
    id: 36,
    text: "La la la la la la la la la la la",
    start: 180.0,
    end: 188.0,
  },
  {
    id: 37,
    text: "La la la la la la la la la la la",
    start: 188.0,
    end: 196.0,
  },
];

export default function SongsPage() {
  const vocalAudioSrc = "/music/ituka_vocal.mp3";
  const karaokeAudioSrc = "/music/ituka_karaoke.mp3";

  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const lineRefs = useRef<{ [key: number]: HTMLParagraphElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const activeLineIdRef = useRef<number | null>(null);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const time = audioRef.current.currentTime;
      setCurrentTime(time);

      const currentLine = lyricsData.find(
        (line) => time >= line.start && time < line.end,
      );

      if (currentLine && currentLine.id !== activeLineIdRef.current) {
        activeLineIdRef.current = currentLine.id;

        const lineElement = lineRefs.current[currentLine.id];
        const containerElement = containerRef.current;

        if (lineElement && containerElement) {
          const containerHeight = containerElement.clientHeight;
          const lineTop = lineElement.offsetTop;
          const lineHeight = lineElement.clientHeight;

          containerElement.scrollTo({
            top: lineTop - containerHeight / 2 + lineHeight / 2,
            behavior: "smooth",
          });
        }
      }
    }
  };

  const handleLineClick = (start: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = start;
      audioRef.current.play();
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* 戻るリンク */}
        <Link
          href="/"
          className="text-sm font-medium text-gray-500 hover:text-black transition-colors inline-block"
        >
          ← トップへ戻る
        </Link>

        {/* メインカード */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold tracking-widest text-gray-900">
              フィナーレ曲
            </h1>
            <p className="text-base text-gray-600 font-medium">
              いつかこの涙が
            </p>
            <p className="text-sm text-gray-400">Little Glee Monster</p>
          </div>

          {/* オーディオプレイヤー（歌入り版に連動） */}
          <div className="space-y-6 pt-2">
            {/* 音あり版 */}
            <div className="space-y-2 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-sm font-bold text-gray-800">
                🎤 音あり版（歌入り）
              </p>
              <audio
                ref={audioRef}
                controls
                className="w-full"
                onTimeUpdate={handleTimeUpdate}
              >
                <source src={vocalAudioSrc} type="audio/mp3" />
                お使いのブラウザは音声再生に対応していません。
              </audio>
            </div>

            {/* カラオケ版 */}
            <div className="space-y-2 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-sm font-bold text-gray-800">
                🎼 カラオケ版（伴奏）
              </p>
              <audio controls className="w-full">
                <source src={karaokeAudioSrc} type="audio/mp3" />
                お使いのブラウザは音声再生に対応していません。
              </audio>
            </div>
          </div>

          {/* 歌詞セクション */}
          <div className="space-y-6 pt-4 border-t border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 text-center">
              📜 歌詞
            </h2>

            <div
              ref={containerRef}
              className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center space-y-4 text-sm sm:text-base leading-relaxed h-[400px] overflow-y-auto relative"
            >
              {lyricsData.map((line) => {
                const isActive =
                  currentTime >= line.start && currentTime < line.end;

                return (
                  <React.Fragment key={line.id}>
                    {line.section && (
                      <div id={line.sectionKey} className="pt-4 pb-1">
                        <p className="font-bold text-gray-900 text-xs tracking-wider">
                          {line.section}
                        </p>
                      </div>
                    )}
                    <p
                      ref={(el) => {
                        lineRefs.current[line.id] = el;
                      }}
                      onClick={() => handleLineClick(line.start)}
                      className={`transition-all duration-300 py-1 cursor-pointer hover:opacity-80 ${
                        isActive
                          ? "text-indigo-600 font-bold scale-105 bg-indigo-50/50 rounded-md shadow-sm"
                          : "text-gray-400"
                      }`}
                    >
                      {line.text}
                    </p>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
