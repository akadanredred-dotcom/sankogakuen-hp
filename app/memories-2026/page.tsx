"use client";
import { useState, useEffect } from "react";
import { supabase } from "../components/lib/supabase";
import Link from "next/link";

type MemoryItem = {
  id: number;
  school_name: string;
  grade: string;
  name: string;
  caption: string;
  image_url: string;
  created_at: string;
};

export default function AllMemoriesPage() {
  const [memories, setMemories] = useState<MemoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<MemoryItem | null>(null);

  // 💡 投稿モーダル用の状態
  const [isOpen, setIsOpen] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [grade, setGrade] = useState("1年生");
  const [name, setName] = useState("");
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const fetchAllMemories = async () => {
    const { data, error } = await supabase
      .from("memories_2026")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setMemories(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAllMemories();
  }, []);

  // 💡 投稿処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setUploading(true);

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage
        .from("memories-images")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage
        .from("memories-images")
        .getPublicUrl(fileName);

      const imageUrl = publicUrlData.publicUrl;

      const { error: insertError } = await supabase
        .from("memories_2026")
        .insert([
          {
            school_name: schoolName,
            grade: grade,
            name: name,
            caption,
            image_url: imageUrl,
          },
        ]);

      if (insertError) throw insertError;

      setSchoolName("");
      setGrade("1年生");
      setName("");
      setCaption("");
      setFile(null);
      setIsOpen(false);
      fetchAllMemories();
      alert("思い出の投稿が完了しました！");
    } catch (error) {
      console.error("投稿エラー:", error);
      alert("投稿に失敗しました。");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-5 relative">
      <div className="max-w-[1000px] mx-auto">
        {/* ヘッダー部分 */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
            2026年の思い出 一覧
          </h1>
          <p className="text-sm font-semibold tracking-widest text-red-600 uppercase">
            ALL MEMORIES OF THREE FES 2026
          </p>
        </div>

        {/* ナビゲーション＆投稿ボタンエリア */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-bold text-slate-600 hover:text-red-600 transition-colors"
          >
            ← トップページに戻る
          </Link>
          <button
            onClick={() => setIsOpen(true)}
            className="py-2.5 px-6 bg-red-600 text-white font-bold rounded shadow hover:bg-red-700 transition-colors"
          >
            写真を投稿する
          </button>
        </div>

        {/* 💡 投稿モーダル */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-4 overflow-y-auto">
            <div className="bg-white rounded-xl p-6 md:p-8 max-w-lg w-full text-left shadow-2xl relative my-8">
              <h3 className="text-2xl font-bold mb-6 text-slate-800 border-b pb-3">
                思い出を投稿
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">
                    学校名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    required
                    className="w-full border rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="例：東京リゾート＆スポーツ専門学校"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">
                    学年 <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    required
                    className="w-full border rounded-lg px-3 py-2 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="" disabled>
                      選択してください
                    </option>
                    <option value="1年生">1年生</option>
                    <option value="2年生">2年生</option>
                    <option value="3年生">3年生</option>
                    <option value="その他">その他</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="例：赤団 太郎"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">
                    写真 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    required
                    className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">
                    コメント・エピソード
                  </label>
                  <textarea
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    rows={3}
                    className="w-full border rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="最高の思い出を書こう！"
                  />
                </div>
                <div className="flex justify-end gap-3 pt-4 border-t">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-5 py-2.5 bg-slate-200 text-slate-700 rounded-lg font-bold hover:bg-slate-300 transition-colors"
                  >
                    キャンセル
                  </button>
                  <button
                    type="submit"
                    disabled={uploading}
                    className="px-5 py-2.5 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors disabled:opacity-50"
                  >
                    {uploading ? "投稿中..." : "送信する"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* 一覧ギャラリー */}
        {loading ? (
          <p className="text-center text-slate-500 py-12">読み込み中...</p>
        ) : memories.length === 0 ? (
          <div className="p-12 border-2 border-dashed border-slate-300 rounded-lg bg-white text-center">
            <p className="text-slate-500">まだ写真が投稿されていません。</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {memories.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 flex flex-col transition-transform hover:-translate-y-1"
              >
                <div
                  onClick={() => setSelectedImage(item)}
                  className="aspect-[4/3] relative bg-slate-100 overflow-hidden cursor-pointer group"
                >
                  <img
                    src={item.image_url}
                    alt={item.caption || "思い出の写真"}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">
                    クリックして拡大
                  </div>
                </div>
                <div className="p-4 text-left flex-1 flex flex-col justify-between">
                  {item.caption && (
                    <p className="text-slate-700 text-sm mb-2">
                      {item.caption}
                    </p>
                  )}
                  <div className="text-xs text-slate-400 space-y-0.5 border-t pt-2">
                    <p className="font-bold text-slate-500">
                      {item.school_name}
                    </p>
                    <p>
                      {item.grade} / {item.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 画像拡大モーダル */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4 cursor-pointer"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg overflow-hidden max-w-2xl w-full shadow-2xl relative cursor-default"
            >
              <div className="relative bg-black flex justify-center items-center max-h-[70vh]">
                <img
                  src={selectedImage.image_url}
                  alt={selectedImage.caption || "拡大画像"}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>
              <div className="p-6 text-left">
                {selectedImage.caption && (
                  <p className="text-slate-800 font-medium text-base mb-3">
                    {selectedImage.caption}
                  </p>
                )}
                <div className="text-xs text-slate-500 space-y-1 border-t pt-3">
                  <p className="font-bold text-slate-700 text-sm">
                    {selectedImage.school_name}
                  </p>
                  <p>
                    {selectedImage.grade} / {selectedImage.name}
                  </p>
                </div>
                <div className="mt-5 text-center">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="px-6 py-2 bg-slate-800 text-white font-bold rounded hover:bg-slate-700 transition-colors"
                  >
                    閉じる
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
