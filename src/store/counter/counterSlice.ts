import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  isReady: boolean;
}

const initialState: CounterState = {
  value: 0,
  isReady: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCounterState: (state, action: PayloadAction<number>) => {
      if (state.isReady) return;

      state.value = action.payload;
      state.isReady = true;
    },
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      if (state.value === 0) return;
      state.value--;
    },
    resetCounter: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { initCounterState, increment, decrement, resetCounter } = counterSlice.actions;

export default counterSlice.reducer;
