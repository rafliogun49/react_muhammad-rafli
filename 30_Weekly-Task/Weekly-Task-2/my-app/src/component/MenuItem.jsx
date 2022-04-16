import github from "../img/icons/github.png";
import ux from "../img/icons/ux.png";
import figma from "../img/icons/figma.png";
import html from "../img/icons/html.png";
import css from "../img/icons/css-3.png";
import js from "../img/icons/js.png";
import bootstrap from "../img/icons/bootstrap.png";
import cleanCode from "../img/icons/browser.png";
import {Link} from "react-router-dom";

let icons = {
  github: github,
  figma: figma,
  ux: ux,
  html: html,
  css: css,
  js: js,
  bootstrap: bootstrap,
  cleanCode: cleanCode,
};

const MenuItem = ({text, icon, id}) => {
  return (
    <Link to={`/${id}`}>
      <button className="menu-item d-flex gap-2 btn align-tems-center col-11">
        <img src={icons[icon]} alt="icon" width={20} />
        <span className="fw-bold text-light">{text}</span>
      </button>
    </Link>
  );
};

export default MenuItem;
