"use client";

import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import SanFesSection from "./components/Main";
import AkadanSection from "./components/react";
import ArticleSection from "./components/ArticleSection";
import GoogleMap from "./components/GoogleMap";
import ScrollReveal from "./components/ScrollReveal";
import Footer from "./3fes/components/Footer";
import Memories from "./components/Memories";
import Countdown from "./components/Countdown";
import News from "./components/News";
import VideoCarousel from "./components/VideoCarousel";
import { createClient } from "./utils/supabase/client";

export default function Home() {
  console.log("Tracking page view and checking milestone...");

  const [specialEffect, setSpecialEffect] = useState(false);
  const [milestoneNumber, setMilestoneNumber] = useState(50);

  useEffect(() => {
    // Prevent counting multiple times in the same session
    if (sessionStorage.getItem("counted")) return;

    async function trackAndCheckMilestone() {
      try {
        const supabase = createClient();
        console.log("Supabase client created:", supabase);

        // Call the Supabase function and get the returned view count integer
        const { data: newCount, error } = await supabase.rpc(
          "increment_page_view",
          {
            page_path: "/",
          },
        );
        console.log("New view count:", newCount);

        if (error) {
          console.error("Failed to increment view count:", error.message);
          return;
        }

        // Mark as counted for this session
        sessionStorage.setItem("counted", "true");

        // Check if the current view count is a multiple of 50 (50, 100, 150, 200...)
        if (newCount && newCount > 0 && newCount % 50 === 0) {
          setMilestoneNumber(newCount);
          setSpecialEffect(true);
        }
      } catch (error) {
        console.error("Error updating view counter:", error);
      }
    }

    trackAndCheckMilestone();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col relative">
      {/* Special UI Overlay for every 50th visitor */}
      {specialEffect && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 text-white">
          <div className="text-center p-8 bg-red-600 rounded-xl shadow-2xl animate-bounce">
            <h2 className="text-3xl font-bold mb-4">
              🎉 祝・{milestoneNumber}人目の訪問者！ 🎉
            </h2>
            <p className="mb-6">
              おめでとうございます！記念すべき{milestoneNumber}
              人目のゲスト様です！
            </p>
            <button
              onClick={() => setSpecialEffect(false)}
              className="px-6 py-2 bg-white text-red-600 font-bold rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
            >
              サイトを見る
            </button>
          </div>
        </div>
      )}

      {/* Rest of your page layout */}
      <div className="relative flex-1 w-full">
        <Hero
          backgroundImage={"/img/hero-bg.png"}
          mobileBackgroundImage="/img/baoisgay.jpg"
        />

        <ScrollReveal direction="left">
          <News />
        </ScrollReveal>

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
          <VideoCarousel />
        </ScrollReveal>

        <ScrollReveal direction="left">
          <ArticleSection />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="max-w-[1000px] my-[60px] mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="rounded overflow-hidden aspect-[4/3]">
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
                  <div className="mt-5">
                    <a
                      href="https://maps.google.com/maps?ll=35.670065,139.694966&z=16&t=m&hl=ja&gl=JP&mapclient=embed&cid=3800131593595043646"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-2.5 px-5 bg-[#d32f2f] text-white no-underline rounded font-bold transition-colors hover:bg-[#b71c1c]"
                    >
                      Googleマップで開く
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <Countdown footerId="page-footer" />
      </div>

      <div id="page-footer">
        <Footer />
      </div>
    </div>
  );
}
