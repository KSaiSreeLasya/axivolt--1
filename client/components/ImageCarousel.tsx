import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: string[];
  alt?: string;
  className?: string;
}

export default function ImageCarousel({
  images,
  alt = "Carousel image",
  className,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden rounded-2xl",
        className,
      )}
    >
      {/* Images Container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${alt} ${index + 1}`}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
              index === currentIndex ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-yellow-green/10 pointer-events-none" />

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsTransitioning(false);
            }}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === currentIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75",
            )}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
