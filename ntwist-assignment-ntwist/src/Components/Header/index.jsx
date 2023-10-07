import React, { useState } from "react";
import "./Header.css";
import lightLogo from "../../assets/logo-white.png";
import darkLogo from "../../assets/logo-dark.png";

const navmenu = ["Home", "Industries", "AI Software", "Blog", "Contact Us"];

const AppHeader = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 70) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  //   className={changeColor ? "header" : ""}

  return (
    <div className={`header ${changeColor ? "color-change" : ""}`}>
      <img
        src={changeColor ? darkLogo : lightLogo}
        alt="logo"
        className="logo"
      />
      <div className={`navmenu ${changeColor ? "navmenu2" : ""}`}>
        {navmenu.map((navitem) => {
          return <div className="navitem">{navitem}</div>;
        })}
      </div>
    </div>
  );
};

export default AppHeader;
