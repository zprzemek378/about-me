import "./footer-style.css";
import { GiClick } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="footer-main">
      <p className="footer-element font-bold">Przemysław Zieliński</p>

      <a
        className="footer-element footer-link flex text-center"
        href="https://github.com/zprzemek378"
      >
        GitHub
        {/* @ts-ignore */}
        <GiClick className="mt-1" />
      </a>

      <a
        className="footer-element footer-link flex text-center"
        href="https://www.linkedin.com/in/przemys%C5%82aw-zieli%C5%84ski-b486aa283/"
      >
        LinkedIn
        {/* @ts-ignore */}
        <GiClick className="mt-1" />
      </a>
    </div>
  );
};

export default Footer;
