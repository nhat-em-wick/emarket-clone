import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const duplicate = findItem(state.cart, newItem);
      if (duplicate.length > 0) {
        state.cart = delItem(state.cart, newItem);
        state.cart = [
          ...state.cart,
          {
            ...newItem,
            id: duplicate[0].id,
            quantity: duplicate[0].quantity + newItem.quantity,
          },
        ];
      } else {
        state.cart = [
          ...state.cart,
          {
            ...newItem,
            id: state.cart.length > 0 ? state.cart[state.cart.length - 1].id + 1 : 1,
          },
        ];
      }
      state.cart = sortItem(state.cart)
    },
    updateItem: (state, action) => {
      const itemUpdate = action.payload
      const duplicate = findItem(state.cart, itemUpdate)
      if(duplicate.length > 0) {
        state.cart = delItem(state.cart, itemUpdate)
        state.cart = [...state.cart, {
          ...itemUpdate,
          id: duplicate[0].id
        }]
        state.cart = sortItem(state.cart)
      }
    },
    updateCart: (state, action) => {
      state.cart = action.payload
      state.cart = sortItem(state.cart)
    },
    removeItem: (state, action) => {
      const item = action.payload
      state.cart = delItem(state.cart, item)
    }
  },
});

const findItem = (arr, item) =>
  arr.filter((e) => e.slug === item.slug && e.color === item.color && e.size === item.size);

const delItem = (arr, item) =>
  arr.filter((e) => e.slug !== item.slug || e.color !== item.color || e.size !== item.size);

const sortItem = (arr) => arr.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));

export const {addItem, updateCart, updateItem, removeItem} = cartSlice.actions
export default cartSlice.reducer
