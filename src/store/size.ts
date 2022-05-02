import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Define a type for the slice state
export interface Size {
  size: {
    width: number;
    height: number;
  };
}

// Define the initial state using that type
const initialState: Size = {
  size: {
    height: 720,
    width: 480,
  },
};

export const sizeSlice = createSlice({
  name: 'size',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    storeSize: (state, action: PayloadAction<Size>) => {
      state.size = action.payload.size;
    },
  },
});

export const {storeSize} = sizeSlice.actions;

export default sizeSlice.reducer;
