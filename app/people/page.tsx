import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import GroupCarousel from "@/components/GroupCarousel";

const PI = {
  name: "Chi Chen",
  title: "Associate Professor",
  photo: "/people/pi.png",
  bio: [
    "Chi Chen is an Associate Professor at the Shenzhen Institutes of Advanced Technology (SIAT), Chinese Academy of Sciences (CAS). He received his PhD in Electronics, Optoelectronics, and Micro-Nanotechnology from Paris-Saclay University, France, in 2019. In the same year, he joined the Department of Biological Engineering at MIT for postdoctoral research. In May 2024, he joined the SIAT as an Associate Professor. His primary research focuses on programmable nucleic acid nanodevices."
  ],
  awards: ["2024 — CAS “Hundred Talents Program”", "2019 — Chinese Government Award for Outstanding Self-Financed Students Abroad","2016 — Initiative d'excellence (IDEX) Paris-Saclay (Investissements d’avenir) ",],
  links: {
    orcid: "https://orcid.org/0000-0002-6126-1824",
    scholar: "https://scholar.google.fr/citations?user=7zs7GIgAAAAJ&hl=en",
    researchgate: "https://www.researchgate.net/profile/Chi-Chen-36",
  },
};

const TEAM = [
  
  {
    name: "Xitong Liu",
    role: "Master's Student",
    email: "xt.liu2@siat.ac.cn",
    photo: "/people/xitong.jpg",
    bio: "Xitong Liu earned her Bachelor's degree in Biological Engineering from Northwest University. She is currently a joint Graduate Student at Shenzhen University of Advanced Technology and the Southern University of Science and Technology. She love sports, especially badminton and table tennis.",
  },
  {
    name: "Li Gong",
    role: "Postdoctoral Associate",
    email: "li.gong@siat.ac.cn",
    photo: "/people/ligong.png",
    bio: "Dr. Li Gong currently is a Postdoctoral Associate at the Shenzhen Institutes of Advanced Technology (SIAT), Chinese Academy of Sciences (CAS). She received her PhD in Electrochemistry. Science and Technology from University of Barcelona in October 2024.",
  },
  {
    name: "Yufei Zhang",
    role: "Research Assistant",
    email: "xiezhangsayu@163.com",
    photo: "/people/yufei.png",
    bio: "Yufei Zhange holds a Bachelor's degree in Inorganic Non-Metallic Materials Engineering from Henan University of Technology and a Master's degree in Pharmaceutical Chemistry from Wuyi University. He currently is a Research Assistant at the Shenzhen Institutes of Advanced Technology (SIAT), Chinese Academy of Sciences (CAS)." ,
  },
  {
    name: "Fangjie Li",
    role: "PhD student",
    email: "fj.li@siat.ac.cn",
    photo: "/people/fangjie.png",
    bio: "Fangjie Li, a joint graduate student at the University of South China and Shanghai Institute of Organic Chemistry (SIOC), earned her Master's degree in Pharmacy from University of South China in June 2023. She is currently a PhD candidate in Chemical Biology at the Shenzhen Institutes of Advanced Technology (SIAT), Chinese Academy of Sciences (CAS).",
  },
  {
    name: "Danting Yu",
    role: "Master's Student",
    email: "dt.yu@siat.ac.cn",
    photo: "/people/danting.png",
    bio: "Danting Yu completed her Bachelor's degree in Biotechnology at Jinan University in 2025. She is now a graduate student at the University of Chinese Academy of Sciences. She has a passion for hiking and photography. ",
  },
  {
    name: "Wenbin Huang",
    role: "Master's Student",
    email: "wb.huang2@siat.ac.cn",
    photo: "/people/wenbin.png",
    bio: "Wenbin Huang obtained his Bachelor's degree from Guangdong Pharmaceutical University. He is currently pursuing his graduate research as a joint student at the Southern University of Science and Technology and the Shenzhen Institutes of Advanced Technology. His academic focus is on Biology and Pharmacy. Outside of academia, his personal interests include reading and physical fitness.",
  },
  {
    name: "Yilun Liu",
    role: "Research Assistant",
    email: "qq413903982@gmail.com",
    photo: "/people/yilun.png",
    bio: "Yilun Liu holds a Bachelor’s degree in Clinical Medicine from Shandong First Medical University and a Master’s degree in Medical Neurobiology from Peking University. He is currently a Research Assistant in the laboratory, with a broad interest in conducting research that delivers practical value. Outside the lab, he enjoys philosophy and game design.",
  },
  {
    name: "Limei Li",
    role: "Master's Student",
    email: "lm.li@siat.ac.cn",
    photo: "/people/limei.jpg",
    bio: "Limei Li received her Bachelor’s degree in Biomedical Engineering at Guangdong University of Technology. She is currently pursuing her Master’s degree in Biology and Medicine at the Shenzhen Institutes of Advanced Technology, Chinese Academy of Sciences. Her hobbies include badminton and listening to music.",
  },
];


const GROUP_PHOTOS = [
   {
    slides: [
      { src: "/group/gp202608041.jpg", alt: "Group photo 1" },
      { src: "/group/gp202608042.jpg", alt: "Group photo 2" },
    ],
    time: "2026-08-04",
    place: "Happy Ranch",
    note: "Mid-Year Team Event ",
  },
  {
    slides: [
      { src: "/group/gp2026261.jpg", alt: "Group photo 1" },
      { src: "/group/gp2026262.jpg", alt: "Group photo 2" },
    ],
    time: "2026-02-06",
    place: "No. 79 Fishing Boat Seafood Restaurant",
    note: "Year-end lunch",
  },
 
];

const ALUMNI = [
  { name: "Huaixuan (Hazel) Cao", now: "McMaster University", photo: "/alumi/huaixuan.png" },
  { name: "Jia Jia", now: "", photo: "/alumi/jiajia.jpg" },

];

function OrcidIcon() {
  return (
    <svg className="iconSvg" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#A6CE39" />
      <path
        d="M8.2 7.2h1.6v9.6H8.2V7.2zm4.4 0c3 0 5 1.8 5 4.8s-2 4.8-5 4.8h-2.4V7.2h2.4zm0 8c2 0 3.3-1.2 3.3-3.2S14.6 8.8 12.6 8.8h-.8v6.4h.8z"
        fill="#fff"
      />
    </svg>
  );
}
function ScholarIcon() {
  return (
    <svg className="iconSvg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 2 9l10 6 10-6-10-6z" fill="#0b5394" opacity="0.95" />
      <path
        d="M6.5 12.2V16c0 2.2 2.5 4 5.5 4s5.5-1.8 5.5-4v-3.8l-5.5 3.3-5.5-3.3z"
        fill="#434343"
        opacity="0.85"
      />
    </svg>
  );
}
function ResearchGateIcon() {
  return (
    <svg className="iconSvg" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="3" fill="#00CCBB" />
      <path
        d="M8 16V9.2h3.5c2 0 3.3 1 3.3 2.7 0 1.2-.6 2-1.7 2.4l2 1.7H13l-1.7-1.5H10V16H8zm2-3h1.6c.9 0 1.4-.4 1.4-1.1 0-.7-.5-1.1-1.4-1.1H10V13z"
        fill="#fff"
      />
    </svg>
  );
}

export default function PeoplePage() {
  return (
    <main>
      {/* Top photo: only Date/Location, aligned to container left, auto black/white via --navText */}
      <Hero imageUrl="/hero/people.jpg" opacity={0.35}>
        <div className="heroMetaWrap">
          <div className="heroMetaText">
            <div>Date taken: Jul 16, 2019</div>
            <div>Location: Valensole</div>
          </div>
        </div>
      </Hero>

      <div className="container">
        <section className="section">
          <h2 className="sectionTitleCaps">PRINCIPAL INVESTIGATOR</h2>
          <Divider />

          <div className="peopleGrid2">
            <div className="avatar">
              <img src={PI.photo} alt={`${PI.name} portrait`} />
            </div>

            <div>
              <div className="memberName" style={{ marginTop: 0 }}>
                {PI.name}
              </div>
              <div className="memberMeta">{PI.title}</div>

              <div className="piText">
                {PI.bio.map((p, idx) => (
                  <p key={idx} style={{ margin: idx === 0 ? "0 0 12px 0" : "0" }}>
                    {p}
                  </p>
                ))}
              </div>

              <div className="subTitle">HONORS &amp; AWARDS</div>
              <ul className="awardsList">
                {PI.awards.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>

              <div className="iconButtons" aria-label="PI profile links">
                <a className="iconBtn" href={PI.links.orcid} target="_blank" rel="noreferrer">
                  <OrcidIcon />
                  ORCID
                </a>
                <a className="iconBtn" href={PI.links.scholar} target="_blank" rel="noreferrer">
                  <ScholarIcon />
                  Google Scholar
                </a>
                <a className="iconBtn" href={PI.links.researchgate} target="_blank" rel="noreferrer">
                  <ResearchGateIcon />
                  ResearchGate
                </a>
              </div>
            </div>
          </div>

          <Divider />

          <h2 className="sectionTitleCaps">TEAM</h2>
          <Divider />

       <div className="teamList">
  {TEAM.map((m) => (
    <div key={m.name} className="memberRow">
      <div className="avatar">
        <img src={m.photo} alt={`${m.name} photo`} />
      </div>

      <div className="memberContent">
        <div className="memberName">{m.name}</div>
        <div className="memberMeta">{m.role}</div>

        {m.email ? (
          <div className="memberEmailRow">
            <a className="memberEmail" href={`mailto:${m.email}`}>
              {m.email}
            </a>
          </div>
        ) : null}

        <p className="memberBio">{m.bio}</p>
      </div>
    </div>
  ))}
</div>



        <Divider />

<h2 className="sectionTitleCaps">GROUP PHOTOS</h2>
<Divider />

<div className="groupPhotosList">
  {GROUP_PHOTOS.map((group, groupIndex) => (
    <div
      key={`${group.time}-${groupIndex}`}
      className="groupPhotosGrid"
      style={{
        marginBottom:
          groupIndex < GROUP_PHOTOS.length - 1 ? "32px" : 0,
      }}
    >
      <div>
        <GroupCarousel slides={group.slides} />
      </div>

      <aside className="groupMetaBox">
        <div className="groupMetaTitle">Time &amp; Location</div>
        <p className="groupMetaText">
          <strong>Time:</strong> {group.time}
          <br />
          <strong>Location:</strong> {group.place}
          {group.note ? (
            <>
              <br />
              <strong>Note:</strong> {group.note}
            </>
          ) : null}
        </p>
      </aside>
    </div>
  ))}
</div>

<Divider />


          <h2 className="sectionTitleCaps">ALUMNI</h2>
          <Divider />

          <div className="alumniList">
            {ALUMNI.map((a) => (
              <div key={a.name} className="alumniRow">
                <div className="avatarSmall">
                  <img src={a.photo} alt={`${a.name} portrait`} />
                </div>
                <div>
                  <p className="alumniName">{a.name}</p>
                  <p className="alumniNow">{a.now}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}