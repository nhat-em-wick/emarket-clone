import { configureStore } from '@reduxjs/toolkit'

import CartSlice from './CartSlice'
import ModalProductSlice from './ModalProductSlice'
import DialogSlice from './DialogSlice'

export const store = configureStore({
  reducer: {
    cartStore: CartSlice,
    modalProductStore: ModalProductSlice,
    dialogStore: DialogSlice
  },
})