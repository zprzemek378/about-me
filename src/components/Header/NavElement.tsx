interface NavElementProps {
  text: string;
  id: number;
  makeScroll: Function;
  setShowMenu: Function;
}

const NavElement: React.FC<NavElementProps> = ({
  text,
  id,
  makeScroll,
  setShowMenu,
}) => {
  return (
    <div
      className="navElement"
      onClick={() => {
        makeScroll(id);
        setShowMenu(false);
      }}
    >
      {text}
    </div>
  );
};

export default NavElement;
