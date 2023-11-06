import React, { useRef } from "react";
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

  return (
    <div className="App">
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
