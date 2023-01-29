import React, { Component } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/Modal";
import NoteModal from "../modal/NoteModal";
import "./Note.css";

const Note = (props) => {
  const dispatch = useDispatch();

  const noteClickHandler = () => {
    dispatch(
      modalActions.showModal({
        data: { id: props.id, title: props.title, content: props.content },
      })
    );
  };

  return (
    <>
      <div className="note" onClick={noteClickHandler} key={props.id}>
        <p className="note-title">{props.title}</p>
        <p className="note-content">{props.content}</p>
      </div>
    </>
  );
};

export default Note;
