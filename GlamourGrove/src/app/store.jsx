import {configureStore} from "@reduxjs/toolkit"
import wishlistReducer from "../features/wishlist/wishListSlice"
import cartReducer from "../features/cart/cartSlice"
export default configureStore({
    reducer:{
        wishList:wishlistReducer,
        cart:cartReducer
    }
})