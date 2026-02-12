import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import FigureCarousel from "@/components/FigureCarousel";

const BLOCKS = [
  {
    title: "THERANOSTICS NANOROBOTS",
    text: "Theranostic nanorobots are a type of nanorobot that combines therapeutic and diagnostic capabilities in a single platform. These nanorobots can be designed to target specific disease sites and perform a variety of tasks, such as drug delivery, sensing and imaging, and even tissue repair. The integration of diagnostic and therapeutic functionalities into a single nanorobot enables real-time monitoring of the therapeutic response, allowing for personalized medicine and improved treatment outcomes.",
    figures: [
      { src: "/research/nad-tn1.png", alt: "Theranostics nanorobots figure 1" },

    ],
  },
  {
    title: "IMMUNOMODULATION",
    text: "Virus-like particles (VLPs) will mimic the structure and function of viruses by displaying multiple copies of one or more viral structural proteins. Specifically, the VLPs can be functionalized with tumor antigens at defined copies and various spatial spacings to investigate immune responses against cancer cells, leading to the development of a highly effective cancer vaccine. Furthermore, the VLPs can also be functionalized with secondary fluorophores emitting in the second biological window, enabling long-term, background-free in vivo tracking.",
    figures: [
      { src: "/research/nad-imm1.png", alt: "Immunomodulation figure 1" },
    
    ],
  },
];

export default function Page() {
  return (
    <main>
      <Hero imageUrl="/hero/nucleic-acid-delivery.png" opacity={0.35}>
        <div className="heroCenterTitle heroCenterTitleBig">NUCLEIC ACID DELIVERY</div>
      </Hero>

      <div className="container">
        <Divider />

        <section className="section">
          {BLOCKS.map((b, i) => (
            <div key={i}>
              <div className="researchBlock">
                <FigureCarousel images={b.figures} />
                <div className="researchBlockText">
                  <div className="researchBlockTitle">{b.title}</div>
                  <p className="researchBlockDesc">{b.text}</p>
                </div>
              </div>

              <Divider />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
