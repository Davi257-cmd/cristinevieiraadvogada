import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MediaItem {
  src: string;
  type: 'image' | 'video';
}

interface ImageAutoSliderProps {
  images: string[];
  videos?: string[];
  interval?: number;
  className?: string;
}

export function ImageAutoSlider({ images, videos = [], interval = 4000, className }: ImageAutoSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Combine images and videos into a single array
  const mediaItems: MediaItem[] = [
    ...images.map(src => ({ src, type: 'image' as const })),
    ...videos.map(src => ({ src, type: 'video' as const }))
  ];

  useEffect(() => {
    if (mediaItems.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
    }, interval);

    return () => clearInterval(timer);
  }, [mediaItems.length, interval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (mediaItems.length === 0) return null;

  const currentMedia = mediaItems[currentIndex];

  return (
    <div className={cn('relative w-full h-96 overflow-hidden rounded-2xl', className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          {currentMedia.type === 'video' ? (
            <video
              src={currentMedia.src}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={currentMedia.src}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black-dark/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {mediaItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              currentIndex === index
                ? 'bg-gold-primary w-8'
                : 'bg-white-cream/40 hover:bg-white-cream/70'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gold-primary"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: interval / 1000, ease: 'linear' }}
        key={currentIndex}
      />
    </div>
  );
}