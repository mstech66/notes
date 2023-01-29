import React, { useState } from "react";
import { useNotesModalContext } from "./GlobalModal";
import "./Modal.css";
import ReactDOM from "react-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  InputBase,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/Modal";
import { noteActions } from "../../store/Note";

const NoteModal = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const open = useSelector((state) => state.modal.open);
  const data = useSelector((state) => {
    console.log(state.modal);
    return state.modal.data;
  });
  const hideModalHandler = () => {
    dispatch(modalActions.hideModal());
  };
  const saveNoteHandler = (event) => {
    event.preventDefault();
    const data = {
      id: Math.random(),
      title: title,
      content: content,
    };
    console.log(data);
    dispatch(noteActions.addNote(data));
    dispatch(modalActions.hideModal());
  };

  return ReactDOM.createPortal(
    <Dialog open={open} onClose={hideModalHandler} scroll="paper">
      <DialogContent className="noteModal bg-yellow">
        <InputBase
          className="input--title input--fullWidth"
          variant="standard"
          size="medium"
          defaultValue={data.title}
          onChange={({ target: { value } }) => setTitle(value)}
        />
        <InputBase
          className="input--fullWidth"
          multiline
          variant="standard"
          maxRows={20}
          defaultValue={data.content}
          onChange={({ target: { value } }) => setContent(value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={saveNoteHandler}>Save</Button>
      </DialogActions>
    </Dialog>,
    document.getElementById("modal-root")
  );
};

export default NoteModal;
