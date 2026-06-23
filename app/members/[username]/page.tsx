import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "../../3fes/components/Footer";

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

// 2. Member Database（学校と趣味のみにスリム化）
const membersData: Record<string, MemberInfo> = {
  komiya: {
    name: "小宮 遥斗",
    role: "団長",
    school: "東京リゾート＆スポーツ専門学校",
    hobbies: "ギターを弾くこと、一発ギャグ",
    resolution: "笑いの絶えない最高の団にします！！ 史上最高の三フェスに！！！",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
  },
  arai: {
    name: "新井 真季",
    role: "副団長",
    school: "東京ビューティー＆ブライダル専門学校",
    hobbies: "ネイル、もつ鍋",
    resolution: "みんながキラキラ輝ける サンフェスにします！！",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop",
  },
  teppei: {
    name: "泉 哲平",
    role: "副団長",
    school: "東京みらいAI&IT専門学校",
    hobbies: "バイト",
    resolution: "優勝絶対！",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop",
  },
  ida: {
    name: "井田 星南",
    role: "副団長",
    school: "東京スイーツ＆カフェ専門学校",
    hobbies: "バスケ、ドライブ",
    resolution: "勝ちにこだわって赤団と サンフェスをさいこうに盛り上げます！！",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop",
  },
  takayama: {
    name: "高山 桃悠",
    role: "副団長",
    school: "東京リゾート＆スポーツ専門学校",
    hobbies: "スティッチ探し",
    resolution: "みんなの笑顔と力を合わせて、 最高の赤団を目指します！！",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop",
  },
  atumi: {
    name: "渥美 美月",
    role: "副団長",
    school: "東京立川こども専門学校",
    hobbies: "ライブに行く・マジック",
    resolution:
      "今までにないくらい最高の 三フェスにするために最後まで 笑顔で団を盛り上げます！！！",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop",
  },
  jyunsei: {
    name: "井之上 準星",
    role: "演舞リーダー",
    school: "東京リゾート＆スポーツ専門学校",
    hobbies: "ライブ・ギター",
    resolution: "誰よりも熱く、誰よりも本気で挑みます。",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop",
  },
  aikawa: {
    name: "相川 心那",
    role: "パフォーマンスリーダー",
    school: "東京スイーツ＆カフェ専門学校",
    hobbies: "ライブに行くこと、パッションティー",
    resolution: "笑顔あふれる最高の三フェスに！！！！ 絶対優勝！",
    imageUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop",
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

  const automatedSidebarList = Object.entries(membersData).map(
    ([slug, data]) => ({
      slug,
      name: data.name,
    }),
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-red-200">
      {/* --- HEADER --- */}
      <header className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center bg-white border-b border-gray-200">
        {/* 左上ロゴ部分：テキストから画像に変更 */}
        <Link
          href="/"
          className="hover:opacity-80 transition-opacity flex items-center"
        >
          <img
            src="/img/logo.jpg"
            alt="赤団ロゴ"
            className="h-8 w-auto object-contain"
          />
        </Link>
        <nav className="flex items-center space-x-8 text-sm font-bold text-gray-700">
          <Link href="/" className="hover:text-red-600 transition-colors">
            トップページへ
          </Link>
          <Link href="/3fes" className="hover:text-red-600 transition-colors">
            三フェス
          </Link>
          <Link href="/awards" className="hover:text-red-600 transition-colors">
            賞状
          </Link>
          <Link href="/sport" className="hover:text-red-600 transition-colors">
            競技
          </Link>
        </nav>
      </header>

      {/* --- MAIN PAGE CONTENT --- */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* 左側：サイドバーナビゲーション */}
          <aside className="w-full md:w-48 flex-shrink-0">
            <div className="border-l-4 border-red-600 pl-3 mb-4">
              <h2 className="text-gray-900 font-black text-sm tracking-wider">
                メンバー一覧
              </h2>
            </div>
            <ul className="space-y-1 text-xs font-bold text-gray-600">
              {automatedSidebarList.map((m, idx) => {
                const isActive = m.slug === memberKey;
                return (
                  <li key={idx}>
                    <Link
                      href={`/members/${m.slug}`}
                      className={`block py-1.5 px-2 rounded transition-colors tracking-wide ${
                        isActive
                          ? "bg-red-50 text-red-600 font-black border-r-4 border-red-600"
                          : "hover:bg-gray-50 hover:text-red-600"
                      }`}
                    >
                      {m.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* 右側：プロフィールメインコンテンツ */}
          <main className="flex-1 space-y-6">
            {/* メンバータイトルヘッダー */}
            <div className="border-b border-gray-200 pb-4">
              <div className="text-[10px] font-black text-white uppercase tracking-widest bg-red-600 inline-block px-2 py-0.5 rounded mb-2">
                赤団 {member.role}
              </div>
              <h1 className="text-gray-900 text-3xl font-black tracking-tight block">
                {member.name}
              </h1>
            </div>

            {/* 詳細コンテンツエリア：2カラム（左: 写真、右: プロフィール） */}
            <div className="grid grid-cols-1 md:grid-cols-[4.5fr_5.5fr] gap-8 items-start">
              {/* 写真エリア（しっかり綺麗な縦長3:4比率） */}
              <div className="w-full relative rounded-xl shadow-md overflow-hidden bg-gray-100 border border-gray-200 aspect-[3/4]">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 学校・趣味、意気込みエリア */}
              <div className="space-y-5">
                <div className="space-y-4 text-xs leading-relaxed text-gray-700 font-bold bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div>
                    <span className="text-red-600 block text-[10px] uppercase tracking-wider mb-1">
                      【学校】
                    </span>
                    <p className="text-gray-900 text-sm font-black">
                      {member.school}
                    </p>
                  </div>
                  <div className="border-t border-gray-200/60 pt-3">
                    <span className="text-red-600 block text-[10px] uppercase tracking-wider mb-1">
                      【趣味】
                    </span>
                    <p className="text-gray-900 text-sm font-black">
                      {member.hobbies}
                    </p>
                  </div>
                </div>

                {/* 意気込みエリア */}
                <div className="bg-gradient-to-br from-red-50 to-white p-4 rounded-xl border-2 border-red-600/20 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 text-red-100 font-black text-5xl select-none opacity-40 pointer-events-none">
                    “
                  </div>
                  <span className="block text-xs text-red-600 font-black mb-1.5 flex items-center gap-1">
                    🔥{" "}
                    <span className="tracking-wider">三フェスへの意気込み</span>
                  </span>
                  <p className="text-left font-black text-gray-900 text-sm md:text-base leading-snug tracking-normal">
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
