import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  repository: "",
  command: "",
  branch: "",
  sync: "10",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    changeInput: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, changeInput } = settingsSlice.actions;

export default settingsSlice.reducer;
