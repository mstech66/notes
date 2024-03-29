import React, { useState } from "react";
import "./Modal.css";
import ReactDOM from "react-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  InputBase,
  Zoom,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/Modal";
import { noteActions } from "../../store/Note";
import DialogTransition from "./DialogTransition";

const NoteModal = () => {
  const dispatch = useDispatch();
  let isUpdating = false;
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const open = useSelector((state) => state.modal.open);
  const data = useSelector((state) => {
    if (state.modal.data.title === null && state.modal.data.content === null) {
      isUpdating = false;
    } else {
      isUpdating = true;
    }
    return state.modal.data;
  });
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

  const deleteNoteHandler = (event) => {
    event.preventDefault();
    dispatch(noteActions.deleteNote(data));
    dispatch(modalActions.hideModal());
  };

  const handleNextInput = (event) => {
    const contentInput = document.getElementById("content");
    contentInput.focus();
  };

  return ReactDOM.createPortal(
    <Zoom in={open} timeout={500}>
      <div>
        <Dialog
          open={open}
          onClose={hideModalHandler}
          scroll="paper"
          TransitionComponent={DialogTransition}
          PaperProps={{
            style: { borderRadius: 8 },
          }}
        >
          <DialogContent className="noteModal bg-yellow">
            <InputBase
              id="title"
              className="input--title input--fullWidth"
              variant="standard"
              autoFocus
              size="medium"
              defaultValue={data.title}
              onChange={({ target: { value } }) => setTitle(value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleNextInput(e);
                }
              }}
            />
            <InputBase
              id="content"
              className="input--fullWidth"
              multiline
              variant="standard"
              maxRows={20}
              defaultValue={data.content}
              onChange={({ target: { value } }) => setContent(value)}
            />
          </DialogContent>
          <DialogActions className="bg-yellow">
            {isUpdating && (
              <Button variant="standard" onClick={deleteNoteHandler}>
                Delete
              </Button>
            )}
            <Button variant="standard" onClick={hideModalHandler}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Zoom>,
    document.getElementById("modal-root")
  );
};

export default NoteModal;
