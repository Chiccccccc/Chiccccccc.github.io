"use client";

import { useEffect, useMemo, useState } from "react";

type Slide = { src: string; alt: string };

export default function GroupCarousel({
  slides,
  autoPlay = true,
  intervalMs = 4500,
}: {
  slides: Slide[];
  autoPlay?: boolean;
  intervalMs?: number;
}) {
  const safeSlides = useMemo(() => slides ?? [], [slides]);
  const [idx, setIdx] = useState(0);

  // keep idx in range when slides change
  useEffect(() => {
    if (!safeSlides.length) return;
    setIdx((i) => Math.min(i, safeSlides.length - 1));
  }, [safeSlides.length]);

  // autoplay
  useEffect(() => {
    if (!autoPlay || safeSlides.length <= 1) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % safeSlides.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [autoPlay, intervalMs, safeSlides.length]);

  const go = (i: number) => setIdx(i);

  if (!safeSlides.length) return null;

  return (
    <div className="gc">
      <div className="gcViewport" aria-label="Group photo carousel">
        <div className="gcTrack" style={{ transform: `translateX(-${idx * 100}%)` }}>
          {safeSlides.map((s, i) => (
            <div className="gcSlide" key={i}>
              <img src={s.src} alt={s.alt} />
            </div>
          ))}
        </div>

        {/* optional arrows */}
        {safeSlides.length > 1 ? (
          <>
            <button
              className="gcArrow gcPrev"
              type="button"
              onClick={() => setIdx((i) => (i - 1 + safeSlides.length) % safeSlides.length)}
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              className="gcArrow gcNext"
              type="button"
              onClick={() => setIdx((i) => (i + 1) % safeSlides.length)}
              aria-label="Next photo"
            >
              ›
            </button>
          </>
        ) : null}
      </div>

      {/* dots */}
      {safeSlides.length > 1 ? (
        <div className="gcDots" aria-label="Photo selector">
          {safeSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`gcDot ${i === idx ? "isActive" : ""}`}
              onClick={() => go(i)}
              aria-label={`Go to photo ${i + 1}`}
              aria-current={i === idx ? "true" : "false"}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
