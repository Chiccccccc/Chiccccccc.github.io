"use client";

import React from "react";
import Hero from "@/components/Hero";
import Divider from "@/components/Divider";

type Paper = {
  year: string;
  title: string;
  link: string;
  authors: string;
  venue: string;
  volume?: string;
  pages?: string;
  image?: string; // e.g. "/publications/2024-angew.png" (put file in /public/publications/)
 note?: React.ReactNode;

};

// 自动把你的名字加粗（支持多种写法）
function renderAuthors(authors: string) {
  const targets = ["C. Chen", "Chi Chen", "Chen, C."];
  let nodes: React.ReactNode[] = [authors];

  targets.forEach((t) => {
    nodes = nodes.flatMap((n, i) => {
      if (typeof n !== "string") return [n];
      const parts = n.split(t);
      if (parts.length === 1) return [n];

      const out: React.ReactNode[] = [];
      parts.forEach((p, idx) => {
        if (p) out.push(p);
        if (idx < parts.length - 1) out.push(<strong key={`${t}-${i}-${idx}`}>{t}</strong>);
      });
      return out;
    });
  });

  return <>{nodes}</>;
}

const PAPERS: Paper[] = [
  {
    year: "2026",
    title: "Quantum Dot-Microbe Hybrid Systems for Solar-to-Chemical Conversion",
    link: "https://pubs.rsc.org/en/content/articlelanding/2026/ta/d6ta00739b",
    authors: "Y. Zhang, L. Gong, W. Huang, C. Chen",
    venue: "Journal of Materials Chemistry A",
    volume: "x",
    pages: "xxx–xxx",
    image: "/publications/jmca2026.png",
  },
  {
    year: "2025",
    title: "Programmable Nucleic Acid Origami Nanostructures for Immunotherapy",
    link: "https://www.sciencedirect.com/science/article/pii/S2590183425000390",
    authors: "J. Jia, X. Liu, C. Chen",
    venue: "Smart Materials in Medicine",
    volume: "6",
    pages: "434–451",
    image: "/publications/smm2025.png",
  },
  {
    year: "2025",
    title: "Characterizing DNA Origami Nanostructures in TEM Images Using Convolutional Neural Networks",
    link: "https://pubs.acs.org/doi/abs/10.1021/acs.jcim.5c00330",
    authors: "X. Wei, Q. Mo, C. Chen, M. Bathe, R. Hernandez",
    venue: "Journal of Chemical Information and Modeling",
    volume: "65",
    pages: "6526–6536",
    image: "/publications/jcim2025.jpeg",
  },
  {
    year: "2024",
    title: "Versatile Dehydration-Assisted Functionalization of Quantum Dots and Rods",
    link: "https://onlinelibrary.wiley.com/doi/10.1002/anie.202410247",
    authors: "C. Chen, X. Luo, M. Bathe",
    venue: "Angewandte Chemie International Edition",
    volume: "63",
    pages: "e202410247",
    note: "Hot Paper",
    image: "/publications/angew2024.png",
  },
  {
    year: "2024",
    title: "Binding Site Programmable Self-Assembly of 3D Hierarchical DNA Origami Nanostructures",
    link: "https://pubs.acs.org/doi/full/10.1021/acs.jpca.4c02603",
    authors: "X. Wei, C. Chen, A. V. Popov, M. Bathe, R. Hernandez",
    venue: "The Journal of Physical Chemistry A",
    volume: "128",
    pages: "4999–5008",
    image: "/publications/jpca2024.jpeg",
  },
  {
    year: "2023",
    title:
      "Ultrafast Dense DNA Functionalization of Quantum Dots and Rods for Scalable 2D Array Fabrication with Nanoscale Precision",
    link: "https://www.science.org/doi/10.1126/sciadv.adh8508",
    authors: "C. Chen, X. Luo, A. E. K. Kaplan, M. G. Bawendi, R. J. Macfarlane, M. Bathe",
    venue: "Science Advances",
    volume: "9",
    pages: "eadh8508",
   note: (
  <>
    <div>
      Highlighted by MIT News ·{" "}
      <a
        href="https://news.mit.edu/2023/arrays-quantum-rods-could-enhance-tv-virtual-reality-devices-0811"
        target="_blank"
        rel="noreferrer"
        className="pubNoteLink"
      >
        Arrays of quantum rods could enhance TVs or virtual reality devices
      </a>
    </div>
    <div className="pubNoteSub">
      MIT engineers developed a new way to create these arrays, by scaffolding quantum rods onto patterned DNA.
    </div>
  </>
),

    image: "/publications/sa2023.png",
  },
  {
    year: "2022",
    title: "Nanoscale 3D Spatial Addressing and Valence Control of Quantum Dots using Wireframe DNA Origami",
    link: "https://www.nature.com/articles/s41467-022-32662-w",
    authors:
      "C. Chen, X. Wei, M. F. Parsons, J. Guo, J. L. Banal, Y. Zhao, M. N. Scott, G. S. Schlau-Cohen, R. Hernandez, M. Bathe",
    venue: "Nature Communications",
    volume: "13",
    pages: "4935",
    note: "Highlighted by Editor",
    image: "/publications/nc2022.png",
  },
  {
    year: "2022",
    title: "Molecular Structure of Single-Stranded DNA on the ZnS Surface of Quantum Dots",
    link: "https://pubs.acs.org/doi/10.1021/acsnano.2c01178",
    authors: "X. Wei, C. Chen, Y. Zhao, E. Harazinska, M. Bathe, R. Hernandez",
    venue: "ACS Nano",
    volume: "16",
    pages: "6666–6675",
    image: "/publications/acsnano2022.jpeg",
  },
  {
    year: "2020",
    title: "Resonance Energy Transfer to Gold Nanoparticles: NSET Defeats FRET",
    link: "https://doi.org/10.1016/j.trac.2019.115748",
    authors: "C. Chen, N. Hildebrandt",
    venue: "TrAC Trends in Analytical Chemistry",
    volume: "123",
    pages: "115748",
    image: "/publications/trac2020.png",
  },
  {
    year: "2019",
    title: "FRET-Modulated Multihybrid Nanoparticles for Brightness-Equalized Single-Wavelength Barcoding",
    link: "https://pubs.acs.org/doi/10.1021/jacs.9b03383",
    authors: "C. Chen, B. Corry, L. Huang, N. Hildebrandt",
    venue: "Journal of the American Chemical Society",
    volume: "141",
    pages: "11123–11141",
    note: (
  <>
    <div>
      <a
        href="https://pubs.acs.org/toc/jacsat/141/28"
        target="_blank"
        rel="noreferrer"
        className="pubNoteLink"
      >
        Back Cover
      </a>
    </div>
  </>
),
    image: "/publications/jacs2019.png",
  },
  {
    year: "2018",
    title: "Single-Nanoparticle Cell Barcoding by Tunable FRET from Lanthanides to Quantum Dots",
    link: "https://onlinelibrary.wiley.com/doi/10.1002/anie.201807585",
    authors:
      "C. Chen, L. Ao, Y. Wu, V. Cifliku, M. Cardoso Dos Santos, E. Bourrier, M. Delbianco, D. Parker, J. M. Zwier, L. Huang, N. Hildebrandt",
    venue: "Angewandte Chemie International Edition",
    volume: "57",
    pages: "13686–13690",
    note: (
  <>
    <div>
      <a
        href="https://doi.org/10.1002/anie.201810298"
        target="_blank"
        rel="noreferrer"
        className="pubNoteLink"
      >
        Inside Front Cover
      </a>
    </div>
  </>
),

    image: "/publications/angew2018.png",
  },
  {
    year: "2018",
    title: "Nanosurface Energy Transfer from Long-Lifetime Terbium Donors to Gold Nanoparticles",
    link: "https://pubs.acs.org/doi/10.1021/acs.jpcc.8b06539",
    authors: "C. Chen, C. Midelet, S. Bhuckory, N. Hildebrandt, M. H. V. Werts",
    venue: "The Journal of Physical Chemistry C",
    volume: "122",
    pages: "17566–17574",
    image: "/publications/jpcc2018.jpeg",
  },
  {
    year: "2016",
    title: "Living Cell Multilifetime Encoding Based on Lifetime-Tunable Latticed-Strained Quantum Dots",
    link: "https://pubs.acs.org/doi/10.1021/acsami.6b03795",
    authors: "L. Zhang, C. Chen, W. Li, G. Gao, P. Gong, L. Cai",
    venue: "ACS Applied Materials & Interfaces",
    volume: "8",
    pages: "13187–13191",
    image: "/publications/acsami2016.png",
  },
  {
    year: "2015",
    title: "Long-Decay Near-Infrared-Emitting Doped-Quantum Dots for Lifetime-Based in Vivo pH Imaging",
    link: "https://doi.org/10.1039/C5CC03046C",
    authors: "C. Chen, P. Zhang, L. Zhang, D. Gao, G. Gao, Y. Yang, W. Li, P. Gong, L. Cai",
    venue: "Chemical Communications",
    volume: "51",
    pages: "11162–11165",
    note: (
  <>
    <div>
      <a
        href="DOI	https://doi.org/10.1039/C5CC90298C"
        target="_blank"
        rel="noreferrer"
        className="pubNoteLink"
      >
        Inside Front Cover
      </a>
    </div>
  </>
),

    image: "/publications/cc2015.png",
  },
  {
    year: "2014",
    title:
      "Near-Infrared-Emitting Two-Dimensional Codes Based on Lattice-Strained Core/(Doped) Shell Quantum Dots with Long Fluorescence Lifetime",
    link: "https://doi.org/10.1002/adma.201402369",
    authors: "C. Chen, P. Zhang, G. Gao, D. Gao, Y. Yang, H. Liu, Y. Wang, P. Gong, L. Cai",
    venue: "Advanced Materials",
    volume: "26",
    pages: "6313–6317",
    image: "/publications/am2014.png",
  },
  {
    year: "2013",
    title:
      "Cation Exchange-Based Facile Aqueous Synthesis of Small, Stable, and Nontoxic Near-Infrared Ag2Te/ZnS Core/Shell Quantum Dots Emitting in the Second Biological Window",
    link: "https://doi.org/10.1021/am302933x",
    authors: "C. Chen, X. He, L. Gao, N. Ma",
    venue: "ACS Applied Materials & Interfaces",
    volume: "5",
    pages: "1149–1155",
    image: "/publications/acsami2013.png",
  },
];

export default function PublicationsPage() {
  return (
    <main>
      {/* 顶部 Hero：按你要求不改 */}
      <Hero imageUrl="/hero/publications.jpg" opacity={0} fallbackMode="light">
        <div className="heroMetaWrap">
          <div className="heroMetaText">
            <div>Date taken: Aug 28, 2019</div>
            <div>Location: Rijksmuseum (Amsterdam)</div>
          </div>
        </div>
      </Hero>

      <div className="container">
        <section className="section">
          <h2 className="sectionTitleCaps">PUBLICATIONS</h2>
          <Divider />

          <div className="pubList">
            {PAPERS.map((p, idx) => (
              <div key={`${p.year}-${idx}`} className="pubItem">
                <div className="pubGrid">
                  <div className="pubThumb">
                    {p.image ? (
                      <a href={p.link} target="_blank" rel="noreferrer" aria-label={`Open: ${p.title}`}>
                        <img src={p.image} alt={`Figure for: ${p.title}`} />
                      </a>
                    ) : (
                      <div className="pubThumbPlaceholder">FIGURE</div>
                    )}
                  </div>

                  <div className="pubBody">
                    {/* 1) 标题（下划线超链接） */}
                    <div className="pubTitle">
                      <a href={p.link} target="_blank" rel="noreferrer">
                        {p.title}
                      </a>
                    </div>

                    {/* 2) 作者（你的名字自动加粗） */}
                    <div className="pubAuthors">{renderAuthors(p.authors)}</div>

                    {/* 3) 期刊 + 年份 + 卷号 + 页码：逗号拼接，间距自然 */}
                    <div className="pubMeta">
                      <span className="pubVenue">
                        <em>{p.venue}</em>
                      </span>

                      {p.year ? (
                        <>
                          {", "}
                          <span className="pubYear">{p.year}</span>
                        </>
                      ) : null}

                      {p.volume ? (
                        <>
                          {", "}
                          <span className="pubVol">
                            <em>{p.volume}</em>
                          </span>
                        </>
                      ) : null}

                      {p.pages ? (
                        <>
                          {", "}
                          <span className="pubPages">{p.pages}</span>
                        </>
                      ) : null}
                    </div>

                    {/* 4) Note */}
                    {p.note ? <div className="pubNote">{p.note}</div> : null}
                  </div>
                </div>

                {idx !== PAPERS.length - 1 ? <Divider /> : null}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
