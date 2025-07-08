import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import DefaultProfilePhoto from "../../../src/img/Testimonial/DefaultProfilePhoto.png";
import AliTunc from "../../../src/img/Testimonial/AliTunc.jpg";
import YaşarUğur from "../../../src/img/Testimonial/YasarUgur.jpg";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const testimonials = [
    {
      name: "Ali TUNÇ",
      role: "Tribe Lead",
      company: "Architecht",
      image: AliTunc,
    },

    {
      name: "Yaşar Uğur PABUCCU",
      role: "Product Owner",
      company: "Architecht",
      image: YaşarUğur,
    },

    {
      name: "Mustafa CAN",
      role: "SOftware Engineer",
      company: "Architecht",
      image: DefaultProfilePhoto,
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
