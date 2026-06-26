"use client";

import React from "react";
import AwardsHero from "./components/Hero";
import AwardsMain from "./components/Main";
import Navbar from "../components/Navbar";
import CDATASection from "../components/CDATASection";
import Footer from "../3fes/components/Footer";

export default function AwardsPage() {
    return (
        <main className="w-full min-h-screen bg-[#F7F7F7] font-sans pb-24">
            {/* ヘッダー部分 */}
            <Navbar />
            <AwardsHero />

            {/* 左右交互の賞紹介コンテンツ部分 */}
            <AwardsMain />
            <CDATASection />
            <Footer />
        </main>
    );
}
