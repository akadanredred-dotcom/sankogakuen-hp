import { Metadata } from "next";
import Hero from "./components/Hero";
import SanFesSection from "../components/Main";
import AkadanSection from "../components/react";
import ArticleSection from "../components/ArticleSection";
import GoogleMap from "./components/GoogleMap";
import ScrollReveal from "./components/ScrollReveal";
import Footer from "./components/Footer";
import Memories from "../components/Memories";
import Countdown from "../components/Countdown";

export const metadata: Metadata = {
  title: "3フェス | 豹牙HP",
  description: "三幸学園フェスティバルの詳細ページです！",
};

export default function ThreeFesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <div className="relative flex-1 w-full">
        <Hero />

        <ScrollReveal direction="left">
          <SanFesSection />
        </ScrollReveal>

        <ScrollReveal direction="left">
          <AkadanSection />
        </ScrollReveal>

        <ScrollReveal direction="left">
          <Memories />
        </ScrollReveal>

        <ScrollReveal direction="left">
          <ArticleSection />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="max-w-[1000px] my-[60px] mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="rounded border border-[#e0e0e0] overflow-hidden aspect-[4/3]">
                <GoogleMap />
              </div>
              <div>
                <div className="flex-1 min-w-[300px] p-5 bg-[#f9f9f9] rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-[15px] text-[#333]">
                    開催概要
                  </h2>
                  <ul className="list-none p-0 m-0 leading-[1.8]">
                    <li className="mb-2.5">
                      <strong>イベント名:</strong> 三幸学園フェスティバル
                    </li>
                    <li className="mb-2.5">
                      <strong>日程:</strong>
                      <span className="block pl-[15px]">
                        ・2026年9月14日(月) 会場設営・リハーサル
                      </span>
                      <span className="block pl-[15px]">
                        ・2026年9月15日(火) 本番
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <Countdown footerId="page-footer" />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
