import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  data: {},
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal(state, action) {
      state.open = true;
      state.data = action.payload.data;
    },
    hideModal(state, action) {
      state.open = false;
    },
  },
});

export const modalActions = modal.actions;

export default modal.reducer;
