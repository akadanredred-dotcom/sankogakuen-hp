"use client";

import React from "react";
import Image from "next/image";

interface AwardItem {
    id: number;
    title: string;
    description: string;
    imgUrl: string;
}

const awardsList: AwardItem[] = [
    {
        id: 1,
        title: "絆賞",
        description:
            "テーマを体現していた団・団応援を表彰",
        imgUrl: "/img/akadannsiryou8.png",
    },
    {
        id: 2,
        title: "パフォーマンス賞",
        description:
            "ビジュアル（衣装・表情）、エンターテイメント、テクニック、構成、一体感の5項目を総合的に評価する",
        imgUrl: "/img/akadannsiryou8.png",
    },
    {
        id: 3,
        title: "演舞賞",
        description:
            "構成、 一体感、 完成度、 迫力・力強さを総合的に評価する",
        imgUrl: "/img/akadannsiryou8.png",
    },
];

export default function AwardsMain() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-16 md:gap-20">
            {awardsList.map((award, index) => {
                const isEven = index % 2 === 1;

                return (
                    <div
                        key={award.id}
                        className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                            isEven ? "md:flex-row-reverse" : ""
                        }`}
                    >
                        <div className="flex-1 w-full space-y-3">
                            <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-wide">
                                {award.title}
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium whitespace-pre-wrap">
                                {award.description}
                            </p>
                        </div>

                        <div className="flex-1 w-full">
                            <div className="relative aspect-[16/10] w-full bg-gray-100 rounded-lg overflow-hidden shadow-sm border border-gray-100">
                                <Image
                                    src={award.imgUrl}
                                    alt={award.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
