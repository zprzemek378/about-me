import { useEffect, useState } from "react";
import "./aboutmescetion-styles.css";

const AboutMeSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div className="aboutMeSection">
      <h1 className="headText text-right">About me</h1>
      <div className="responsiveAboutMe">
        <img src="about-me/myPhoto.jpg" alt="myPhoto" className="myPhoto"></img>
        <div className="aboutMeText">
          <h3 className="text-xl font-semibold">Przemysław Zieliński</h3>
          <br /> <br />
          I'm a computer science student, passionate about the ever-evolving
          world of technology. My journey in the field of programming and
          software development has been an exciting one, and I'm constantly
          striving to expand my knowledge and skills.
          <br /> <br />
          My primary focus lies in creating web applications using React.js. I
          find the process of building user-friendly and interactive interfaces
          truly fascinating, and I'm always eager to take on new challenges to
          refine my coding abilities.
          <br /> <br />
          In my free time, I explore the world of music. I'm an avid music
          producer in my DAW (Digital Audio Workstation) and love experimenting
          with various sounds and melodies. Besides producing music, I'm a
          versatile musician, proficient in both guitar and piano. The harmony
          of coding and creating music is where I discover my creative flow, and
          I'm dedicated to both crafts.
          <br /> <br />
          As an enthusiast of computer science, I'm captivated by the continuous
          evolution of technology. The possibilities seem limitless, and I'm
          determined to be part of this exciting journey. I'm always on the
          lookout for innovative solutions and eager to contribute my skills to
          the ever-expanding world of software development.
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
