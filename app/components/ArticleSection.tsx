import React from "react";
import Link from "next/link"; // Imported Next.js Link

interface MemberProps {
  name: string;
  role: string;
  imageUrl: string;
  slug: string; // Added slug property
}

function MemberCard({ name, role, imageUrl, slug }: MemberProps) {
  return (
    // Wrap the card inside a Link component pointing to their dynamic path
    <Link href={`/members/${slug}`} className="group block">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col items-center p-4 hover:shadow-md transition-shadow">
        {/* 顔写真エリア */}
        <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-900 border-4 border-red-600 mb-4">
          <img
            src={imageUrl}
            alt={`${name}の顔写真`}
            className="w-full h-full object-cover object-center transition-all duration-300 md:grayscale md:group-hover:grayscale-0"
          />
          {/* 左上の「赤団」斜めラベル */}
          <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider transform -rotate-12 -translate-x-1 translate-y-1 shadow">
            赤団
          </div>
        </div>
        {/* 名前と役職 */}
        <div className="text-center">
          <h3 className="font-bold text-gray-900 mb-0.5 group-hover:text-red-600 transition-colors">
            {name}
          </h3>
          <p className="text-xs font-semibold text-red-600 tracking-wide">
            {role}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function ShopMembers() {
  // Syncing slugs and real asset paths
  const members = [
    {
      name: "小宮 遥斗",
      role: "団長",
      imageUrl: "/img/jikosyoukaisiryou6.jpg",
      slug: "komiya",
    },
    {
      name: "井田 星南",
      role: "副団長",
      imageUrl: "/img/jikosyoukaisiryou5.jpg",
      slug: "ida",
    },
    {
      name: "泉 哲平",
      role: "副団長",
      imageUrl: "/img/jikosyoukaisiryou.jpg",
      slug: "teppei",
    },
    {
      name: "新井 真季",
      role: "副団長",
      imageUrl: "/img/jikosyoukaisiryou3.jpg",
      slug: "arai",
    },
    {
      name: "渥美 美月",
      role: "副団長",
      imageUrl: "/img/jikosyoukaisiryou2.jpg",
      slug: "atumi",
    },
    {
      name: "高山 桃悠",
      role: "副団長",
      imageUrl: "/img/jikosyoukaisiryou4.jpg",
      slug: "takayama",
    },
    {
      name: "井之上 準星",
      role: "演舞リーダー",
      imageUrl: "/img/jikosyoukaisiryou7.png",
      slug: "jyunsei",
    },
    {
      name: "相川 心那",
      role: "パフォーマンスリーダー",
      imageUrl: "/img/jikosyoukaisiryou8.png",
      slug: "aikawa",
    },
    {
      name: "真庭 春果",
      role: "パフォーマンスリーダー",
      imageUrl: "/img/jikosyoukaisiryou9.jpg",
      slug: "haruka",
    },
  ];

  return (
    <section
      id="shop-members"
      className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* 三か条・ヘッダーエリア */}

      {/* メンバーグリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
            slug={member.slug}
          />
        ))}
      </div>

      {/* 下部のサブ見出しテキストグリッド */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 border-t border-gray-100 pt-12">
        <div className="space-y-2">
          <h4 className="font-bold text-sm text-gray-900 border-l-4 border-red-600 pl-3">
            📣 応援
          </h4>
          <p className="text-gray-500 text-xs leading-relaxed">
            <li>喧嘩上等</li>
            <li>盛り上がりが足りない</li>
            <li>Gフレア</li>
            <li>日曜日よりの使者</li>
            <li>We are reds</li>
            <li>アゲホイ</li>
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-sm text-gray-900 border-l-4 border-red-600 pl-3">
            📝 サブ見出し
          </h4>
          <p className="text-gray-500 text-xs leading-relaxed">
            提案したい内容を自由に書く本文テキスト。
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-sm text-gray-900 border-l-4 border-red-600 pl-3">
            🔒 サブ見出し
          </h4>
          <p className="text-gray-500 text-xs leading-relaxed">
            主導したいことを自由に書く本文テキスト。
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
