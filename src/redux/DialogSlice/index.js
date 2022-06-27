import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: null,
  active: false
};

const dialogSlice = createSlice({
  name:'dialog',
  initialState,
  reducers: {
    setDialog: (state, action) => {
      state.text = action.payload
      state.active = true
    },
    removeDialog: (state, action) => {
      state.text = null
      state.active = false
    }
  }
})

export const {setDialog, removeDialog} = dialogSlice.actions
export default dialogSlice.reducer