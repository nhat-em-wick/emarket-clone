import { configureStore } from '@reduxjs/toolkit'

import CartSlice from './CartSlice'

export const store = configureStore({
  reducer: {
    cartStore: CartSlice
  },
})