import { useEffect, useState } from "react";
import NavElement from "./NavElement";
import { AiOutlineMenu } from "react-icons/ai";

interface NavProps {
  makeScroll: Function;
}

const Nav: React.FC<NavProps> = ({ makeScroll }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div className="nav">
      {windowWidth <= 950 && (
        <div className="nav">
          <AiOutlineMenu
            size={27}
            // @ts-ignore
            className="ml-auto mr-4 mt-2"
            onClick={() => setShowMenu(!showMenu)}
            style={{
              cursor: "pointer",
              transform: showMenu && "rotate(215deg)",
              transition: "transform .3s ease",
            }}
          />
        </div>
      )}
      {(windowWidth > 950 || showMenu) && (
        <div className="nav">
          <NavElement
            text="About me"
            id={0}
            makeScroll={makeScroll}
            setShowMenu={setShowMenu}
          />
          <NavElement
            text="Musical Odyssey"
            id={1}
            makeScroll={makeScroll}
            setShowMenu={setShowMenu}
          />
          <NavElement
            text="My projects"
            id={2}
            makeScroll={makeScroll}
            setShowMenu={setShowMenu}
          />
          <NavElement
            text="Contact me"
            id={3}
            makeScroll={makeScroll}
            setShowMenu={setShowMenu}
          />
        </div>
      )}
    </div>
  );
};

export default Nav;
