import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Typewriter } from 'react-simple-typewriter';
import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../PortfolioContainer/Footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (!screen || !screen.fadeInScreen || !props.id) return;
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  const submitForm = async (e) => {
    console.log("Form Data:", { name, email, message });
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      const errorMessage = "Lütfen tüm alanları doldurun!";
      setBanner(errorMessage);
      toast.error(errorMessage);
      return; // Hata varsa HTTP isteğini göndermeden fonksiyonu durdur
    }
  
    try {
      let data = {
  adSoyad: name,
  mesaj: message,
  email: email
      };
  
      setBool(true);
  
      // 2️⃣ **Boş alanlar yoksa HTTP isteği gönder**
      const res = await axios.post(`https://localhost:44369/api/geribildirim/gonder`, data);
      console.log("Response:", res);
  
      if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);
  
        // Formu sıfırla
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log("Form gönderme hatası:", error);
      setBanner("Bir hata oluştu. Lütfen tekrar deneyin.");
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
      setBool(false);
    }
  };
  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
          <Typewriter 
           words={[ 'Get In Touch 📧']}
           loop={Infinity}
           cursor
           cursorStyle='|'
           typeSpeed={70}
           deleteSpeed={50}
           delaySpeed={1000} />
          </h2>{" "}
         
          <a href="#">
            <i className="fa fa-google-plus-square" />
          </a>
          <a href="https://www.instagram.com/ensar_hfzoglu/">
            <i className="fa fa-instagram" />
          </a>
          <a href="https://github.com/EnsarHafizoglu">
                <i className="fa fa-github" />
           </a>
         
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
