import { Metadata } from "next";
import Footer from "../3fes/components/Footer"; // パスは環境に合わせて調整してください
import Countdown from "../components/Countdown"; // パスは環境に合わせて調整してください

export const metadata: Metadata = {
    title: "アワード | 豹牙HP",
    description: "表彰式の詳細ページです！",
};

export default function AwardsPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 flex flex-col">
            <main className="relative flex-1 w-full p-5">
                <div className="max-w-[1000px] mx-auto my-[60px]">
                    <h1 className="text-3xl font-bold mb-5 text-[#333]">アワード（表彰式）</h1>
                    <p className="leading-[1.8] mb-5">
                        これまでの努力が結実する瞬間。仲間と共に勝ち取った栄光を称え合います。
                    </p>
                </div>

                {/* 💡 削らず、型エラーが出ない正しい書き方に修正しました */}
                <Countdown />
            </main>

            <div id="main-footer">
                <Footer />
            </div>
        </div>
    );
}