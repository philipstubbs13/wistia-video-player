import React, { useEffect, useRef } from "react";
import Script from "next/script";
import { IWistiaVideo } from "@/components/wistia-video-player/WistiaVideoPlayer.types";

interface IProps {
  /**
   * The Wistia video id of the video you want to load.
   */
  videoId: string;
  /**
   * Callback fired when video is ready to be played.
   */
  onReady?: (video: IWistiaVideo) => void;
}

export const WistiaVideoPlayer = (props: IProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window._wq = window._wq || [];

    window._wq.push({
      id: props.videoId,
      onReady: (video: IWistiaVideo) => {
        const aspectRatio = video.data.media.aspectRatio;
        const paddingTop = (1 / aspectRatio) * 100;

        if (containerRef && containerRef.current) {
          containerRef.current.style.paddingTop = `${paddingTop}%`;
        }

        props.onReady?.(video);
      },
    });
  }, []);

  return (
    <div className="w-full">
      <div className="w-full h-full relative" ref={containerRef}>
        <div className="h-full absolute top-0 w-full">
          <div
            className={`wistia_embed wistia_async_${props.videoId} w-full h-full`}
          />
        </div>
      </div>
      <Script src="//fast.wistia.com/assets/external/E-v1.js" />
    </div>
  );
};
