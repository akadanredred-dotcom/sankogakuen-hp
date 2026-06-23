import { notFound } from "next/navigation";
import Link from "next/link";

interface MemberSNS {
    line: string;
    instagram: string;
    facebook: string;
    tiktok: string;
}

interface MemberInfo {
    name: string;
    role: string;
    descriptionJa: string;
    descriptionEn: string;
    imageUrl: string;
    sns: MemberSNS;
}

// 1. Your single source of truth database
const membersData: Record<string, MemberInfo> = {
    teppei: {
        name: "小宮 遥斗",
        role: "団長",
        descriptionJa:
            "記事や投稿全体の本文テキスト。ページが完成したときのイメージを示すために、ダミーテキストを挿入します。",
        descriptionEn:
            "Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor.",
        imageUrl:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        sns: {
            line: "https://line.me/ti/p/~teppei_example",
            instagram: "https://instagram.com/teppei_example",
            facebook: "https://facebook.com/teppei.example",
            tiktok: "https://tiktok.com/@teppei_example",
        },
    },
    lisa: {
        name: "井田 星南",
        role: "副団長",
        descriptionJa:
            "デザイナーとしての活動全体の本文テキスト。ここに活動理念や簡単な紹介テキストが入ります。",
        descriptionEn:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        sns: {
            line: "https://line.me/ti/p/~lisa_example",
            instagram: "https://instagram.com/lisa_example",
            facebook: "https://facebook.com/lisa.example",
            tiktok: "https://tiktok.com/@lisa_example",
        },
    },
};

interface PageProps {
    params: Promise<{ username: string }>;
}

export default async function MemberPage({ params }: PageProps) {
    const { username } = await params;
    const memberKey = username.toLowerCase();
    const member = membersData[memberKey];

    if (!member) {
        notFound();
    }

    // 2. Automatically generate the list array from the membersData keys and values
    const automatedSidebarList = Object.entries(membersData).map(
        ([slug, data]) => ({
            slug,
            name: data.name,
        }),
    );

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-pink-200">
            {/* --- HEADER --- */}
            <header className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center bg-white">
                <div className="font-bold text-xl tracking-tight">サイト名</div>
                <nav className="flex items-center space-x-8 text-sm font-medium text-gray-600">
                    <a href="#" className="hover:text-black">
                        ページ
                    </a>
                    <a href="#" className="hover:text-black">
                        ページ
                    </a>
                    <a href="#" className="hover:text-black">
                        ページ
                    </a>
                    <button className="bg-[#ebdcd0] hover:bg-[#decbc0] text-gray-800 font-semibold py-2 px-6 rounded-md transition-colors text-xs">
                        ボタン
                    </button>
                </nav>
            </header>

            {/* --- BANNER / MAIN AREA --- */}
            <div className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 py-12 px-6 relative overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 relative z-10">
                    {/* Automated Left Sidebar */}
                    <aside className="w-full md:w-52 bg-white/80 backdrop-blur-md rounded-3xl p-6 text-gray-800 flex flex-col shadow-sm">
                        <h2 className="text-[#4146e2] font-bold text-lg mb-4 border-b border-gray-200/50 pb-2">
                            メンバー
                        </h2>
                        <ul className="space-y-3 text-xs font-medium">
                            {automatedSidebarList.map((m, idx) => {
                                const isActive = m.slug === memberKey;
                                return (
                                    <li
                                        key={idx}
                                        className="flex items-center space-x-1"
                                    >
                                        <span
                                            className={
                                                isActive
                                                    ? "text-red-500 font-bold"
                                                    : "text-gray-400"
                                            }
                                        >
                                            •
                                        </span>
                                        <Link
                                            href={`/members/${m.slug}`}
                                            className={`hover:text-blue-600 transition-colors ${
                                                isActive
                                                    ? "text-black font-bold underline"
                                                    : "text-gray-700"
                                            }`}
                                        >
                                            {m.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </aside>

                    {/* Dynamic Content Card */}
                    <section className="flex-1 bg-[#ebdcd0]/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row justify-between items-start gap-8">
                        <div className="flex-1 space-y-4">
                            <h1 className="text-red-500 text-4xl md:text-5xl font-black tracking-widest flex gap-4">
                                {member.name.split(" ").map((part, i) => (
                                    <span key={i}>{part}</span>
                                ))}
                            </h1>
                            <p className="text-lg font-bold text-gray-700 pt-2">
                                {member.role}
                            </p>

                            <div className="space-y-4 text-xs leading-relaxed text-gray-800 border-t border-gray-400/30 pt-4 max-w-xl">
                                <p className="font-semibold underline decoration-gray-400 decoration-1 underline-offset-4">
                                    {member.descriptionJa}
                                </p>
                                <p className="underline decoration-gray-400 decoration-1 underline-offset-4 text-justify">
                                    {member.descriptionEn}
                                </p>
                            </div>
                        </div>

                        {/* Profile Picture */}
                        <div className="w-full md:w-64 aspect-square relative rounded shadow-xl overflow-hidden bg-black flex-shrink-0">
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </section>
                </div>
            </div>

            {/* --- LOWER SECTIONS --- */}
            <div className="max-w-2xl mx-auto px-6 py-16 space-y-16">
                {/* Dynamic Social Media Section */}
                <section className="space-y-6">
                    <h2 className="text-xl font-bold tracking-tight text-black">
                        SNS 参加してくれたら嬉しいです。
                    </h2>
                    <div className="flex items-center space-x-5">
                        {/* LINE */}
                        <a
                            href={member.sns.line}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-gray-700 transition-colors"
                            aria-label="LINE"
                        >
                            <svg
                                className="w-10 h-10"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738s-12 4.369-12 9.738c0 4.814 4.269 8.846 10.036 9.564.391.084.922.258 1.057.592.121.303.079.777.039 1.084l-.171 1.027c-.052.303-.251 1.184 1.081.646 1.333-.537 7.18-4.227 9.799-7.236 2.064-2.319 3.159-4.761 3.159-7.673zm-14.865 3.913h-2.344a.43.43 0 0 1-.43-.43v-5.234a.43.43 0 0 1 .43-.43h.521a.43.43 0 0 1 .43.43v4.304h1.393a.43.43 0 0 1 .43.43v.51a.43.43 0 0 1-.43.43zm2.593-.43a.43.43 0 0 1-.43.43h-.521a.43.43 0 0 1-.43-.43v-5.234a.43.43 0 0 1 .43-.43h.521a.43.43 0 0 1 .43.43v5.234zm4.845 0a.43.43 0 0 1-.43.43h-.49a.43.43 0 0 1-.383-.234l-2.022-2.87v2.674a.43.43 0 0 1-.43.43h-.521a.43.43 0 0 1-.43-.43v-5.234a.43.43 0 0 1 .43-.43h.491c.171 0 .326.1.396.255l1.994 2.835v-2.66a.43.43 0 0 1 .43-.43h.521a.43.43 0 0 1 .43.43v5.234zm3.627-3.411h-1.423v1.078h1.423a.43.43 0 0 1 .43.43v.496a.43.43 0 0 1-.43.43h-1.423v1.063h1.423a.43.43 0 0 1 .43.43v.511a.43.43 0 0 1-.43.43h-2.375a.43.43 0 0 1-.43-.43v-5.234a.43.43 0 0 1 .43-.43h2.375a.43.43 0 0 1 .43.43v.511a.43.43 0 0 1-.43.435z" />
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a
                            href={member.sns.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-gray-700 transition-colors"
                            aria-label="Instagram"
                        >
                            <svg
                                className="w-10 h-10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect
                                    x="2"
                                    y="2"
                                    width="20"
                                    height="20"
                                    rx="5"
                                    ry="5"
                                ></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line
                                    x1="17.5"
                                    y1="6.5"
                                    x2="17.51"
                                    y2="6.5"
                                ></line>
                            </svg>
                        </a>
                        {/* Facebook */}
                        <a
                            href={member.sns.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-gray-700 transition-colors"
                            aria-label="Facebook"
                        >
                            <svg
                                className="w-10 h-10"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        {/* TikTok */}
                        <a
                            href={member.sns.tiktok}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-gray-700 transition-colors"
                            aria-label="TikTok"
                        >
                            <svg
                                className="w-10 h-10"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.03 1.62 4.19 1.15 1.25 2.75 1.93 4.43 2.11v3.83c-1.39-.07-2.78-.54-3.92-1.36-.78-.58-1.42-1.34-1.87-2.22-.01 2.3-.01 4.59-.02 6.89-.04 3.25-1.14 6.51-3.66 8.58-2.6 2.16-6.38 2.61-9.42 1.22-3.14-1.37-5.26-4.71-5.11-8.17.15-3.89 3.09-7.39 6.96-8.06 1.05-.19 2.13-.1 3.16.18v4.03c-1.03-.43-2.23-.41-3.23.13-1.15.58-1.91 1.78-1.93 3.07-.04 1.78 1.27 3.39 3.04 3.61 1.73.28 3.48-.7 3.92-2.39.11-.42.14-.85.14-1.29-.01-4.43-.01-8.86-.01-13.3z" />
                            </svg>
                        </a>
                    </div>
                </section>

                {/* Contact Form */}
                <section className="space-y-6">
                    <h2 className="text-xl font-bold tracking-tight text-black">
                        お問い合わせはこちら
                    </h2>
                    <form className="space-y-4 text-xs font-semibold">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-gray-700 block">
                                    名
                                </label>
                                <input
                                    type="text"
                                    placeholder="Jane"
                                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-black bg-white"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-gray-700 block">
                                    姓
                                </label>
                                <input
                                    type="text"
                                    placeholder="Smitherton"
                                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-black bg-white"
                                />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-gray-700 block">
                                メールアドレス
                            </label>
                            <input
                                type="email"
                                placeholder="email@janesfakedomain.net"
                                className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-black bg-white"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-gray-700 block">
                                あなたのメッセージ
                            </label>
                            <textarea
                                rows={5}
                                placeholder="質問またはメッセージを入力してください"
                                className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-black bg-white resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 px-4 rounded transition-colors text-sm tracking-widest mt-2"
                        >
                            送信
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
}
