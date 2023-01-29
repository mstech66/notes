import React, { Component } from "react";
import { Button, IconButton } from "@mui/material";
import "./Nav.css";
import { DarkModeOutlined } from "@mui/icons-material";

class Nav extends Component {
  switchTheme = () => {
    let bodyElement = document.querySelector("body");
    bodyElement.classList.toggle("darkMode");
  };

  render() {
    return (
      <nav id="navBar">
        <p className="title">Notes</p>
        <IconButton
          id="switchBtn"
          onClick={this.switchTheme}
          variant="contained"
          aria-label="Switch Theme"
        >
          <DarkModeOutlined />
        </IconButton>
      </nav>
    );
  }
}

export default Nav;
