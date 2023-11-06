import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import MyProjectsSection from "./components/MyProjectsSection/MyProjectsSection";
import Transparent from "./components/Transparent/Transparent";
import MusicalOdyssey from "./components/MusicalOdyssey/MusicalOdyssey";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  const scrollRef = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];
  const makeScroll = (where: number) => {
    scrollRef[where].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="App"
      style={{
        zoom:
          windowWidth < 500
            ? `${(windowWidth * 100) / 500}%`
            : windowWidth > 1230
            ? `${(windowWidth * 100) / 1230}%`
            : "100%",
      }}
    >
      <img
        src="/about-me/coding.jpg"
        alt="coding"
        className="codingPhoto"
      ></img>
      <Header makeScroll={makeScroll} />
      <div ref={scrollRef[0]}>
        <AboutMeSection />
        <Transparent />
      </div>
      <div ref={scrollRef[1]}>
        <MusicalOdyssey />
        <Transparent />
      </div>
      <div ref={scrollRef[2]}>
        <MyProjectsSection />
        <Transparent />
      </div>
      <div ref={scrollRef[3]}>
        <ContactMe />
        <Transparent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
