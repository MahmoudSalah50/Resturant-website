import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../slice/CartSlice";
import MenuSlice from "../slice/MenuSlice";
import userSlice from "../slice/Userslice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    menu: MenuSlice,
    cart: CartSlice,
  },
});
