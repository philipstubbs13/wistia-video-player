"use client";

import { WistiaVideoPlayer } from "@/components/wistia-video-player/WistiaVideoPlayer";
import { useSearchParams } from "next/navigation";

export const WistiaVideoPlayground = () => {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("videoId") || "hb26s9rudm";

  return <WistiaVideoPlayer videoId={videoId} />;
};
