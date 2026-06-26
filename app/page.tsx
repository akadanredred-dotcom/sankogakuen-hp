import { Metadata } from "next";
import Image from "next/image";
import Hero from "./components/Hero";
import SanFesSection from "./components/Main";
import AkadanSection from "./components/react";
import ArticleSection from "./components/ArticleSection";
import GoogleMap from "./components/GoogleMap";
import ScrollReveal from "./components/ScrollReveal";
import Footer from "./3fes/components/Footer";
import Memories from "./components/Memories";
import Countdown from "./components/Countdown";

export const metadata: Metadata = {
    title: "豹牙HP",
    description:
        "笑顔・元気・メリハリを胸に、仲間とともに全力で勝利を目指す団です！",
    icons: {
        icon: "/assets/favicon.ico",
        apple: "/assets/apple-touch-icon.png",
    },
};

export default function Home() {
    return (
        <div className="relative">
            {/* 💡 Floating Countdown Banner (Fixed to screen viewport) */}
            <Countdown />

            <Hero
                backgroundImage={"/img/hero-bg.png"}
                mobileBackgroundImage="/img/baoisgay.jpg"
            />

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
                        {/* Google Map Container */}
                        <div className="rounded border border-[#e0e0e0] overflow-hidden aspect-[4/3]">
                            <GoogleMap />
                        </div>

                        {/* Event Details Card */}
                        <div>
                            <div className="flex-1 min-w-[300px] p-5 bg-[#f9f9f9] rounded-lg shadow-sm">
                                <h2 className="text-2xl font-bold mb-[15px] text-[#333]">
                                    開催概要
                                </h2>

                                <ul className="list-none p-0 m-0 leading-[1.8]">
                                    <li className="mb-2.5">
                                        <strong className="font-bold">
                                            イベント名:
                                        </strong>{" "}
                                        三幸学園フェスティバル
                                    </li>
                                    <li className="mb-2.5">
                                        <strong className="font-bold">
                                            日程:
                                        </strong>
                                        <span className="block pl-[15px]">
                                            ・2026年9月14日(月)
                                            会場設営・リハーサル
                                        </span>
                                        <span className="block pl-[15px]">
                                            ・2026年9月15日(火) 本番
                                        </span>
                                    </li>
                                </ul>

                                {/* Google Map External Link Button */}
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

            <Footer />
        </div>
    );
}
