"use client";

import { useEffect, useState } from "react";
import { createClient } from "../utils/supabase/client";

export default function VisitorMilestoneTracker() {
    const [specialEffect, setSpecialEffect] = useState(false);
    const [milestoneNumber, setMilestoneNumber] = useState(50);

    useEffect(() => {
        async function checkMilestone() {
            try {
                const supabase = createClient();

                // Only fetch/check the view count, do not increment here
                const { data: currentCount, error } = await supabase.rpc(
                    "get_page_view",
                    {
                        page_path: "/",
                    },
                );

                if (error || currentCount === null) return;

                // Check if the current view count is a multiple of 50 (50, 100, 150...)
                const isMilestone = currentCount > 0 && currentCount % 50 === 0;

                if (isMilestone) {
                    const lastCelebrated = sessionStorage.getItem(
                        "last_celebrated_milestone",
                    );

                    // Only trigger once per browser session for this specific milestone
                    if (lastCelebrated !== String(currentCount)) {
                        setMilestoneNumber(currentCount);
                        setSpecialEffect(true);
                        sessionStorage.setItem(
                            "last_celebrated_milestone",
                            String(currentCount),
                        );
                    }
                }
            } catch (error) {
                console.error("Error checking milestone:", error);
            }
        }

        checkMilestone();
    }, []);

    if (!specialEffect) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 text-white">
            <div className="text-center p-8 bg-red-600 rounded-xl shadow-2xl animate-bounce">
                <h2 className="text-3xl font-bold mb-4">
                    🎉 祝・{milestoneNumber}人目の訪問者！ 🎉
                </h2>
                <p className="mb-6">
                    おめでとうございます！記念すべき{milestoneNumber}
                    人目のゲスト様です！
                </p>
                <button
                    onClick={() => setSpecialEffect(false)}
                    className="px-6 py-2 bg-white text-red-600 font-bold rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                >
                    サイトを見る
                </button>
            </div>
        </div>
    );
}
