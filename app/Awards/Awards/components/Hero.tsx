"use client";

import React from "react";

export default function AwardsHero() {
  return (
    <div className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-14 px-6 text-center shadow-sm">
      <h1 className="text-3xl md:text-4xl font-black tracking-widest">
        表彰・特別賞一覧
      </h1>
      <p className="text-sm text-red-50 mt-2">
        三フェスで輝いた各団・個人に贈られる栄誉ある賞の紹介です！
      </p>
    </div>
  );
}