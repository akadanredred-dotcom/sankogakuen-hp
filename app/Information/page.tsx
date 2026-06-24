"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "../3fes/components/Footer"; // Footerのパスは環境に合わせて調整してください

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        school: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        // 💡 Web3Forms API implementation
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "6328a4a0-5f56-4a9e-b04e-18922bfb2d97", // FIXME: Replace with your actual Web3Forms Access Key
                    name: formData.name,
                    email: formData.email,
                    school: formData.school, // Custom fields are safely carried over
                    message: formData.message,
                    subject: `【赤団・三フェス】${formData.name}様からのお問い合わせ`,
                }),
            });

            const result = await response.json();

            if (result.success) {
                console.log("送信成功:", result);
                setIsSubmitted(true);
            } else {
                console.error("送信失敗:", result);
                setErrorMessage(
                    result.message ||
                        "送信に失敗しました。もう一度お試しください。",
                );
            }
        } catch (error) {
            console.error("エラーが発生しました:", error);
            setErrorMessage(
                "ネットワークエラーが発生しました。接続を確認してください。",
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-100/40 via-rose-50 to-white text-gray-900 font-sans selection:bg-red-200 pt-20 md:pt-24">
            {/* --- HEADER --- */}
            {/* @ts-ignore */}
            <Navbar />

            {/* --- MAIN CONTENT --- */}
            <div className="max-w-2xl mx-auto px-6 py-12">
                {/* タイトルエリア */}
                <div className="text-center mb-10">
                    <span className="text-xs font-black text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
                        CONTACT
                    </span>
                    <h1 className="text-gray-900 text-3xl font-black tracking-tight mt-3">
                        お問い合わせ
                    </h1>
                    <p className="text-xs text-gray-500 font-bold mt-2">
                        赤団や三フェスに関するご質問・メッセージはこちらから
                    </p>
                </div>

                {/* フォーム本体のカード */}
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-red-50 shadow-sm">
                    {isSubmitted ? (
                        /* 送信完了画面 */
                        <div className="text-center py-10 space-y-4">
                            <div className="text-4xl">🔥</div>
                            <h2 className="text-xl font-black text-gray-900">
                                送信が完了しました！
                            </h2>
                            <p className="text-xs text-gray-600 font-bold max-w-sm mx-auto leading-relaxed">
                                お問い合わせありがとうございます。内容を確認のうえ、担当者よりご連絡いたします。
                            </p>
                            <button
                                onClick={() => {
                                    setIsSubmitted(false);
                                    setFormData({
                                        name: "",
                                        email: "",
                                        school: "",
                                        message: "",
                                    });
                                }}
                                className="mt-4 inline-block rounded-full bg-gray-100 px-6 py-2 text-xs font-black text-gray-700 hover:bg-gray-200 transition"
                            >
                                フォームに戻る
                            </button>
                        </div>
                    ) : (
                        /* 入力入力画面 */
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* エラーメッセージ表示 */}
                            {errorMessage && (
                                <div className="p-4 text-xs font-bold text-red-700 bg-red-50 border border-red-200 rounded-xl">
                                    {errorMessage}
                                </div>
                            )}

                            {/* お名前 */}
                            <div>
                                <label className="block text-xs font-black text-gray-700 mb-1 flex items-center gap-1">
                                    お名前{" "}
                                    <span className="text-red-600 text-[10px]">
                                        ※必須
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="山田 太郎"
                                    className="w-full text-sm font-bold p-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:border-red-500 focus:bg-white transition"
                                />
                            </div>

                            {/* メールアドレス */}
                            <div>
                                <label className="block text-xs font-black text-gray-700 mb-1 flex items-center gap-1">
                                    メールアドレス{" "}
                                    <span className="text-red-600 text-[10px]">
                                        ※必須
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    className="w-full text-sm font-bold p-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:border-red-500 focus:bg-white transition"
                                />
                            </div>

                            {/* 学校名（任意） */}
                            <div>
                                <label className="block text-xs font-black text-gray-700 mb-1">
                                    学校名{" "}
                                    <span className="text-gray-400 text-[10px]">
                                        （任意）
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="school"
                                    value={formData.school}
                                    onChange={handleChange}
                                    placeholder="〇〇専門学校"
                                    className="w-full text-sm font-bold p-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:border-red-500 focus:bg-white transition"
                                />
                            </div>

                            {/* お問い合わせ内容 */}
                            <div>
                                <label className="block text-xs font-black text-gray-700 mb-1 flex items-center gap-1">
                                    メッセージ{" "}
                                    <span className="text-red-600 text-[10px]">
                                        ※必須
                                    </span>
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="お問い合わせ内容をご記入ください"
                                    className="w-full text-sm font-bold p-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:border-red-500 focus:bg-white transition resize-none"
                                />
                            </div>

                            {/* 送信ボタン */}
                            <div className="pt-2">
                                {/* 💡 py-6 (特大の縦幅) と tracking-widest (広い文字間隔) で圧倒的な極太ボタンへ */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full rounded-full bg-red-600 py-6 text-lg font-black tracking-widest text-white shadow-xl shadow-red-600/30 hover:bg-red-700 hover:shadow-2xl transition flex items-center justify-center gap-2 ${
                                        isSubmitting
                                            ? "opacity-70 cursor-not-allowed"
                                            : ""
                                    }`}
                                >
                                    🔥{" "}
                                    <span>
                                        {isSubmitting
                                            ? "送信中..."
                                            : "この内容で送信する"}
                                    </span>
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>

            {/* --- FOOTER --- */}
            <Footer />
        </div>
    );
}