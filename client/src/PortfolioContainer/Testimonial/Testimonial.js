import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import lady from "../../../src/img/Testimonial/lady.png";
import mike from "../../../src/img/Testimonial/mike.png";
import man from "../../../src/img/Testimonial/man.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const testimonials = [
    {
      name: "Yaşar Uğur PABUCCU",
      role: "Product Owner",
      company: "Architecht Bilişim Sistemleri",
      image: man,
    },
    {
      name: "Ali Tunç",
      role: "Tribe Lead",
      company: "Architecht Bilişim Sistemleri",
      image: mike,
    },
    {
      name: "Özgür Öksüz",
      role: "Dr.Öğretim Üyesi",
      company: "Konya Teknik Üniversitesi",
      image: lady,
    },
  ];

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"People I've Worked With"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container testimonial-grid">
          {testimonials.map((person, index) => (
            <div key={index} className="testi-item">
              <div className="client-info">
                <img src={person.image} alt={person.name} />
                <h5>{person.name}</h5>
                <p>{person.role} @ {person.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
