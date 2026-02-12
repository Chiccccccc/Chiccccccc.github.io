"use client";

export default function FigureScroller({
  images,
  label = "Figures",
}: {
  images: { src: string; alt: string }[];
  label?: string;
}) {
  if (!images?.length) return null;

  return (
    <div className="figScroller" aria-label={label}>
      {images.map((im, i) => (
        <div key={i} className="figSlide">
          <img src={im.src} alt={im.alt} />
        </div>
      ))}
    </div>
  );
}
