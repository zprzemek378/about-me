import "./header-styles.css";
import Nav from "./Nav";
import { BiBug } from "react-icons/bi";

interface HeaderProps {
  makeScroll: Function;
}

const Header: React.FC<HeaderProps> = ({ makeScroll }) => {
  return (
    <header className="header">
      <h1 className="headerText">
        <BiBug />
        &nbsp; Przemysław Zieliński
      </h1>
      <Nav makeScroll={makeScroll} />
    </header>
  );
};

export default Header;
