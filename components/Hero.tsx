"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";

function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

async function computeImageLuminance(src: string): Promise<number | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      try {
        const w = 48;
        const h = 24;
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return resolve(null);

        const srcW = img.naturalWidth;
        const srcH = img.naturalHeight;
        const sampleH = Math.max(1, Math.floor(srcH * 0.3));

        ctx.drawImage(img, 0, 0, srcW, sampleH, 0, 0, w, h);
        const data = ctx.getImageData(0, 0, w, h).data;

        let sum = 0;
        const n = w * h;
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          sum += 0.2126 * r + 0.7152 * g + 0.0722 * b;
        }
        resolve(sum / n);
      } catch {
        resolve(null);
      }
    };

    img.onerror = () => resolve(null);
    img.src = src;
  });
}

export default function Hero({
  children,
  imageUrl = "/hero.jpg",
  opacity = 0.35,
  fallbackMode = "light", // 取不到亮度时：light=白字，dark=黑字
}: {
  children?: ReactNode;
  imageUrl?: string;
  opacity?: number;
  fallbackMode?: "light" | "dark";
}) {
  useEffect(() => {
    let cancelled = false;

    const setModeFromImage = async () => {
      // 先设一个 fallback，避免继承上一页
      document.documentElement.setAttribute("data-nav", fallbackMode);

      const L = await computeImageLuminance(imageUrl);
      if (cancelled) return;

      const a = clamp01(opacity);

      // 若取不到亮度，使用 fallbackMode
      if (L == null) {
        document.documentElement.setAttribute("data-nav", fallbackMode);
        return;
      }

      // 考虑遮罩后“有效亮度”
      const effective = (1 - a) * L + a * 255;

      // effective 越亮 -> 黑字（dark），越暗 -> 白字（light）
      const mode = effective >= 150 ? "dark" : "light";
      document.documentElement.setAttribute("data-nav", mode);
    };

    setModeFromImage();

    // 延迟再测一次（提升稳定性）
    const t = window.setTimeout(() => {
      if (!cancelled) setModeFromImage();
    }, 250);

    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, [imageUrl, opacity, fallbackMode]);

  return (
    <section className="hero" style={{ ["--heroOpacity" as any]: opacity }}>
      <div className="heroImg" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="heroOverlay" />
      <div className="heroContent" style={{ paddingTop: 90 }}>
        <div className="heroTitleWrap">{children}</div>
      </div>
    </section>
  );
}
