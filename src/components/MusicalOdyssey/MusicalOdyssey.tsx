import { useEffect, useState } from "react";
import "./musicalOdyssey-styles.css";
// @ts-ignore
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import Soundfont from "soundfont-player";

const MusicalOdyssey = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  // Piano settings
  const firstNote = MidiNumbers.fromNote("c3");
  const lastNote = MidiNumbers.fromNote("c5");
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  const [disablePiano, setDisablePiano] = useState(true);
  return (
    <div className="musicalOdyssey">
      <h1 className="headText text-left">Musical Odyssey</h1>
      <div className="responsiveMusical1">
        <div className="musicText">
          My journey in the world of music has been a captivating one,
          intertwining harmoniously with my passion for coding and technology. I
          first embraced the piano in 2014 and have been exploring its
          enchanting melodies ever since. In 2021, I expanded my musical
          horizons to include both acoustic and electric guitars, allowing me to
          express my creativity in new ways.
          <br /> <br />
          For a year, I had the privilege of being a part of a musical ensemble,
          where my role as a guitarist brought a rhythmic dimension to our
          performances. This experience taught me the power of collaboration and
          how, much like coding, music thrives when different components come
          together seamlessly.
        </div>
        <img
          src="/about-me/musicstudio.jpg"
          alt="musicStudio"
          className="musicStudio"
        ></img>
      </div>
      <div className="responsiveMusical2">
        <img
          src="/about-me/musicband.jpg"
          alt="musicStudio"
          className="musicStudio"
        ></img>
        <div className="musicText">
          In 2019, I embarked on a new adventure, delving into the world of
          music production. Alongside my talented vocalist friends, I began
          creating music, combining the skills I've honed on the piano and
          guitar. We've recorded our compositions in a studio, experimenting
          with various sounds and melodies, much like I do with code.
          <br /> <br />
          The parallel between music and programming is striking. Both require
          precision, creativity, and a profound understanding of structure.
          Whether I'm composing a piece of music or writing code for a web
          application, the process is a creative outlet that allows me to
          express myself and bring my ideas to life.
          <br /> <br />
          My journey in music and technology has shaped me into an individual
          who is eager to explore new horizons, find innovative solutions, and
          contribute my skills to this ever-evolving world.
        </div>
      </div>

      <button
        className={`text-cyan-500 bg-neutral-900 ${
          disablePiano ? "activeButton" : "disableButton"
        }`}
        onClick={() => setDisablePiano(false)}
      >
        Try playing!
      </button>

      <button
        className={`text-cyan-500 bg-red-500 ${
          disablePiano ? "disableButton" : "activeButton"
        }`}
        onClick={() => setDisablePiano(true)}
      >
        Stop playing
      </button>

      <Piano
        className={`pianoElement m-auto ${
          disablePiano ? "disablePiano" : "activePiano"
        }`}
        disabled={disablePiano}
        noteRange={{ first: firstNote, last: lastNote }}
        playNote={(midiNumber: any) => {
          Soundfont.instrument(new AudioContext(), "acoustic_grand_piano").then(
            function (acoustic) {
              acoustic.play(midiNumber);
            }
          );
        }}
        stopNote={(midiNumber: any) => {
          Soundfont.instrument(new AudioContext(), "acoustic_grand_piano").then(
            function (acoustic) {
              acoustic.stop(midiNumber);
            }
          );
        }}
        keyboardShortcuts={keyboardShortcuts}
        width={windowWidth - 100}
      />
    </div>
  );
};

export default MusicalOdyssey;
