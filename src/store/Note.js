import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [{ id: "n1", title: "Hiee", content: "This is my first note!!" }],
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action) {
      const newNote = action.payload;
      console.log("Received:" + newNote);
      state.notes.push(newNote);
    },
  },
});

export const noteActions = noteSlice.actions;

export default noteSlice.reducer;
