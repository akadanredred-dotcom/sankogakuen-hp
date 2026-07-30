"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
// パスが異なる場合は適宜調整してください
import Countdown from "../components/Countdown";
const supportItems = [
  // --- 応援 (ID 1〜6) ---
  {
    id: 1,
    src: "/movise/movise1.mp4",
    title: "日曜日よりの使者",
    category: "support",
    description: "肩を組んで応援します",
    lyrics: [
      "らららーら、らららららー",
      "一緒に戦おうぜ 誇りと夢を抱いて",
      "優勝は 俺たちさ",
      "我らがそう豹牙",
      "必ず勝利する 最高のチームなんだ",
      "最高で 最愛の われらがそう豹牙",
      "らららーら ららららーら",
      "ららーらららら ららららー ららららーら",
      "らららーららららー",
    ],
  },
  {
    id: 2,
    src: "/movise/movise2.mp4",
    title: "Gフレア",
    category: "support",
    description: "タオル・バルーンを持って振り回そう！！",
    lyrics: [
      "オオオオー オオオオー オオオオー",
      "オオオオー オオオオー オオオオー",
      "オオオオオオオオー オオオオー",
      "オオオオオオオオー オオオオー",
      "オオオオー オオオオオオオオー",
      "オオオオー オオオオオオオオー",
      "レッツ・ゴー 豹牙！",
      "レッツ・ゴー 豹牙！",
      "レッツ・ゴー 豹牙！",
      "レッツ・ゴー 豹牙！",
      "豹牙！ 豹牙！",
      "豹牙！ 豹牙！",
    ],
  },
  {
    id: 3,
    src: "/movise/movise3.mp4",
    title: "We Are Reds",
    category: "support",
    description: "前の人を殴るように力強く！！",
    lyrics: [
      "We Are Reds",
      "We Are Reds",
      "We Are Reds",
      "We Are Reds",
      "We Are Reds",
      "We Are Reds",
    ],
  },
  {
    id: 4,
    src: "/movise/movise4.mp4",
    title: "アゲホイ",
    category: "support",
    description:
      "一回目はいつもの振り付け（入りが男子→次に女子の繰り返し！）、二回目以降は団長の振りに合わせる",
    lyrics: [
      "【男子】エッサエッサー",
      "【女子】エッサエッサー",
      "【男子】アゲアゲホイホイ",
      "【女子】アゲアゲホイホイ",
      "【男子】もっともっとー",
      "【女子】もーっともっともっと",
      "手拍子：パンパパンパンパン",
      "もう１回（ここから団長の振り付け）",
    ],
  },
  {
    id: 5,
    src: "/movise/movise5.mp4",
    title: "喧嘩上等",
    category: "support",
    description: "最初は団長だけ",
    lyrics: [
      "おおお 俺らの島 ここは俺らのホーム",
      "おおお 血祭りだわ かかってこいや喧嘩上等",
      "（繰り返し）",
    ],
  },
  {
    id: 6,
    src: "/movise/movise6.mp4",
    title: "盛り上がりが足りない",
    category: "support",
    description: "タイミング合わせて手をあげる",
    lyrics: ["も もり もりあ", "盛り上がりが足りない！", "（繰り返し）"],
  },

  // --- 演舞 (ID 7〜11) ---
  {
    id: 7,
    src: "/movise/movise7.mp4",
    title: "入場前",
    category: "dance",
    description: "手を胸に当てる",
    lyrics: [
      "団長：俺たちは誰だ！",
      "みんな：豹牙！",
      "団長：誰より汗を流したのは",
      "みんな：豹牙！",
      "団長：我らの誇りを胸に、狙うは総合優勝！いくぞー！！",
      "みんな：ふぉーーーー！！！",
    ],
  },
  {
    id: 8,
    src: "/movise/movise8.mp4",
    title: "最初の声出し",
    category: "dance",
    description: "元気よく！",
    lyrics: [
      "演舞リーダー：よろしくお願いします",
      "みんな：よろしくお願いします",
      "演舞リーダー：行くぞ！",
      "みんな：手拍子×４ ＆ おーーー",
      "演舞リーダー：取るぞ優勝！",
      "みんな：おー！（豹牙ポーズ）",
      "演舞リーダー：構え",
      "みんな：腕組",
    ],
  },
  {
    id: 9,
    src: "/movise/movise9.mp4",
    title: "エール交換",
    category: "dance",
    description: "敵でも気持ちを込めて",
    lyrics: [
      "団長：これまで共に戦い抜いた仲間へ、敬意をこめて",
      "演舞リーダー：これよりエール交換を始める",
      "みんな：おす！！",
      "（団名いう：他の団）",
      "演舞リーダー：それぞれの団のセリフを言う",
      "演舞リーダー・団長：先に見本",
      "みんな：フレー！フレー！（団名） ※これを３団",
      "団長：我ら！",
      "みんな：豹牙！！",
      "団長：優勝するぞーー！！",
      "みんな：おす！！",
      "演舞リーダー：構え",
      "みんな：構える",
    ],
  },
  {
    id: 10,
    src: "/movise/movise10.mp4",
    title: "太鼓１",
    category: "dance",
    description: "リズムに合わせて",
    lyrics: [
      "みんな：手拍子×１２",
      "みんな：おす！！",
      "みんな：手拍子×４",
      "みんな：おす！！",
      "みんな：手拍子×１６",
      "みんな：パンチ×３",
      "みんな：手拍子×７",
      "みんな：せいやー！（右手を上に）",
    ],
  },
  {
    id: 11,
    src: "/movise/movise11.mp4",
    title: "太鼓２",
    category: "dance",
    description: "リズムに合わせて",
    lyrics: [
      "最初は手は腰に",
      "は・は・は（前にパンチ）",
      "手を＝この形にする",
      "は",
      "は（手をあげる）",
      "手は腰！",
      "は・は（前にパンチ）",
      "は！（あげる） は！（クロス） は！（こし）",
    ],
  },
];

export default function SupportPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems = supportItems.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 md:px-8 relative">
      <Navbar />

      {/* 右下に固定表示するカウントダウン */}
      <div className="fixed bottom-6 right-6 z-[60] shadow-[0_10px_40px_-10px_rgba(220,38,38,0.5)] rounded-3xl overflow-hidden bg-white border-4 border-red-100 p-5 text-center">
        {/* Countdownコンポーネントの配置 */}
        <Countdown footerId="support-footer" />
      </div>

      <div className="max-w-4xl mx-auto space-y-12 mt-6">
        <div className="text-center bg-white rounded-3xl shadow-lg p-8 space-y-4">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2">
            すべての応援動画・プロジェクト詳細
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            演舞を含むすべての応援動画を通じて、私たちのこれまでの歩みと熱い想いをご覧ください。
          </p>

          <div className="pt-2 flex justify-center items-center gap-3">
            <label
              htmlFor="category-select"
              className="text-sm font-bold text-gray-700"
            >
              表示を切り替え：
            </label>
            <select
              id="category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border-2 border-gray-200 rounded-xl font-bold text-gray-800 bg-white shadow-sm focus:outline-none focus:border-red-600 transition-colors cursor-pointer text-sm md:text-base"
            >
              <option value="all">すべて表示</option>
              <option value="support">応援の練習</option>
              <option value="dance">演舞の練習</option>
            </select>
          </div>
        </div>

        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            id={`video-${item.id}`}
            className={`bg-white rounded-3xl shadow-xl overflow-hidden p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 scroll-mt-24 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg bg-zinc-900 aspect-[9/16]">
              <video
                src={item.src}
                controls
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                {item.title}
              </h2>

              <p className="text-gray-900 font-bold text-base md:text-lg border-l-4 border-red-600 pl-3">
                {item.description}
              </p>

              <div className="bg-gray-50 p-4 rounded-xl space-y-1.5 text-gray-700 text-sm md:text-base leading-relaxed">
                {item.lyrics.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        ))}

        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl shadow">
            <p className="text-gray-500 font-medium">
              該当する動画はありません。
            </p>
          </div>
        )}

        <div className="text-center pt-4">
          <a
            href="/"
            className="inline-block px-8 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-full shadow transition-colors text-sm md:text-base"
          >
            ← トップページへ戻る
          </a>
        </div>
      </div>
    </main>
  );
}
