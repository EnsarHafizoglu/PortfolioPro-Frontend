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
        "Öğrencilerin bilgilerini, devamsızlık durumlarını ve akademik performanslarını takip etmek için geliştirilmiş bir sistem..",
      subHeading: "Kullanılan Teknolojiler: ASP.NET Core, MVC Framework, Microsoft SQL Server, HTML, CSS, JavaScript, Bootstrap",
    },
    {
      title: "Kişisel Portföy Web Sitesi ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Tüm kişisel bilgilerimi ve projelerimi tek bir yerde sergilemek için oluşturulmuş bir kişisel portföy web sitesi.",
      subHeading:
        "Kullanılan Teknolojiler: React JS, Bootstrap",
    }  
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
          Kuveyt Türk'ün %100 iştiraki olan Architecht Bilişim Sistemleri'nde Tekno Kampüs programı kapsamında Part-Time Full Stack Developer olarak çalışıyorum. Backend ve frontend geliştirme süreçlerinde aktif rol alarak kurumsal projelerin hayata geçirilmesine katkı sağlıyorum.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
          Bu süreçte C#, React, JavaScript, SQL Server gibi teknolojilerde kendimi geliştirirken, Agile metodolojileri, Yazılım Geliştirme Yaşam Döngüsü (SDLC) ve proje yönetimi konularında da deneyim kazandım.
          </span>
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
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
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
