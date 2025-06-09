import { configureStore } from "@reduxjs/toolkit";

import useReducer from "./src/features/user/userSlice";
import cartReducer from "./src/features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: useReducer,
    cart: cartReducer,
  },
});

export default store;
