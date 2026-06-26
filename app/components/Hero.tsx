// components/Hero.tsx
import Image from "next/image";
import Navbar from "./Navbar";

interface HeroProps {
  backgroundImage: string;
  mobileBackgroundImage: string;
}

export default function Hero({
  backgroundImage,
  mobileBackgroundImage,
}: HeroProps) {
  return (
    <section className="relative flex h-screen w-full flex-col overflow-hidden bg-white">
      {/* The Navigation Bar (Top-layer content) */}
      <Navbar />

      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Background Image (Hidden on mobile, visible on md screens and up) */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src={backgroundImage}
            alt="株式会社 - Desktop"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Mobile Background Image (Visible on mobile, hidden on md screens and up) */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src={mobileBackgroundImage}
            alt="株式会社 - Mobile"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Dark Overlay Filter for Readability */}
        {/* The 'opacity-30' sets a 30% black filter over the image */}
        <div className="absolute inset-0 bg-black opacity-30 z-10" />
      </div>

      {/* Centered Text Content (Placed above the overlay) */}
      <div className="relative z-20 flex flex-grow flex-col items-center justify-center px-6 text-center">
        {/* Large, Red Main Title */}
        <h1 className="text-7xl font-extrabold tracking-tight text-red-600 sm:text-8xl md:text-9xl lg:text-[140px]">
          赤団
        </h1>

        {/* White Subtitle (Pop against the new dark filter!) */}
        <p className="mt-6 max-w-3xl text-xl font-semibold text-white sm:text-2xl md:text-3xl">
          株式会社赤団
        </p>
      </div>
    </section>
  );
}
