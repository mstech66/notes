import React, { useState } from "react";
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
  let isUpdating = false;
  const open = useSelector((state) => state.modal.open);
  const data = useSelector((state) => {
    if (state.modal.data.title === null && state.modal.data.content === null) {
      isUpdating = false;
    } else {
      isUpdating = true;
    }
    return state.modal.data;
  });
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const hideModalHandler = (event) => {
    saveNoteHandler(event);
    dispatch(modalActions.hideModal());
  };
  const clearValues = () => {
    setTitle(undefined);
    setContent(undefined);
  };
  const saveNoteHandler = (event) => {
    event.preventDefault();
    const newTitle = title === undefined ? data.title : title;
    const newContent = content === undefined ? data.content : content;
    let newData = {
      title: newTitle,
      content: newContent,
    };
    if (!isUpdating) {
      newData.id = Math.random();
      if (newData.title !== null || newData.content !== null) {
        dispatch(noteActions.addNote(newData));
      }
    } else {
      newData.id = data.id;
      dispatch(noteActions.updateNote(newData));
    }
    dispatch(modalActions.hideModal());
    clearValues();
  };

  return ReactDOM.createPortal(
    <Dialog
      open={open}
      onClose={hideModalHandler}
      scroll="paper"
      effect="Zoom"
      PaperProps={{
        style: { borderRadius: 8 },
      }}
    >
      <DialogContent className="noteModal bg-yellow">
        <InputBase
          className="input--title input--fullWidth"
          variant="standard"
          autoFocus
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
      <DialogActions className="bg-yellow">
        <Button variant="standard" onClick={hideModalHandler}>
          Close
        </Button>
      </DialogActions>
    </Dialog>,
    document.getElementById("modal-root")
  );
};

export default NoteModal;
