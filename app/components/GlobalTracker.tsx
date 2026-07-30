"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { createClient } from "../utils/supabase/client";

export default function GlobalTracker() {
  const pathname = usePathname();

  useEffect(() => {
    async function trackView() {
      const supabase = createClient();
      const { error } = await supabase.rpc("increment_page_view", {
        page_path: pathname,
      });

      if (error) {
        console.error("Supabase tracking error:", error.message);
      }
    }

    trackView();
  }, [pathname]);

  return null;
}
