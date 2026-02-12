import Hero from "@/components/Hero";
import Divider from "@/components/Divider";

const RESEARCH_AREAS = [
  {
    key: "nad",
    title: "NUCLEIC ACID DELIVERY",
    href: "/research/nucleic-acid-delivery",
    img: "/research/card-nad.png",
    desc: "By tailoring the geometry, surface chemistry, and functional modules of DNA/RNA nanostructures, we can enhance their stability, improve cellular uptake, and achieve spatiotemporal control over cargo release.",
  },
  {
    key: "as",
    title: "ARTIFICIAL SYSTEMS",
    href: "/research/artificial-systems",
    img: "/research/card-as.png",
    desc: "By bridging inorganic nanomaterials with engineered microbial systems, we unlock new capabilities in gene regulation, energy transfer control, and advanced therapeutics.",
  },
  {
    key: "em",
    title: "EXCITON MODULATION",
    href: "/research/exciton-modulation",
    img: "/research/card-em.png",
    desc: "By programming the spatial arrangement and coupling of chromophores within nanostructures, we can precisely modulate exciton dynamics to control energy transfer for advanced sensing, imaging, and quantum-inspired biointerfaces.",
  },
];

export default function ResearchPage() {
  return (
    <main>
      <Hero imageUrl="/hero/research.jpg" opacity={0.35}>
        <div className="heroMetaWrap">
          <div className="heroMetaText">
            <div>Date taken: May 20, 2017</div>
            <div>Location: Vatican Museums (Vatican)</div>
          </div>
        </div>
      </Hero>

      <div className="container">
        <Divider />

        <section className="section">
          <div className="researchGrid3">
            {RESEARCH_AREAS.map((a) => (
              <div key={a.key} className="researchCard">
                <div className="researchCardImg">
                  <img src={a.img} alt={a.title} />
                </div>

                <a className="researchCardTitle" href={a.href}>
                  {a.title}
                </a>

                <p className="researchCardDesc">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
