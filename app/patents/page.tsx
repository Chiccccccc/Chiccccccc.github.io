import React from "react";
import Hero from "@/components/Hero";
import Divider from "@/components/Divider";

type Patent = {
  title: string;
  inventors: string;
  year: string;
  jurisdiction: string; // e.g., "U.S. Patent"
  application: string;  // e.g., "Provisional Application No. 63/485,855"
  note?: string;        // optional extra line(s)
  link?: string;        // optional external link (USPTO / PDF / etc.)
};

// 👉 自动把你的名字加粗（支持多种写法）
function renderInventors(inventors: string) {
  const targets = ["C. Chen", "Chi Chen", "Chen, C."];
  let nodes: React.ReactNode[] = [inventors];

  targets.forEach((t) => {
    nodes = nodes.flatMap((n, i) => {
      if (typeof n !== "string") return [n];
      const parts = n.split(t);
      if (parts.length === 1) return [n];

      const out: React.ReactNode[] = [];
      parts.forEach((p, idx) => {
        if (p) out.push(p);
        if (idx < parts.length - 1) {
          out.push(<strong key={`${t}-${i}-${idx}`}>{t}</strong>);
        }
      });
      return out;
    });
  });

  return <>{nodes}</>;
}

const PATENTS: Patent[] = [
  {
    title: "Rapid and scalable solution-based fabrication of quantum dot and quantum rod 2D arrays using DNA origami.",
    inventors: "Mark Bathe, Robert J. Macfarlane, Chi Chen, Xin Luo.",
    year: "2023",
    jurisdiction: "U.S. Patent",
    application: "Provisional Application No. 63/485,855.",
    // link: "https://...", // 可选：将来有 USPTO / PDF 链接再填
    // note: "Optional note (e.g., licensed / filed / granted / etc.)",
  },

  // ✅ 预留：后续直接按这个格式继续加
  // {
  //   title: "Another patent title.",
  //   inventors: "A. Author, Chi Chen, B. Author.",
  //   year: "2024",
  //   jurisdiction: "CN Patent",
  //   application: "Application No. XXXXXXX.",
  //   link: "https://...",
  //   note: "Optional note line.",
  // },
];

export default function PatentsPage() {
  return (
    <main>
      {/* 顶部 Hero：保持与你其它页面一致（你可自行换图/opacity/fallbackMode） */}
      <Hero imageUrl="/hero/patents.jpg" opacity={0} fallbackMode="light">
        <div className="heroMetaWrap">
          <div className="heroMetaText">
            <div>Date taken: Aug 4, 2018</div>
            <div>Location: La Maison du Docteur Gachet (Auvers-sur-Oise)</div>
          </div>
        </div>
      </Hero>

      <div className="container">
        <section className="section">
       
          <Divider />

          <div className="patentList">
            {PATENTS.map((p, idx) => (
              <div key={`${p.year}-${idx}`} className="patentItem">
                <div className="patentTitle">
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noreferrer">
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </div>

                <div className="patentInventors">{renderInventors(p.inventors)}</div>

                <div className="patentMeta">
                  <span className="patentVenue">
                    <em>{p.jurisdiction}</em>
                  </span>
                  {", "}
                  <span className="patentYear">{p.year}</span>
                  {". "}
                  <span className="patentApp">{p.application}</span>
                </div>

                {p.note ? <div className="patentNote">{p.note}</div> : null}

                {idx !== PATENTS.length - 1 ? <Divider /> : null}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
