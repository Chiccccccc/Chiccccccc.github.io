import Hero from "@/components/Hero";
import Divider from "@/components/Divider";

function PandasUnderline() {
  return <span className="pandasUnderline">PANDAS</span>;
}

export default function HomePage() {
  return (
    <main>
      <Hero imageUrl="/hero/home.png" opacity={0.45}>
  <div className="labFullName">
    <span className="pandasInitial">P</span>rogrammable{" "}
    <span className="pandasInitial">A</span>ssembly for{" "}
    <span className="pandasInitial">N</span>ucleic acid{" "}
    <span className="pandasInitial">D</span>elivery and{" "}
    <span className="pandasInitial">A</span>rtificial{" "}
    <span className="pandasInitial">S</span>ystems
  </div>

  <div className="titleDivider" />

  <div className="labAcronym">(PANDAS)</div>
</Hero>

      <div className="container">
        <section className="section">
          <Divider />
          
          <div className="intro">
            <p>
              The <strong>PANDAS</strong> Lab focuses on the rational design and programmable assembly of nucleic acid nanostructures to
              address key challenges in therapeutic delivery and synthetic biology. By leveraging the unique
              programmability, biocompatibility, and structural precision of nucleic acid-based materials, we aim to
              develop next-generation delivery platforms for mRNA, CRISPR components, and nucleic acid drugs. These
              platforms are engineered for high efficiency, safety, and adaptability, enabling spatiotemporally
              controlled delivery in complex biological environments.
            </p>

            <p style={{ marginTop: 14 }}>
              In parallel, we are developing nucleic acid-based programmable self-assembly systems as functional bridges
              between inorganic nanomaterials and microbial systems. Through rational spatial organization and molecular
              interfacing, we endow engineered microbes with novel functions. This hybrid bio–nano platform enables
              precise manipulation of biological behavior using structurally defined nucleic acid frameworks, opening
              new possibilities in synthetic symbiosis, smart bioreactors, and responsive living materials.
            </p>
          </div>

          <Divider />

          <h2 className="newsTitle">NEWS</h2>

          <div className="newsList">
             <div className="newsItem">
            2026-03-31: Congratulations to Yufei Zhang, Dr. Li Gong, and Wenbin Huang on the successful acceptance of their paper entitled{" "}
             <a
             href="https://pubs.rsc.org/en/content/articlelanding/2026/ta/d6ta00739b"  /* 换成你这篇文章的 DOI 或期刊页面 */
             target="_blank"
             rel="noreferrer"
             >
            “Quantum Dot-Microbe Hybrid Systems for Solar-to-Chemical Conversion”
            </a>{" "}
            Journal of Materials Chemistry A!
            </div>
            <div className="newsItem">2025-12-25: Welcome Yilun Liu to our lab as a Research Assistant!</div>
           <div className="newsItem">
            2025-11-27: Congratulations to Dr. Jia Jia and Xitong Liu on the successful acceptance of their paper entitled{" "}
             <a
             href="https://www.sciencedirect.com/science/article/pii/S2590183425000390"  /* 换成你这篇文章的 DOI 或期刊页面 */
             target="_blank"
             rel="noreferrer"
             >
            “Programmable Nucleic Acid Origami Nanostructures for Immunotherapy”
            </a>{" "}
            by Smart Materials in Medicine!
            </div>
            <div className="newsItem">2025-08-28: Welcome Wenbin Huang to our lab as a Graduate Student!</div>
            <div className="newsItem">2025-08-18: Welcome Danting Yu to our lab as a Graduate Student!</div>
            <div className="newsItem">
              2025-07-08: Welcome Fangjie Li to our lab as a Doctoral Student under Joint Supervision with Prof. Wenjun
              Li!
            </div>
            <div className="newsItem">2025-06-19: Welcome Hazel Cao to our lab as a Summer Internship Student!</div>
            <div className="newsItem">
              2025-02-13: Welcome Dr. Li Gong and Yufei Zhang to our lab as a Postdoctoral Associate and a Research
              Assistant, respectively!
            </div>
            <div className="newsItem">2024-08-13: Welcome Xitong Liu to our lab as a Graduate Student!</div>
            <div className="newsItem">
              2024-07-17: Our paper entitled{" "}
              <a
               href="https://onlinelibrary.wiley.com/doi/10.1002/anie.202410247"  /* ← 换成这篇文章的 DOI 或出版社页面 */
               target="_blank"
               rel="noreferrer"
              >
              “Versatile Dehydration-Assisted Functionalization of Quantum Dots and Rods”
              </a>{" "}
              has been accepted in Angewandte Chemie International Edition!
              </div>
            <div className="newsItem">2024-07-05: Welcome Dr. Jia Jia to our lab as a Postdoctoral Associate!</div>
            <div className="newsItem">
              2024-05-06: I have joined the Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences as an
              Associate Professor.
            </div>
            <div className="newsItem">
             2023-08-11: Our paper entitled{" "}
             <a
             href="https://www.science.org/doi/10.1126/sciadv.adh8508"   /* 文章页面 */
             target="_blank"
              rel="noreferrer"
              >
              “Ultrafast Dense DNA Functionalization of Quantum Dots and Rods for Scalable 2D Array Fabrication with Nanoscale
               Precision”
               </a>{" "}
              is now online and highlighted by{" "}
              <a
              href="https://news.mit.edu/2023/arrays-quantum-rods-could-enhance-tv-virtual-reality-devices-0811"  /* 具体 MIT News 那篇 */
              target="_blank"
              rel="noreferrer"
              >
              MIT News
              </a>
              !
              </div>

              </div>

          <Divider />

          <div className="credits">
            {"Inspired by Dali's “The Persistence of Memory”\nIdea: Chi Chen\nImage: Ella Maru Studio"}
          </div>
        </section>
      </div>
    </main>
  );
}
