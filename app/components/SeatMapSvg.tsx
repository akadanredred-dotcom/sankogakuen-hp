"use client";

import React, { useEffect } from "react";

interface SeatMapSvgProps {
  viewBox: string;
  selectedSchool: string;
  schoolColors: { [blockId: string]: string };
}

export default function SeatMapSvg({
  viewBox,
  selectedSchool,
  schoolColors,
}: SeatMapSvgProps) {
  useEffect(() => {
    // 全ブロックの色をリセット
    const allBlocks = document.querySelectorAll<SVGElement>(".seat-block");
    allBlocks.forEach((block) => {
      block.style.fill = "#e5e7eb";
    });

    // 選択された学校の色を適用
    if (selectedSchool) {
      Object.entries(schoolColors).forEach(([blockId, color]) => {
        const blockElement = document.getElementById(blockId);
        if (blockElement) {
          blockElement.style.fill = color;
          blockElement.style.transition = "fill 0.3s ease";
        }
      });
    }
  }, [selectedSchool, schoolColors]);

  return (
    <svg
      width="100%"
      height="auto"
      style={{ transition: "viewBox 0.5s ease-in-out" }}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* SVGのパスや矩形要素 */}
      <g id="south-blocks">
        <rect
          id="block-L"
          className="seat-block"
          x="100"
          y="600"
          width="80"
          height="150"
          fill="#e5e7eb"
        />
        <rect
          id="block-K"
          className="seat-block"
          x="200"
          y="600"
          width="80"
          height="150"
          fill="#e5e7eb"
        />
        <rect
          id="block-J"
          className="seat-block"
          x="300"
          y="600"
          width="80"
          height="150"
          fill="#e5e7eb"
        />
        <rect
          id="block-H"
          className="seat-block"
          x="400"
          y="600"
          width="80"
          height="150"
          fill="#e5e7eb"
        />
      </g>
      <text x="50" y="680" fontSize="20">
        渋谷口
      </text>
    </svg>
  );
}
