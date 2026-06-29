import React from "react";
import Image from "next/image";

export default function AkadanPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      <Image
        src="/img/hyouga.jpg"
        alt="赤団 豹牙"
        fill
        priority
        className="object-contain"
      />

      <div className="absolute inset-0 bg-black/30 z-10" />
    </div>
  );
}