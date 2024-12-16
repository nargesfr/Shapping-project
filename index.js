import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./countectSlice";  // به فرض که این هم درست است
import cartReducer from "./cartSlice"; // وارد کردن cartSlice

export const store = configureStore({
    reducer: {
        counter: counterSlice,  // نگه داشتن counterSlice
        cart: cartReducer, // اضافه کردن cartReducer برای مدیریت سبد خرید
    },
});
