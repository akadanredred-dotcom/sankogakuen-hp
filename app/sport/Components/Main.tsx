"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CompetitionItem {
  id: number;
  number: string;
  title: string;
  imgUrl: string;
  objectPosition?: string;
  description?: string; // Added a description field for the modal details
}

const competitionList: CompetitionItem[] = [
  {
    id: 1,
    number: "1",
    title: "競技 1",
    imgUrl: "/img/kyougi.png",
    description: "競技1の詳しい詳細文がここに入ります。",
  },
  {
    id: 2,
    number: "2",
    title: "競技 2",
    imgUrl: "/img/kyougi2.png",
    description: "競技2の詳しい詳細文がここに入ります。",
  },
  {
    id: 3,
    number: "3",
    title: "競技 3",
    imgUrl: "/img/kyougi3.png",
    description: "競技3の詳しい詳細文がここに入ります。",
  },
  {
    id: 4,
    number: "4",
    title: "競技 4",
    imgUrl: "/img/kyougi4.png",
    objectPosition: "top",
    description: "競技4の詳しい詳細文がここに入ります。",
  },
  {
    id: 5,
    number: "5",
    title: "競技 5",
    imgUrl: "/img/kyougi5.png",
    objectPosition: "top",
    description: "競技5の詳しい詳細文がここに入ります。",
  },
  {
    id: 6,
    number: "6",
    title: "競技 6",
    imgUrl: "/img/kyougi6.png",
    description: "競技6の詳しい詳細文がここに入ります。",
  },
  {
    id: 7,
    number: "7",
    title: "競技 7",
    imgUrl: "/img/kyougi7.png",
    description: "競技7の詳しい詳細文がここに入ります。",
  },
];

export default function AMain() {
  // State to track the currently opened competition item
  const [selectedCompetition, setSelectedCompetition] =
    useState<CompetitionItem | null>(null);

  const leftColumnItems = competitionList.filter((_, index) => index % 2 === 0);
  const rightColumnItems = competitionList.filter(
    (_, index) => index % 2 !== 0,
  );

  const renderCard = (comp: CompetitionItem) => (
    <div
      key={comp.id}
      onClick={() => setSelectedCompetition(comp)}
      className="bg-white overflow-hidden shadow-sm border border-gray-200 transition-all hover:shadow-md hover:scale-[1.01] flex flex-col cursor-pointer mb-6"
    >
      <div className="relative aspect-[16/10] w-full bg-gray-100">
        <Image
          src={comp.imgUrl}
          alt={comp.title}
          fill
          className="object-cover"
          style={{ objectPosition: comp.objectPosition ?? "center" }}
        />
      </div>
      <div className="p-3 bg-white flex flex-col gap-2">
        <div className="self-start bg-blue-900 text-white font-black text-xs px-3 py-1 rounded-sm">
          {comp.number} {comp.title}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-[900px] mx-auto px-6 mt-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 items-start">
        <div className="flex flex-col">
          {leftColumnItems.map((comp) => renderCard(comp))}
        </div>
        <div className="flex flex-col md:mt-12">
          {rightColumnItems.map((comp) => renderCard(comp))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-16 mb-8 text-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-slate-800 tracking-normal">
          一緒に頑張りましょう
        </h2>
      </div>

      {/* --- MODAL MARKUP --- */}
      {selectedCompetition && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedCompetition(null)} // Closes modal when clicking backdrop
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-lg w-full overflow-hidden transform transition-all flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
          >
            {/* Modal Image Header */}
            <div className="relative aspect-[16/10] w-full bg-gray-100">
              <Image
                src={selectedCompetition.imgUrl}
                alt={selectedCompetition.title}
                fill
                className="object-cover"
                style={{
                  objectPosition:
                    selectedCompetition.objectPosition ?? "center",
                }}
              />
              <button
                onClick={() => setSelectedCompetition(null)}
                className="absolute top-3 right-3 bg-black/50 text-white hover:bg-black/70 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="inline-block bg-blue-900 text-white font-black text-xs px-3 py-1 rounded-sm mb-3">
                {selectedCompetition.number} {selectedCompetition.title}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {selectedCompetition.title} の詳細情報
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {selectedCompetition.description ||
                  "詳細な説明文がここに表示されます。"}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-100 p-4 flex justify-end bg-gray-50">
              <button
                onClick={() => setSelectedCompetition(null)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded text-sm transition-colors"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
