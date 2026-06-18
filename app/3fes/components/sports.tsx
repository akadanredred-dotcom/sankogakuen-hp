export interface Sport {
  id: number;
  title: string;
  englishTitle: string;
  isNew?: boolean;
  imageUrl: string;
}

export const sportsData: Sport[] = [
  { id: 1, title: "台風の目", englishTitle: "Eye of the Typhoon", imageUrl: "/images/typhoon.jpg" },
  { id: 2, title: "綱引き", englishTitle: "Tug-of-War", imageUrl: "/images/tug-of-war.jpg" },
  { id: 3, title: "大玉送り", englishTitle: "大玉送り", isNew: true, imageUrl: "/images/big-ball.jpg" },
  { id: 4, title: "綱引き（予備）", englishTitle: "綱引き", imageUrl: "/images/tug-of-war2.jpg" },
  { id: 5, title: "いなばのしろうさぎ", englishTitle: "いなばのしろうさぎ", imageUrl: "/images/rabbit.jpg" },
  // 必要に応じて他の競技（7 男子リレーなど）を追加してください
];