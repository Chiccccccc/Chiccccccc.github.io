import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import FigureCarousel from "@/components/FigureCarousel";

const BLOCKS = [
  {
    title: "VALENCE GEOCODING",
    text: "Valence geocoding represents a potent and adaptable design strategy that facilitates nanoscale three-dimensional spatial addressing and valence manipulation of quantum dots. Furthermore, this approach allows for the creation of high-precision optical nanodevices, including colloidal molecules and three-dimensional energy transfer circuits, by harnessing the remarkable programmability of three-dimensional wireframe DNA origami.",
    figures: [
      { src: "/research/as-vg1.png", alt: "Valence geocoding figure 1" },
      { src: "/research/as-vg2.png", alt: "Valence geocoding figure 2" },
    ],
  },
  {
    title: "SURFACE-ASSISTED LARGE-SCALE ASSEMBLY",
    text: "The SALSA strategy enables the direct fabrication of DNA origami lattices on solid substrates with precise control over the relative orientation of individual origami tiles. The key to achieving such orientational control within two-dimensional lattices lies in the introduction of anisotropic lateral interactions between neighboring origami units. In addition, an entropy-driven brush design is implemented to guide the preferential landing orientation of each origami monomer, ensuring that all tiles adhere to the substrate with the same face up, thereby facilitating the assembly of larger, well-ordered superstructures.",
    figures: [
      { src: "/research/as-salsa1.png", alt: "SALSA figure 1" },
      { src: "/research/as-salsa2.png", alt: "SALSA figure 2" },
    ],
  },
];

export default function Page() {
  return (
    <main>
      <Hero imageUrl="/hero/artificial-systems.png" opacity={0.35}>
        <div className="heroCenterTitle heroCenterTitleBig">ARTIFICIAL SYSTEMS</div>
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
