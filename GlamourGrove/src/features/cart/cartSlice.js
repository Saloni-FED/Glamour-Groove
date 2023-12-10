import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: {},
  },
  reducers: {
    addToCart: (state, action) => {
      let item = action.payload;
      let cartItemId = item._id;
      if (state.cartItems[cartItemId]) {
        state.cartItems[cartItemId] = {
          ...item,
          quantity: (state.cartItems[cartItemId].quantity += 1),
        };
      } else {
        state.cartItems[cartItemId] = {
          ...item,
          quantity: 1,
        };
      }
      localStorage.setItem("myCart", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      if (state.cartItems[action.payload].quantity >= 1) {
        state.cartItems[action.payload].quantity -= 1;
      }

      if (state.cartItems[action.payload].quantity < 1) {
        delete state.cartItems[action.payload];
        localStorage.removeItem("myCart");
      }

      localStorage.setItem("myCart", JSON.stringify(state.cartItems));
    },
    removeAll: (state) => {
      state.cartItems = {};
      localStorage.removeItem("myCart");
    },
  },
});
export const { addToCart, removeFromCart, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
