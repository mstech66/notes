import React, { useState } from "react";
import { IconButton } from "@mui/material";
import "./Nav.css";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

const Nav = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const switchTheme = () => {
    let bodyElement = document.querySelector("body");
    bodyElement.classList.toggle("darkMode");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav id="navBar">
      <p className="title">Notes</p>
      <IconButton
        id="switchBtn"
        onClick={switchTheme}
        variant="contained"
        aria-label="Switch Theme"
      >
        {isDarkMode ? <DarkModeOutlined style={{color: 'white'}}/> : <LightModeOutlined />}
      </IconButton>
    </nav>
  );
};

export default Nav;
