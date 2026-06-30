"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-09-15T11:40:00+09:00").getTime();

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function Countdown() { // 💡 不要になった footerId を削除しました
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = TARGET_DATE - now;

            if (difference <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            });
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!timeLeft) return null;

    const timeBlocks = [
        { label: "日", value: timeLeft.days },
        { label: "時", value: timeLeft.hours },
        { label: "分", value: timeLeft.minutes },
        { label: "秒", value: timeLeft.seconds },
    ];

    return (
        // 💡 fixed や bottom-4 などを削除し、その場に馴染むスタイルに修正しました
        <div className="z-10 flex flex-col items-center p-4 bg-white border border-slate-200 rounded-2xl shadow-md w-[260px] sm:w-[280px]">
            <div className="text-[10px] uppercase tracking-wider text-slate-600 font-bold mb-2.5 flex items-center gap-1.5 w-full justify-start">
                <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                本番まであと
            </div>

            <div className="grid grid-cols-4 gap-1.5 w-full">
                {timeBlocks.map((block, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center bg-slate-50 border border-slate-100 rounded-lg py-1 px-1 shadow-inner"
                    >
                        <span className="text-lg sm:text-xl font-black text-red-600 font-mono tracking-tight tabular-nums">
                            {String(block.value).padStart(2, "0")}
                        </span>
                        <span className="text-[9px] font-bold text-slate-500 mt-0.5">
                            {block.label}
                        </span>
                    </div>
                ))}
            </div>

            {timeLeft.days === 0 &&
                timeLeft.hours === 0 &&
                timeLeft.minutes === 0 &&
                timeLeft.seconds === 0 && (
                    <div className="mt-2 text-xs font-bold text-emerald-600 text-center">
                        本番当日です！
                    </div>
                )}
        </div>
    );
}