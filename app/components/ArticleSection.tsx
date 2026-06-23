import React from "react";

interface MemberProps {
  name: string;
  role: string;
  imageUrl: string;
}

// 1人分のカードコンポーネント
function MemberCard({ name, role, imageUrl }: MemberProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col items-center p-4 hover:shadow-md transition-shadow">
      {/* 顔写真エリア */}
      <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-900 border-4 border-red-600 mb-4">
        <img
          src={imageUrl}
          alt={`${name}の顔写真`}
          className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-300"
        />
        {/* 左上の「赤団」斜めラベル */}
        <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider transform -rotate-12 -translate-x-1 translate-y-1 shadow">
          赤団
        </div>
      </div>
      {/* 名前と役職 */}
      <div className="text-center">
        <h3 className="font-bold text-gray-900 mb-0.5">{name}</h3>
        <p className="text-xs font-semibold text-red-600 tracking-wide">
          {role}
        </p>
      </div>
    </div>
  );
}

export default function ShopMembers() {
  // 予算0円でそのまま使える、高品質なフリー素材（人物・アジアンテイスト）の直リンクURL
  const members = [
    {
      name: "小宮 遥斗",
      role: "団長",
      imageUrl: "/img/jikosyoukaisiryou6.jpg", // ✅ 文字列のパスだけ渡す
    },
    {
      name: "井田 星南",
      role: "副団長",
      imageUrl: "/img/jikosyoukaisiryou5.jpg",
    },
    {
      name: "泉 哲平",
      role: "副団長",
      imageUrl: "/img/jikosyoukaisiryou.jpg",
    },
    {
      name: "新井 真季",
      role: "副団長",
      imageUrl: "/img/jikosyoukaisiryou3.jpg",
    },
    {
      name: "渥美 美月",
      role: "副団長",
      imageUrl: "/img/jikosyoukaisiryou2.jpg",
    },
    {
      name: "高山 桃悠",
      role: "副団長",
      imageUrl: "/img/jikosyoukaisiryou4.jpg",
    },
    {
      name: "井之上 準星",
      role: "演武リーダー",
      imageUrl: "/img/jikosyoukaisiryou6.jpg", // ✅ 文字列のパスだけ渡す
    },
    {
      name: "相川 心那",
      role: "パフォーマンスリーダー",
      imageUrl: "/img/jikosyoukaisiryou6.jpg", // ✅ 文字列のパスだけ渡す
    },
    {
      name: "真庭 春果",
      role: "パフォーマンスリーダー",
      imageUrl: "/img/jikosyoukaisiryou6.jpg", // ✅ 文字列のパスだけ渡す
    },
  ];

  return (
    <section
      id="shop-members"
      className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* 三か条・ヘッダーエリア */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-red-600 tracking-widest border-b-2 border-red-600 pb-2 mb-4 inline-block">
          三か条
        </h2>
        <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6">
          このセクションのサブ見出しは、長くても短くても構いません。
        </p>
        {/* ボタン群 */}
        <div className="flex justify-center space-x-4">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-6 py-2.5 rounded shadow transition-colors">
            ボタン
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-bold text-xs px-6 py-2.5 rounded shadow-sm transition-colors">
            セカンダリボタン
          </button>
        </div>
      </div>

      {/* メンバーグリッド (Figma通りの3列x2段レイアウト、スマホでは1列) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>

      {/* 下部のサブ見出しテキストグリッド */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 border-t border-gray-100 pt-12">
        <div className="space-y-2">
          <h4 className="font-bold text-sm text-gray-900 border-l-4 border-red-600 pl-3">
            ⚙️ サブ見出し
          </h4>
          <p className="text-gray-500 text-xs leading-relaxed">
            伝えたいことを自由に書く本文テキスト。要点や引用、ちょっとしたエピソード、短いストーリーなども加えてください。
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-sm text-gray-900 border-l-4 border-red-600 pl-3">
            📝 サブ見出し
          </h4>
          <p className="text-gray-500 text-xs leading-relaxed">
            提案したい内容を自由に書く本文テキスト。要点や引用、ちょっとしたエピソード、短いストーリーなども加えてください。
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-sm text-gray-900 border-l-4 border-red-600 pl-3">
            🔒 サブ見出し
          </h4>
          <p className="text-gray-500 text-xs leading-relaxed">
            主導したいことを自由に書く本文テキスト。要点や引用、ちょっとしたエピソード、短いストーリーなども加えてください。
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-sm text-gray-900 border-l-4 border-red-600 pl-3">
            📅 日付
          </h4>
          <p className="text-gray-500 text-xs leading-relaxed">
            2026年9月14日(月)会場設営、リハーサル
            <br />
            2026年9月15日(火)首都圏三幸フェスティバル本番
          </p>
        </div>
      </div>
    </section>
  );
}
