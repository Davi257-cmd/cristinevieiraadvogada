import React from 'react';
import { cn } from '@/lib/utils';

interface InfiniteScrollGalleryProps {
  images: string[];
  videos?: string[];
  className?: string;
}

export function InfiniteScrollGallery({ images, videos = [], className }: InfiniteScrollGalleryProps) {
  // Combine images and videos
  const mediaItems = [...images, ...videos];
  
  // Duplicate for seamless loop
  const duplicatedMedia = [...mediaItems, ...mediaItems];

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 30s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .media-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .media-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>
      
      <div className={cn("w-full relative overflow-hidden", className)}>
        {/* Scrolling media container */}
        <div className="relative w-full flex items-center justify-center py-8">
          <div className="scroll-container w-full max-w-6xl">
            <div className="infinite-scroll flex gap-6 w-max">
              {duplicatedMedia.map((media, index) => {
                const isVideo = media.endsWith('.mp4');
                return (
                  <div
                    key={index}
                    className="media-item flex-shrink-0 w-48 h-64 md:w-64 md:h-80 lg:w-80 lg:h-96 rounded-xl overflow-hidden shadow-2xl"
                  >
                    {isVideo ? (
                      <video
                        src={media}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={media}
                        alt={`Gallery image ${(index % mediaItems.length) + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

