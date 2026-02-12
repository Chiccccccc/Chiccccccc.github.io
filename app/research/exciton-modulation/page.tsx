import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import FigureCarousel from "@/components/FigureCarousel";

const BLOCKS = [
  {
    title: "FRET MODULATION",
    text: "Through comprehensive characterization of the Ln-QD-dye FRET system under a diverse range of configurations using steady-state and time-resolved spectroscopy and Monte Carlo simulations, we have achieved a profound comprehension of these multifaceted FRET nanosystems. This knowledge has enabled us to meticulously adjust the ingoing and outgoing FRET contributions, ultimately providing ultimate control over photoluminescence intensities and lifetimes. This methodology has allowed us to engineer hybrid nanoparticles with distinct photoluminescence lifetimes for optical RGB barcoding, while maintaining similar photoluminescence brightness and utilizing only a single excitation and emission wavelength.",
    figures: [
      { src: "/research/em-fret1.png", alt: "FRET modulation figure 1" },
    ],
  },
  {
    title: "TIME-RESOLVED ENCODING/DECODING",
    text: "Based on the intersections of the four distinct photoluminescence decay curves, we have selected and defined three temporally distinct time-gated photoluminescence intensity detection windows as red (R), green (G), and blue (B), respectively. A single photoluminescence intensity, integrated over the time interval of the detection channel, is recorded for each channel. The diverse shapes of the decay curves (i.e., varying photoluminescence lifetimes) give rise to unique combinations of photoluminescence intensities across the three detection channels R, G, and B. Consequently, each FRET nanoparticle can be identified by its distinctive RGB ratio, which is the ratio of the time-gated photoluminescence intensities (R/(R + G + B), G/(R + G + B), and B/(R + G + B)).",
    figures: [
      { src: "/research/em-tr1.png", alt: "Time-resolved encoding/decoding figure 1" },
    ],
  },
  {
    title: "LIFETIME ENGINEERING",
    text: "The implementation of band gap engineering in quantum dots has introduced the idea of structure-dependent and composition-dependent properties for their design and synthesis. We have developed an approach called 'lifetime engineering' based on a comprehension of the exciton recombination pathway, which allows us to manipulate the lifetime of quantum dots. This has opened up the possibility of developing various applications such as NIR-emitting two-dimensional codes, in vivo pH sensing, and multi-lifetime encoded targeted cell tracking.",
    figures: [
      { src: "/research/em-le1.png", alt: "Lifetime engineering figure 1" },
    ],
  },
];

export default function Page() {
  return (
    <main>
      <Hero imageUrl="/hero/exciton-modulation.png" opacity={0.35}>
        <div className="heroCenterTitle heroCenterTitleBig">EXCITON MODULATION</div>
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
