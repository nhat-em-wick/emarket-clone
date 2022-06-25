import { configureStore } from '@reduxjs/toolkit'

import CartSlice from './CartSlice'
import ModalProductSlice from './ModalProductSlice'

export const store = configureStore({
  reducer: {
    cartStore: CartSlice,
    modalProductStore: ModalProductSlice
  },
})