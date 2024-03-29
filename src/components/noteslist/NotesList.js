import React from "react";
import { Add } from "@mui/icons-material";
import { Fab, Zoom } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/Modal";
import NoteModal from "../modal/NoteModal";
import Note from "../note/Note";

const NotesList = (props) => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);

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
    <div>
      <div className="grid-container">
        {notes.map((note) => (
          <Zoom in={true} timeout={500} style={{ transitionDelay: true ? "1000ms" : "0ms" }}>
            <div>
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                content={note.content}
              />
            </div>
          </Zoom>
        ))}
      </div>
      <Fab color="primary" className="fab" onClick={addNoteHandler}>
        <Add />
      </Fab>
      <NoteModal />
    </div>
  );
};

export default NotesList;
