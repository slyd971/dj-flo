"use client";

import { useRef } from "react";

type PanamVideo = {
  src: string;
  poster: string;
};

type PanamVideoGridProps = {
  videos: PanamVideo[];
};

export function PanamVideoGrid({ videos }: PanamVideoGridProps) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const pauseOtherVideos = (index: number) => {
    videoRefs.current.forEach((video, otherIndex) => {
      if (otherIndex !== index && video && !video.paused) {
        video.pause();
      }
    });
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {videos.map((video, index) => (
        <video
          key={video.src}
          ref={(element) => {
            videoRefs.current[index] = element;
          }}
          className="aspect-[9/16] w-full rounded-2xl border border-white/10 bg-black object-cover"
          src={video.src}
          poster={video.poster}
          controls
          preload="metadata"
          playsInline
          onPlay={() => pauseOtherVideos(index)}
        />
      ))}
    </div>
  );
}
