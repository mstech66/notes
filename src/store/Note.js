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
    updateNote(state, action) {
      const id = action.payload.id;
      const updatedNote = action.payload;
      state.notes = state.notes.map((note) => {
        if (note.id === id) {
          return updatedNote;
        } else {
          return note;
        }
      });
      console.log(`Final Notes Arr`, state.notes);
    },
    deleteNote(state, action) {
      const id = action.payload.id;
      state.notes = state.notes.filter((note) => note.id !== id);
    },
  },
});

export const noteActions = noteSlice.actions;

export default noteSlice.reducer;
