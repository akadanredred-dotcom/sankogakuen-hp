"use client";

import React from "react";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "../components/Navbar";
import Footer from "../3fes/components/Footer";

export default function CompetitionsListPage() {
  return (
    <main className="w-full min-h-screen bg-[#F7F7F7] font-sans pb-12">
      <Hero />
      <div className="mt-8" />
      <Navbar />
      <Main />
      <Footer />
    </main>
  );
}