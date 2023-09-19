import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: boolean;
  update: number;
}

const initialState: CounterState = {
  value: false,
  update: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    open: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = !state.value;
    },

    update: (state) => {
      state.value = false;
      state.update = state.update + 1;
      console.log("update");
    },
  },
});

// Action creators are generated for each case reducer function
export const { open, update } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
