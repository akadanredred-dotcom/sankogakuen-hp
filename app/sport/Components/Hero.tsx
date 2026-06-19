"use client";

import React from "react";

export default function Hero() {
  return (
    <div className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-12 px-6 text-center shadow-sm">
      <h1 className="text-[15rem] font-black tracking-widest">
        三フェス競技詳細
      </h1>
      <p className="text-sm text-orange-50 mt-2">
        タップして各競技の詳細やルールを見よう！
      </p>
    </div>
  );
}