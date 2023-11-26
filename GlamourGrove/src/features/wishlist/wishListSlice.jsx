import { createSlice } from "@reduxjs/toolkit";
export const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    items: {},
  },
  reducers: {
    addWishListItems: (state, action) => {
      let newItems = action.payload;
      let itemsId = newItems._id;
      let isTrue;
      state.items[itemsId] = newItems;
    },
    removeWishListItems: (state, action) => {
      let itemId = action.payload;
      delete state.items[itemId];
      state.isTrue = false;
    },
  },
});
export const { addWishListItems, removeWishListItems } = wishListSlice.actions;
export default wishListSlice.reducer;
