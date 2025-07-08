import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "Frontend, backend ve veritabanı alanlarında edindiğim bilgi ve deneyimlerle projelerde uçtan uca çözümler geliştirmeye odaklanıyorum. Kod kalitesi, performans ve sürdürülebilirlik konularında titizlikle çalışıyor; takım içi iş birliği ve sürekli öğrenme yaklaşımıyla teknik yetkinliğimi her geçen gün ileriye taşıyorum. Gerçek projelerde aktif rol alarak teorik bilgilerimi pratiğe dönüştürme fırsatı buluyorum.",
    highlights: {
     bullets: [
  "Full Stack Web Geliştirme",
  "Duyarlı (Responsive) ve Etkileşimli Ön Yüz Tasarımı",
  "HTML, CSS, JavaScript ve Bootstrap Kullanımı",
  "React ile Modern Web Uygulamaları Geliştirme",
  "React Hooks ve Bileşen (Component) Tabanlı Mimari",
  "ASP.NET Core ve MVC Framework ile Backend Geliştirme",
  "Microsoft SQL Server ile Veritabanı Yönetimi",
  "Yazılım Geliştirme Yaşam Döngüsü (SDLC) Konusunda Bilgi",
  "Agile ve Scrum Metodolojileri ile Çalışma Deneyimi",
  "Versiyon Kontrol Sistemleri (Git, GitHub) Kullanımı",
  "Problem Çözme ve Algoritma Geliştirme Yetkinliği"
],
heading: "İşte Öne Çıkan Bazı Yeteneklerim:"
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in "
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Contact Me{" "}
              </button>
              <a href="CV.pdf" download="CV.pdf">
                <button className="btn highlighted-btn">Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
