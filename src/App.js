import { ThemeProvider, useTheme } from "@mui/material";
import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import NotesList from "./components/noteslist/NotesList";

const App = (props) => {
  const theme = useTheme({
    palette: {
      primary: {
        main: "#eddd58",
      },
      secondary: {
        main: "#212121",
      },
    },
    overrides: {
      MuiOutlinedInput: {
        focused: {
          border: "1px solid green !important",
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <NotesList />
    </ThemeProvider>
  );
};

export default App;
