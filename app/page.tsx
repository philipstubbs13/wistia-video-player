"use client";

import { WistiaVideoPlayer } from "@/components/wistia-video-player/WistiaVideoPlayer";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="w-full max-w-5xl mx-auto py-12 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold">Wistia Video Player</h1>
          <p className="text-muted-foreground">
            A custom video player built using React and Wistia
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="https://github.com/philipstubbs13/wistia-video-player"
              className="inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200 shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
              target={"_blank"}
            >
              GitHub
            </Link>
            <Link
              href="https://www.chromatic.com/library?appId=66aa07fde316cf9b3445ce6d"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
              target={"_blank"}
            >
              Storybook
            </Link>
          </div>
          <WistiaVideoPlayer videoId="hb26s9rudm" />
        </div>
      </div>
    </main>
  );
}
