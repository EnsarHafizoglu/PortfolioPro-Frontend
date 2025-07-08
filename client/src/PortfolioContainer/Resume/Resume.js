import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import EducationIcon from "../../assets/Resume/education.svg";
import WorkHistoryIcon from "../../assets/Resume/work-history.svg";
import ProgrammingSkillsIcon from "../../assets/Resume/programming-skills.svg";
import ProjectsIcon from "../../assets/Resume/projects.svg";
import InterestsIcon from "../../assets/Resume/interests.svg";


const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: EducationIcon },
    { label: "Work History", logoSrc: WorkHistoryIcon },
    { label: "Programming Skills", logoSrc: ProgrammingSkillsIcon },
    { label: "Projects", logoSrc: ProjectsIcon },
    { label: "Interests", logoSrc: InterestsIcon },
  ];
  

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "Sql Server", ratingPercentage: 85 },
    { skill: "C#", ratingPercentage: 85 },
    { skill: "ASP.Net", ratingPercentage: 80 },
    { skill: "Java", ratingPercentage: 70 },
    { skill: "C", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 90 },
  ];

  const projectsDetails = [
  {
    title: "Öğrenci Takip Sistemi",
    duration: { fromDate: "2024", toDate: "2024" },
    description:
      "Öğrencilerin bilgilerini, devamsızlık durumlarını ve akademik performanslarını takip etmek için geliştirilmiş bir sistem.",
    subHeading:
      "Kullanılan Teknolojiler: ASP.NET Core, MVC Framework, Microsoft SQL Server, HTML, CSS, JavaScript, Bootstrap",
  },
 
  {
    title: "ROS ile Robotik Uygulama Geliştirme",
    duration: { fromDate: "2024", toDate: "2024" },
    description:
      "ROS (Robot Operating System) altyapısını kullanarak temel hareket komutları, sensör verisi işleme ve otonom görevler üzerinde çalışan bir robotik sistem geliştirildi. Simülasyon ortamında testler yapıldı.",
    subHeading:
      "Kullanılan Teknolojiler: ROS (Noetic), Python, Gazebo, RViz",
  },
   {
    title: "Müşteri Segmentasyonu ile Model Eğitimi",
    duration: { fromDate: "2025", toDate: "2025" },
    description:
      "Müşteri verilerini analiz ederek farklı müşteri gruplarını belirlemek amacıyla segmentasyon modeli eğitildi. K-means algoritması ile segmentler oluşturulup, görselleştirme ve yorumlama adımları gerçekleştirildi.",
    subHeading:
      "Kullanılan Teknolojiler: Python, Pandas, Scikit-learn, Matplotlib, Seaborn",
  },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Fatsa Anadolu Lisesi , ORDU"}
        subHeading={"Fatsa Anadolu Lisesi Fatsa / ORDU"}
        fromDate={"2018"}
        toDate={"2021"}
      />

      <ResumeHeading
        heading={"Konya Teknik Üniversitesi"}
        subHeading={" Konya Teknik Üniversitesi Selçuklu / KONYA"}
        fromDate={"2021"}
        toDate={"Devam Ediyor ... "}
      />   
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Architecht Bilişim Sistemleri"}
          subHeading={"FULL STACK DEVELOPER - YARI ZAMANLI"}
          fromDate={"2024"}
          toDate={"Devam Ediyor ..."}
        />
        <div className="experience-description">
          <span className="resume-description-text">
Kuveyt Türk’ün %100 iştiraki olan Architecht Bilişim Sistemleri’nde, Tekno Kampüs programı kapsamında Part-Time Full Stack Developer olarak çalışıyorum. Kurumsal projelerde frontend (React) ve backend (C#, ASP.NET Core) geliştirme süreçlerinde aktif olarak yer alıyor, uygulamaların hem arayüz hem de iş mantığı katmanlarına katkı sağlıyorum.

         </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
Güncel olarak C#, React, JavaScript ve SQL Server gibi teknolojilerle çalışıyor; gerçek projeler üzerinde deneyim kazanarak teknik becerilerimi geliştirmeye devam ediyorum. Agile metodolojisiyle yürütülen sprint süreçlerinde takım içinde aktif rol alıyorum.</span>
          <br />
          <span className="resume-description-text">
            - Kullanılan Teknolojiler: C#, React, JavaScript, SQL Server, Agile, SDLC, Proje Yönetimi
          </span>
          <br />          
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
  /* PROJECTS */
<div className="resume-screen-container" key="projects">
  <div className="project-scroll-area">
    {projectsDetails.map((project, index) => (
      <ResumeHeading
        key={index}
        heading={project.title}
        subHeading={project.subHeading}
        description={project.description}
        fromDate={project.duration.fromDate}
        toDate={project.duration.toDate}
      />
    ))}
  </div>
</div>,


    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Doğada Vakit Geçirmek"
        description="Doğa yürüyüşleri yapmak, kamp kurmak, köyde vakit geçirmek ve açık hava aktivitelerine katılmak."
      />
      <ResumeHeading
        heading="Arkadaşlarla Gezmek"
        description=" Yeni yerler keşfetmek, sosyal etkinliklere katılmak ve birlikte vakit geçirmek."
      />
      <ResumeHeading
        heading="Bilgisayar Oyunları Oynamak"
        description="Strateji, FPS ve macera türündeki oyunları oynamak ve oyun dünyasını keşfetmek."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img className="bullet-logo" src={bullet.logoSrc} alt={bullet.label} />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };
  

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
