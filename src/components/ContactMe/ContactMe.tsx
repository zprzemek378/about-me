import { useState } from "react";
import ContactForm from "./ContactForm";
import "./contactme-styles.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const ContactMe = () => {
  const [showMessage, setShowMessage] = useState<Boolean>(false);
  const onSend = () => {
    setShowMessage(true);
  };
  return (
    <div className="contactMe">
      <h1 className="headText text-left">Contact me</h1>
      <div className="contactMeText">
        I'm always open to connecting with fellow enthusiasts, collaborators, or
        anyone who shares a passion for technology, music, or simply wants to
        get in touch. Please don't hesitate to reach out, and I'll do my best to
        respond as soon as possible.
      </div>
      <div className="responsiveContact justify-between contactMeText">
        <div className="contactPlace text-center flex-1">
          <ContactForm onSend={onSend} />
        </div>
        <div className="flex-1 ml-10 text-center flex flex-col">
          <div className="flex-1">
            {showMessage && (
              <div>
                <h3 className="text-xl font-semibold">
                  Your message has been sent!
                </h3>
                <br />
                <p>
                  I appreciate your interest and will reply as soon as possible.
                </p>
                <p>
                  In the meantime, feel free to explore more of my work or
                  connect with me on GitHub and LinkedIn.
                </p>
              </div>
            )}
          </div>
          <div>
            <div className="feelFree text-xl font-semibold">
              Feel free to connect with me through the following channels:
            </div>
            <div className="flex">
              <div className="externalLink">
                <div>
                  <AiFillGithub size={40} />
                </div>
                <a
                  className="externalLinkText"
                  href="https://github.com/zprzemek378"
                >
                  GitHub
                </a>
              </div>
              <div className="externalLink">
                <div>
                  <AiFillLinkedin size={40} />
                </div>
                <a
                  className="externalLinkText"
                  href="https://www.linkedin.com/in/przemys%C5%82aw-zieli%C5%84ski-b486aa283/"
                >
                  LinkedIn
                </a>
              </div>
              <div className="externalLink">
                <div>
                  <BiLogoGmail size={40} />
                </div>
                <a
                  className="externalLinkText"
                  href="mailto: zprzemek378@gmail.com"
                >
                  Gmail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
