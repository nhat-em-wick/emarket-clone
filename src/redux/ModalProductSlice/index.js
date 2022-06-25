import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: null
};

const modalProductSlice = createSlice({
  name: 'modalProduct',
  initialState,
  reducers: {
    set: (state, action) => {
      state.product = action.payload
    },
    remove: (state, action) => {
      state.product = null
    }
  }
})

export const {set, remove} = modalProductSlice.actions
export default modalProductSlice.reducer