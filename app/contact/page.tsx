import React from "react";
import Hero from "@/components/Hero";
import Divider from "@/components/Divider";

export default function ContactPage() {
  return (
    <main>
      {/* 顶部 Hero：保持与你其它页面一致（可自行换图/opacity/fallbackMode） */}
      <Hero imageUrl="/hero/contact.jpg" opacity={0} fallbackMode="light">
        <div className="heroMetaWrap">
          <div className="heroMetaText">
            <div>Date taken: Sept 19, 2018</div>
            <div>Location:  Casa Milà (Barcelona)</div>
          </div>
        </div>
      </Hero>

      <div className="container">
        <section className="section">
        
          <Divider />

          {/* Join */}
          <div className="contactJoin">
            <div className="contactJoinTitle">JOIN THE PANDAS LAB</div>
            <p className="contactJoinDesc">
              We are constantly looking for highly motivated individuals to join our team. If you are an
              undergraduate or graduate student, postdoctoral researcher, or visiting scholar with an
              interest in becoming part of our group, please submit your application materials. This
              should include your CV, a list of references, and a cover letter detailing your background
              and interests.
            </p>
          </div>

          <Divider />

          {/* Map + Location */}
          <div className="contactGrid">
            <div className="contactMap" aria-label="Map">
              {/* ✅ 你可以把 src 换成你更精确的地点 / Google Maps share link */}
              <iframe
              title="PANDAS LAB location map"
              loading="lazy"
              src="https://uri.amap.com/marker?position=113.991,22.5945&name=Shenzhen%20University%20Town&coordinate=gaode&callnative=0"
              />

            </div>

            <aside className="contactCard">
              <div className="contactCardTitle">LOCATION</div>

              <div className="contactBlockTitle">PROF. CHI CHEN&apos;S OFFICE ADDRESS</div>
              <div className="contactAddr">
                <div>B1005</div>
                <div>1068 Xueyuan Avenue,</div>
                <div>Shenzhen University Town,</div>
                <div>Shenzhen, P.R. China 518055</div>
              </div>

              <div className="contactLine" />

              <div className="contactBlockTitle">EMAIL</div>
              {/* ✅ 把邮箱替换成你的真实地址 */}
              <a className="contactEmail" href="mailto:chi.chen@siat.ac.cn">
                chi.chen@siat.ac.cn
              </a>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
