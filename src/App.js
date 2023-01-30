import { Add } from "@mui/icons-material";
import { Fab, ThemeProvider, useTheme } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import NoteModal from "./components/modal/NoteModal";
import Nav from "./components/nav/Nav";
import Note from "./components/note/Note";
import { modalActions } from "./store/Modal";

const App = (props) => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);

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

  const addNoteHandler = () => {
    dispatch(
      modalActions.showModal({
        data: {
          id: Math.random(),
          title: null,
          content: null,
        },
      })
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <div className="grid-container">
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
          />
        ))}
      </div>
      <Fab color="primary" className="fab" onClick={addNoteHandler}>
        <Add />
      </Fab>
      <NoteModal />
    </ThemeProvider>
  );
};

export default App;
