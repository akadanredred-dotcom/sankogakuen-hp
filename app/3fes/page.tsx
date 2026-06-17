import GoogleMap from "./components/GoogleMap";
import Awards from "./components/Awards";
import Competition from "./components/Competition";
import Concept from "./components/Concept";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ScrollReveal from "../components/ScrollReveal";


export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white font-sans">
      {/* メインビジュアル */}
      <Hero />

      {/* コンテンツエリア */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-24">
        {/* 絆・コンセプト */}
        <Concept />

        {/* 競技について */}
        <Competition />

        {/* 賞について */}
        <Awards />
        <GoogleMap />
        <Footer />
        <ScrollReveal children={undefined} />
       
      </div>
    </main>
  );
}
