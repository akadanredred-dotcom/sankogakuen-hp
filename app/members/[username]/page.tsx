"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { useState, use } from "react";
import Footer from "../../3fes/components/Footer";
import Navbar from "@/app/components/Navbar";

interface MemberInfo {
    name: string;
    role: string;
    school: string;
    hobbies: string;
    resolution: string;
    imageUrl: string;
}

// 1. Shared Organization Social Media Links
const SHARED_SNS = {
    line: "http://localhost:3000/members/https://izumiteppeikakkoii.jimdofree.com/%E5%AD%A6%E6%A0%A1/3",
    instagram:
        "https://www.instagram.com/hyouga_2026?igsh=MXZub2doM2d0NmMzdA%3D%3D&utm_source=qr",
    facebook:
        "http://localhost:3000/members/https://izumiteppeikakkoii.jimdofree.com/%E5%AD%A6%E6%A0%A1/5",
    tiktok: "https://tiktok.com/@your_official_tiktok",
};

// 2. Member Database
const membersData: Record<string, MemberInfo> = {
    komiya: {
        name: "小宮 遥斗",
        role: "団長",
        school: "東京リゾート＆スポーツ専門学校",
        hobbies: "ギターを弾くこと、一発ギャグ",
        resolution:
            "笑いの絶えない最高の団にします！！ 史上最高の三フェスに！！！",
        imageUrl: "/img/jikosyoukaisiryou6.jpg",
    },
    arai: {
        name: "新井 真季",
        role: "副団長",
        school: "東京ビューティー＆ブライダル専門学校",
        hobbies: "ネイル、もつ鍋",
        resolution: "みんながキラキラ輝ける サンフェスにします！！",
        imageUrl: "/img/jikosyoukaisiryou3.jpg",
    },
    teppei: {
        name: "泉 哲平",
        role: "副団長",
        school: "東京みらいAI&IT専門学校",
        hobbies: "バイト",
        resolution: "優勝絶対！",
        imageUrl: "/img/jikosyoukaisiryou.jpg",
    },
    ida: {
        name: "井田 星南",
        role: "副団長",
        school: "東京スイーツ＆カフェ専門学校",
        hobbies: "バスケ、ドライブ",
        resolution:
            "勝ちにこだわって赤団と サンフェスをさいこうに盛り上げます！！",
        imageUrl: "/img/jikosyoukaisiryou5.jpg",
    },
    takayama: {
        name: "高山 桃悠",
        role: "副団長",
        school: "東京リゾート＆スポーツ専門学校",
        hobbies: "スティッチ探し",
        resolution:
            "みんなの笑顔と力を合わせて、最高の赤団を目指します！！",
        imageUrl: "/img/jikosyoukaisiryou4.jpg",
    },
    atumi: {
        name: "渥美 美月",
        role: "副団長",
        school: "東京立川こども専門学校",
        hobbies: "ライブに行く・マジック",
        resolution:
            "今までにないくらい最高の三フェスにするために最後まで笑顔で団を盛り上げます！！！",
        imageUrl: "/img/jikosyoukaisiryou2.jpg",
    },
    jyunsei: {
        name: "井之上 準星",
        role: "演舞リーダー",
        school: "東京リゾート＆スポーツ専門学校",
        hobbies: "ライブ・ギター",
        resolution: "誰よりも熱く、誰よりも本気で挑みます。",
        imageUrl: "/img/jikosyoukaisiryou7.png",
    },
    aikawa: {
        name: "相川 心那",
        role: "パフォーマンスリーダー",
        school: "東京スイーツ＆カフェ専門学校",
        hobbies: "ライブに行くこと、パッションティー",
        resolution: "笑顔あふれる最高の三フェスに！！！！ 絶対優勝！",
        imageUrl: "/img/jikosyoukaisiryou8.png",
    },
    haruka: {
        name: "真庭 春果",
        role: "パフォーマンスリーダー",
        school: "東京立川こども専門学校",
        hobbies: "韓国ドラマ鑑賞",
        resolution:
            "いままで以上に最高なパフォーマンスをして絶対に優勝します！！",
        imageUrl: "/img/jikosyoukaisiryou9.jpg",
    },
};
interface PageProps {
    params: Promise<{ username: string }>;
}

export default function MemberPage({ params }: PageProps) {
    // Unpack dynamic route params inside a client component safely
    const resolvedParams = use(params);
    const memberKey = resolvedParams.username.toLowerCase();
    const member = membersData[memberKey];

    const [isExpanded, setIsExpanded] = useState(false);

    if (!member) {
        notFound();
    }

    const automatedSidebarList = Object.entries(membersData).map(
        ([slug, data]) => ({
            slug,
            name: data.name,
        }),
    );

    // On mobile screens, display only the first 4 members if collapsed
    const visibleMobileMembers = isExpanded
        ? automatedSidebarList
        : automatedSidebarList.slice(0, 4);

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-100/40 via-rose-50 to-white text-gray-900 font-sans selection:bg-red-200 pt-20 md:pt-24">
            {/* --- HEADER --- */}
            <Navbar />

            {/* --- MAIN PAGE CONTENT --- */}
            <div className="max-w-6xl mx-auto px-4 py-6 md:px-6 md:py-12">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    {/* Responsive Aside Block (Grid on Mobile | Stacked list on Desktop) */}
                    <aside className="w-full md:w-52 flex-shrink-0 bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-red-100 shadow-sm h-fit">
                        <div className="border-l-4 border-red-600 pl-3 mb-3">
                            <h2 className="text-gray-900 font-black text-xs md:text-sm tracking-wider">
                                メンバー一覧
                            </h2>
                        </div>

                        {/* Desktop uses full listing, mobile maps onto the filter array container */}
                        <ul className="hidden md:flex flex-col space-y-1 text-xs font-bold text-gray-600">
                            {automatedSidebarList.map((m, idx) => {
                                const isActive = m.slug === memberKey;
                                return (
                                    <li key={idx}>
                                        <Link
                                            href={`/members/${m.slug}`}
                                            className={`block py-2 px-2.5 rounded-lg transition-all tracking-wide ${
                                                isActive
                                                    ? "bg-red-600 text-white font-black shadow-md shadow-red-600/20"
                                                    : "hover:bg-red-50 hover:text-red-600"
                                            }`}
                                        >
                                            {m.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Mobile view only: Clean clean grid list */}
                        <ul className="grid grid-cols-2 gap-2 text-xs font-bold text-gray-600 md:hidden">
                            {visibleMobileMembers.map((m, idx) => {
                                const isActive = m.slug === memberKey;
                                return (
                                    <li key={idx}>
                                        <Link
                                            href={`/members/${m.slug}`}
                                            className={`block py-2 px-2 rounded-lg transition-all tracking-wide text-center ${
                                                isActive
                                                    ? "bg-red-600 text-white font-black shadow-md"
                                                    : "bg-red-50/50"
                                            }`}
                                        >
                                            {m.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Expand Button for mobile grid layout */}
                        {automatedSidebarList.length > 4 && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                type="button"
                                className="mt-3 w-full border border-dashed border-red-300 text-red-600 rounded-lg py-1.5 text-[11px] font-black hover:bg-red-50 transition-colors block md:hidden"
                            >
                                {isExpanded
                                    ? "閉じる ▲"
                                    : `すべてのメンバーを表示 (+${automatedSidebarList.length - 4}) ▼`}
                            </button>
                        )}
                    </aside>

                    {/* 右側：プロフィールメインコンテンツ */}
                    <main className="flex-1 bg-white/95 p-5 md:p-8 rounded-2xl border border-red-50 shadow-sm space-y-6">
                        {/* メンバータイトルヘッダー */}
                        <div className="border-b border-gray-100 pb-4 text-center md:text-left">
                            <div className="text-[10px] font-black text-white uppercase tracking-widest bg-red-600 inline-block px-2 py-0.5 rounded mb-2">
                                赤団 {member.role}
                            </div>
                            <h1 className="text-gray-900 text-2xl md:text-3xl font-black tracking-tight block">
                                {member.name}
                            </h1>
                        </div>

                        {/* 詳細コンテンツエリア */}
                        <div className="grid grid-cols-1 md:grid-cols-[4.5fr_5.5fr] gap-6 md:gap-8 items-start">
                            {/* 写真エリア */}
                            <div className="w-full max-w-sm mx-auto md:max-w-none relative rounded-xl shadow-md overflow-hidden bg-gray-50 border border-gray-100 aspect-[3/4]">
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* 学校・趣味、意気込みエリア */}
                            <div className="space-y-5">
                                <div className="space-y-4 text-xs leading-relaxed text-gray-700 font-bold bg-rose-50/50 p-4 md:p-5 rounded-xl border border-red-100/40">
                                    <div>
                                        <span className="text-red-600 block text-[10px] uppercase tracking-wider mb-1">
                                            【学校】
                                        </span>
                                        <p className="text-gray-900 text-sm font-black">
                                            {member.school}
                                        </p>
                                    </div>
                                    <div className="border-t border-red-100/60 pt-3">
                                        <span className="text-red-600 block text-[10px] uppercase tracking-wider mb-1">
                                            【趣味】
                                        </span>
                                        <p className="text-gray-900 text-sm font-black">
                                            {member.hobbies}
                                        </p>
                                    </div>
                                </div>

                                {/* 意気込みエリア */}
                                <div className="bg-gradient-to-br from-red-50 via-rose-50/30 to-white p-4 md:p-5 rounded-xl border border-red-200/60 shadow-sm relative overflow-hidden">
                                    <span className="block text-xs text-red-600 font-black mb-1.5 flex items-center justify-center md:justify-start gap-1">
                                        🔥{" "}
                                        <span className="tracking-wider">
                                            三フェスへの意気込み
                                        </span>
                                    </span>
                                    <p className="text-center md:text-left font-black text-gray-900 text-sm md:text-base leading-snug whitespace-pre-line">
                                        {member.resolution}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            {/* --- FOOTER --- */}
            <Footer />
        </div>
    );
}
