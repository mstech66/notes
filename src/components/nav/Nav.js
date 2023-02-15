import React, { useEffect } from "react";
import { IconButton } from "@mui/material";
import "./Nav.css";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../../store/Theme";

const Nav = (props) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const toggleTheme = () => {
    let bodyElement = document.querySelector("body");
    if (isDarkMode) {
      bodyElement.classList.add("darkMode");
    } else {
      bodyElement.classList.remove("darkMode");
    }
  };

  useEffect(() => {
    toggleTheme();
  });

  const switchTheme = () => {
    toggleTheme();
    dispatch(themeActions.toggleTheme());
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
        {isDarkMode ? (
          <DarkModeOutlined style={{ color: "white" }} />
        ) : (
          <LightModeOutlined />
        )}
      </IconButton>
    </nav>
  );
};

export default Nav;
