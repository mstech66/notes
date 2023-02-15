import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../store/Note";
import modalReducer from "../store/Modal";
import themeReducer from "../store/Theme";
import { debounce } from "@mui/material";
import { loadState, saveState } from "./LocalStorage";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    notes: notesReducer,
    modal: modalReducer,
    theme: themeReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(
  debounce(() => {
    saveState({
      notes: store.getState().notes,
      theme: store.getState().theme,
    });
  }, 1000)
);

export default store;
