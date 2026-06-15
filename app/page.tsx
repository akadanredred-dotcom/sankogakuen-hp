import Image from "next/image";
import Hero from "./components/Hero";
import SanFesSection from "./components/Main";
import AkadanSection from "./components/react";
import ArticleSection from "./components/ArticleSection";
import ShopSection from "./components/ShopSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Hero backgroundImage={"/img/hero-bg.png"} />
      <SanFesSection />
      <AkadanSection />
      <ArticleSection />
      <Footer />
    </div>
  );
}
