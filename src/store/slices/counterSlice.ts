import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: ( state, action: PayloadAction<number> ) => {
      state.count += action.payload;
    },
    decrement: ( state, action: PayloadAction<number> ) => {
      state.count -= action.payload;
    },
    reset: ( state ) => {
      state.count = 0;
    }
  },

});

export const { decrement, increment, reset } = counterSlice.actions;
export default counterSlice.reducer;
