import Image from "next/image";
import Navbar from "./Navbar";
import { Yuji_Syuku } from "next/font/google";

const yujiSyuku = Yuji_Syuku({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

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
      <Navbar />

      {/* 背景画像コンテナ */}
      <div className="absolute inset-0 z-0">
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
        <div className="absolute inset-0 bg-black opacity-30 z-10" />
      </div>

      {/* テキストコンテンツ */}
      <div className="relative z-20 flex flex-grow flex-col items-center justify-center px-6 text-center">
        <div className="-translate-y-5 md:-translate-y-7">
          {/* モバイル用 */}
          <h1
            className={`${yujiSyuku.className} text-8xl font-extrabold tracking-tight text-red-600 sm:text-9xl flex items-end pb-[50px] pl-[7px] md:hidden`}
          >
            豹牙
          </h1>

          {/* PC用 */}
          <h1
            className={`${yujiSyuku.className} text-7xl font-extrabold tracking-tight text-red-600 sm:text-8xl md:text-9xl lg:text-[140px] md:pb-[150px] md:pl-[65px] hidden md:flex md:items-end`}
          >
            豹牙
          </h1>
        </div>
      </div>
    </section>
  );
}