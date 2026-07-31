"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

interface LyricLine {
  id: number;
  text: React.ReactNode;
  start: number;
  end: number;
  section?: string;
  sectionKey?: string;
}

const lyricsData: LyricLine[] = [
  // 1番
  {
    id: 1,
    text: (
      <>
        <ruby>
          誰<rt>だれ</rt>
        </ruby>
        にも
        <ruby>
          負<rt>ま</rt>
        </ruby>
        けないと
        <ruby>
          誓<rt>ちか</rt>
        </ruby>
        ったあの
        <ruby>
          日<rt>ひ</rt>
        </ruby>
        から
      </>
    ),
    start: 12.71,
    end: 17.82,
    section: "【1番】",
    sectionKey: "section-1",
  },
  {
    id: 2,
    text: (
      <>
        きっと
        <ruby>
          戦<rt>たたか</rt>
        </ruby>
        っていた
        <ruby>
          敵<rt>てき</rt>
        </ruby>
        は
        <ruby>
          自分<rt>じぶん</rt>
        </ruby>
        で
      </>
    ),
    start: 17.82,
    end: 24.42,
  },
  {
    id: 3,
    text: (
      <>
        <ruby>
          限界<rt>げんかい</rt>
        </ruby>
        まで
        <ruby>
          努力<rt>どりょく</rt>
        </ruby>
        できる
        <ruby>
          才能<rt>さいのう</rt>
        </ruby>
        だけ
      </>
    ),
    start: 24.42,
    end: 29.48,
  },
  {
    id: 4,
    text: (
      <>
        ずっと
        <ruby>
          胸<rt>むね</rt>
        </ruby>
        の
        <ruby>
          奥<rt>おく</rt>
        </ruby>
        で
        <ruby>
          信<rt>しん</rt>
        </ruby>
        じてた
      </>
    ),
    start: 29.48,
    end: 35.38,
  },
  {
    id: 5,
    text: (
      <>
        いつも
        <ruby>
          一人<rt>ひとり</rt>
        </ruby>
        じゃないから
      </>
    ),
    start: 35.38,
    end: 38.58,
  },
  {
    id: 6,
    text: (
      <>
        そう
        <ruby>
          何度<rt>なんど</rt>
        </ruby>
        も
        <ruby>
          何度<rt>なんど</rt>
        </ruby>
        も
        <ruby>
          立<rt>た</rt>
        </ruby>
        ち
        <ruby>
          上<rt>あ</rt>
        </ruby>
        がって
      </>
    ),
    start: 38.58,
    end: 42.74,
  },
  {
    id: 7,
    text: (
      <>
        <ruby>
          同<rt>おな</rt>
        </ruby>
        じ
        <ruby>
          夢<rt>ゆめ</rt>
        </ruby>
        を
        <ruby>
          追<rt>お</rt>
        </ruby>
        いかけた
      </>
    ),
    start: 42.74,
    end: 47.14,
  },

  // サビ
  {
    id: 8,
    text: (
      <>
        <ruby>
          何時<rt>いつ</rt>
        </ruby>
        かこの
        <ruby>
          涙<rt>なみだ</rt>
        </ruby>
        が
      </>
    ),
    start: 47.14,
    end: 49.7,
    section: "【サビ】",
    sectionKey: "section-chorus-1",
  },
  {
    id: 9,
    text: (
      <>
        この
        <ruby>
          仲間<rt>なかま</rt>
        </ruby>
        と{" "}
        <ruby>
          過<rt>す</rt>
        </ruby>
        ごして
      </>
    ),
    start: 49.7,
    end: 52.9,
  },
  {
    id: 10,
    text: (
      <>
        <ruby>ぶつかり合った</ruby>
        <ruby>
          日<rt>ひ</rt>
        </ruby>
        々が
      </>
    ),
    start: 52.9,
    end: 56.25,
  },
  {
    id: 11,
    text: (
      <>
        <ruby>
          勲章<rt>くんしょう</rt>
        </ruby>
        に
        <ruby>
          変<rt>か</rt>
        </ruby>
        わる
        <ruby>
          今<rt>いま</rt>
        </ruby>
        は
      </>
    ),
    start: 56.25,
    end: 60.01,
  },
  {
    id: 12,
    text: (
      <>
        この
        <ruby>
          涙<rt>なみだ</rt>
        </ruby>
        に
        <ruby>
          似合<rt>にあ</rt>
        </ruby>
        う
        <ruby>
          言葉<rt>ことば</rt>
        </ruby>
        はないから
      </>
    ),
    start: 60.01,
    end: 64.57,
  },
  {
    id: 13,
    text: (
      <>
        <ruby>
          何<rt>なに</rt>
        </ruby>
        も
        <ruby>
          言<rt>い</rt>
        </ruby>
        わないで
        <ruby>
          肩<rt>かた</rt>
        </ruby>
        を
      </>
    ),
    start: 64.57,
    end: 69.45,
  },
  {
    id: 14,
    text: (
      <>
        <ruby>
          抱<rt>だ</rt>
        </ruby>
        きしめていよう
      </>
    ),
    start: 69.45,
    end: 83.0,
  },

  // 2番
  {
    id: 15,
    text: (
      <>
        <ruby>
          高<rt>たか</rt>
        </ruby>
        い
        <ruby>
          場所<rt>ばしょ</rt>
        </ruby>
        からしか
        <ruby>
          見<rt>み</rt>
        </ruby>
        えない
        <ruby>
          景色<rt>けしき</rt>
        </ruby>
        は
      </>
    ),
    start: 83.0,
    end: 87.88,
    section: "【2番】",
    sectionKey: "section-2",
  },
  {
    id: 16,
    text: (
      <>
        いつも
        <ruby>
          壁<rt>かべ</rt>
        </ruby>
        を
        <ruby>
          登<rt>のぼ</rt>
        </ruby>
        った
        <ruby>
          先<rt>さき</rt>
        </ruby>
        にあった
      </>
    ),
    start: 87.88,
    end: 94.33,
  },
  {
    id: 17,
    text: (
      <>
        <ruby>
          想像<rt>そうぞう</rt>
        </ruby>
        できる
        <ruby>
          未来<rt>みらい</rt>
        </ruby>
        には
        <ruby>
          興味<rt>きょうみ</rt>
        </ruby>
        などなくて
      </>
    ),
    start: 94.33,
    end: 99.49,
  },
  {
    id: 18,
    text: (
      <>
        ずっと
        <ruby>
          熱<rt>あつ</rt>
        </ruby>
        い
        <ruby>
          目<rt>め</rt>
        </ruby>
        で
        <ruby>
          夢<rt>ゆめ</rt>
        </ruby>
        を
        <ruby>
          見<rt>み</rt>
        </ruby>
        てた
      </>
    ),
    start: 99.49,
    end: 105.6,
  },
  {
    id: 19,
    text: (
      <>
        やがて
        <ruby>
          不<rt>ふ</rt>
        </ruby>
        <ruby>
          可能<rt>かのう</rt>
        </ruby>
        が
        <ruby>
          可能<rt>かのう</rt>
        </ruby>
        に
      </>
    ),
    start: 105.6,
    end: 108.81,
  },
  {
    id: 20,
    text: (
      <>
        ほんの
        <ruby>
          少<rt>すこ</rt>
        </ruby>
        しずつ
        <ruby>
          変<rt>か</rt>
        </ruby>
        わっていく
      </>
    ),
    start: 108.81,
    end: 112.56,
  },
  {
    id: 21,
    text: (
      <>
        <ruby>
          青<rt>あお</rt>
        </ruby>
        すぎる
        <ruby>
          時<rt>とき</rt>
        </ruby>
        の
        <ruby>
          中<rt>なか</rt>
        </ruby>
        で
      </>
    ),
    start: 112.56,
    end: 124.71,
  },

  // サビ2
  {
    id: 22,
    text: (
      <>
        <ruby>
          何時<rt>いつ</rt>
        </ruby>
        かこの
        <ruby>
          涙<rt>なみだ</rt>
        </ruby>
        が
      </>
    ),
    start: 124.71,
    end: 127.16,
    section: "【サビ】",
    sectionKey: "section-chorus-2",
  },
  {
    id: 23,
    text: (
      <>
        この
        <ruby>
          仲間<rt>なかま</rt>
        </ruby>
        と{" "}
        <ruby>
          過<rt>す</rt>
        </ruby>
        ごして
      </>
    ),
    start: 127.16,
    end: 130.37,
  },
  {
    id: 24,
    text: (
      <>
        <ruby>ぶつかり合った</ruby>
        <ruby>
          日<rt>ひ</rt>
        </ruby>
        々が
      </>
    ),
    start: 130.37,
    end: 133.8,
  },
  {
    id: 25,
    text: (
      <>
        <ruby>
          勲章<rt>くんしょう</rt>
        </ruby>
        に
        <ruby>
          変<rt>か</rt>
        </ruby>
        わる きっと
      </>
    ),
    start: 133.8,
    end: 137.13,
  },
  {
    id: 26,
    text: (
      <>
        この
        <ruby>
          涙<rt>なみだ</rt>
        </ruby>
        に
        <ruby>
          似合<rt>にあ</rt>
        </ruby>
        う
        <ruby>
          言葉<rt>ことば</rt>
        </ruby>
        はないから
      </>
    ),
    start: 137.13,
    end: 141.76,
  },
  {
    id: 27,
    text: (
      <>
        <ruby>
          何<rt>なに</rt>
        </ruby>
        も
        <ruby>
          言<rt>い</rt>
        </ruby>
        わないで
        <ruby>
          肩<rt>かた</rt>
        </ruby>
        を
      </>
    ),
    start: 141.76,
    end: 146.69,
  },
  {
    id: 28,
    text: (
      <>
        <ruby>
          抱<rt>だ</rt>
        </ruby>
        きしめて
      </>
    ),
    start: 146.69,
    end: 148.49,
  },

  // ラストサビ
  {
    id: 29,
    text: (
      <>
        ああ この
        <ruby>
          笑顔<rt>えがお</rt>
        </ruby>
        が
      </>
    ),
    start: 148.49,
    end: 150.4,
    section: "【ラストサビ】",
    sectionKey: "section-last-chorus",
  },
  {
    id: 30,
    text: (
      <>
        この
        <ruby>
          仲間<rt>なかま</rt>
        </ruby>
        と
        <ruby>
          出会<rt>であ</rt>
        </ruby>
        って
      </>
    ),
    start: 150.4,
    end: 153.35,
  },
  {
    id: 31,
    text: (
      <>
        <ruby>
          信<rt>しん</rt>
        </ruby>
        じあえた
        <ruby>
          日<rt>ひ</rt>
        </ruby>
        々が
      </>
    ),
    start: 153.35,
    end: 156.91,
  },
  {
    id: 32,
    text: (
      <>
        <ruby>
          勲章<rt>くんしょう</rt>
        </ruby>
        に
        <ruby>
          変<rt>か</rt>
        </ruby>
        わる
        <ruby>
          今<rt>いま</rt>
        </ruby>
        は
      </>
    ),
    start: 156.91,
    end: 160.49,
  },
  {
    id: 33,
    text: (
      <>
        この
        <ruby>
          終<rt>お</rt>
        </ruby>
        わりのない
      </>
    ),
    start: 160.49,
    end: 162.14,
  },
  {
    id: 34,
    text: (
      <>
        <ruby>
          自分<rt>じぶん</rt>
        </ruby>
        への
        <ruby>
          挑戦<rt>ちょうせん</rt>
        </ruby>
        の
      </>
    ),
    start: 162.14,
    end: 165.3,
  },
  {
    id: 35,
    text: (
      <>
        <ruby>
          先<rt>さき</rt>
        </ruby>
        に
        <ruby>
          眩<rt>まぶ</rt>
        </ruby>
        しい
        <ruby>
          未来<rt>みらい</rt>
        </ruby>
        が
        <ruby>
          待<rt>ま</rt>
        </ruby>
        っているから
      </>
    ),
    start: 165.3,
    end: 171.81,
  },
  {
    id: 36,
    text: `La la la la la la la la la la la`,
    start: 171.81,
    end: 180.56,
  },
  {
    id: 37,
    text: `La la la la la la la la la la la`,
    start: 180.56,
    end: 201.0,
  },
];

export default function SongsPage() {
  const vocalAudioSrc = "/music/ituka_vocal.mp3";
  const karaokeAudioSrc = "/music/ituka_karaoke.mp3";

  const [currentTime, setCurrentTime] = useState(0);

  const vocalAudioRef = useRef<HTMLAudioElement>(null);
  const karaokeAudioRef = useRef<HTMLAudioElement>(null);

  const lineRefs = useRef<{ [key: number]: HTMLParagraphElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const activeLineIdRef = useRef<number | null>(null);

  const handleTimeUpdate = (audioElement: HTMLAudioElement | null) => {
    if (audioElement) {
      const time = audioElement.currentTime;
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
    const vocal = vocalAudioRef.current;
    const karaoke = karaokeAudioRef.current;

    if (karaoke && !karaoke.paused) {
      karaoke.currentTime = start;
      karaoke.play();
    } else if (vocal) {
      vocal.currentTime = start;
      vocal.play();
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

          {/* オーディオプレイヤー（両方連動） */}
          <div className="space-y-6 pt-2">
            {/* 音あり版 */}
            <div className="space-y-2 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-sm font-bold text-gray-800">
                🎤 音あり版（歌入り）
              </p>
              <audio
                ref={vocalAudioRef}
                controls
                className="w-full"
                onTimeUpdate={() => handleTimeUpdate(vocalAudioRef.current)}
                onPlay={() => {
                  if (karaokeAudioRef.current) karaokeAudioRef.current.pause();
                }}
              >
                <source src={vocalAudioSrc} type="audio/mp3" />
                お使いのブラウザは音声再生に対応していません。
              </audio>
            </div>

            {/* カラオケ版 */}
            <div className="space-y-2 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-sm font-bold text-gray-800">
                🎼 カラオケ版（歌無し）
              </p>
              <audio
                ref={karaokeAudioRef}
                controls
                className="w-full"
                onTimeUpdate={() => handleTimeUpdate(karaokeAudioRef.current)}
                onPlay={() => {
                  if (vocalAudioRef.current) vocalAudioRef.current.pause();
                }}
              >
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
                      className={`transition-all duration-300 py-1 cursor-pointer hover:opacity-80 ruby-box ${
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
