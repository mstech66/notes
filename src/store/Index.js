import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../store/Note";
import modalReducer from "../store/Modal";

const store = configureStore({
  reducer: { notes: notesReducer, modal: modalReducer },
});

export default store;
