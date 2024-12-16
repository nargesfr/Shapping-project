import { createSlice } from "@reduxjs/toolkit";

// ایجاد slice برای مدیریت سبد خرید
export const cartSlice = createSlice({
  name: "cart",  // نام slice
  initialState: [],  // وضعیت اولیه (یک آرایه خالی برای سبد خرید)
  reducers: {
    addToCart(state, action) {
      console.log('adding to cart' , action.payload)
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart(state, action) {
      return state.filter(item => item.id !== action.payload);  // استفاده از filter به جای splice
    },

    reduceFromCart(state, action) {
      const existingItem = state.find((item) => item.id === action.payload);
      if (existingItem && existingItem.quantity === 1) {
        return state.filter(item => item.id !== action.payload);
      } else if (existingItem) {
        return state.map(item => 
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return state;  // اگر آیتمی پیدا نشد
    }
  }
});

// صادر کردن اکشن‌ها به صورت جداگانه
export const { addToCart, removeFromCart, reduceFromCart } = cartSlice.actions;

// صادر کردن reducer برای اضافه کردن به store
export default cartSlice.reducer;