"use client";

import { WistiaVideoPlayer } from "@/components/wistia-video-player/WistiaVideoPlayer";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("videoId") || "hb26s9rudm";

  return (
    <main>
      <div className="w-full max-w-5xl mx-auto py-12 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold">Wistia Video Playground</h1>
          <div className="max-w-[600px] mx-auto">
            <p className="text-muted-foreground">
              A custom video player built using React and Wistia. You can use
              this page as a playground to try out and test your different
              Wistia videos.
            </p>
            <p className="text-muted-foreground pt-7">
              To load a specific Wistia video, specify your Wistia video id
              using the <b>videoId</b> url query param. For example:
            </p>
          </div>
          <pre>https://wistia-video-player.vercel.app/?videoId=hb26s9rudm</pre>
          <div className="flex justify-center space-x-4 pt-4">
            <Link
              href="https://github.com/philipstubbs13/wistia-video-player"
              className="inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200 shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
              target={"_blank"}
            >
              GitHub
            </Link>
            <Link
              href="https://66aa07fde316cf9b3445ce6d-wzfdwyrtml.chromatic.com/?path=/docs/components-wistia-video-player--docs"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
              target={"_blank"}
            >
              Storybook
            </Link>
          </div>
          {videoId && <WistiaVideoPlayer videoId={videoId} />}
        </div>
      </div>
    </main>
  );
}
