"use client";

import { useEffect, useMemo, useState } from "react";

export default function FigureCarousel({
  images,
  intervalMs = 3500,
}: {
  images: { src: string; alt: string }[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);

  const count = images?.length ?? 0;
  const canAuto = useMemo(() => count >= 2, [count]);

  // 防止 images 长度变化时 index 越界
  useEffect(() => {
    if (count === 0) return;
    setIndex((prev) => Math.min(prev, count - 1));
  }, [count]);

  // 自动轮播
  useEffect(() => {
    if (!canAuto) return;
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, intervalMs);
    return () => window.clearInterval(t);
  }, [canAuto, count, intervalMs]);

  if (!images || images.length === 0) return null;

  return (
    <div className="figCarousel" aria-label="Figure carousel">
      <div className="figCarouselFrame">
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="figCarouselImg"
        />
      </div>

      {count > 1 && (
        <div className="figDots" aria-label="Figure pagination">
          {images.map((_, i) => (
            <button
              key={i}
              className={`figDot ${i === index ? "active" : ""}`}
              aria-label={`Go to image ${i + 1}`}
              onClick={() => setIndex(i)}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
}
