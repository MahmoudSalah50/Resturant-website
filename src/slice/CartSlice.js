import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn("Could not load cart from localStorage", e);
    return [];
  }
};

const saveCartToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (e) {
    console.warn("Could not save cart to localStorage", e);
  }
};

export const cartSlice = createSlice({
  initialState: loadCartFromLocalStorage(),
  name: "cartslice",
  reducers: {
    addCart: (state, action) => {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        console.warn("Attempted to add item with non-positive quantity");
        return state; // No changes if quantity is zero or negative
      }

      const finditem = state.find((item) => item.id === id);
      if (finditem) {
        finditem.quantity += quantity;
        if (finditem.quantity <= 0) {
          // Remove item if quantity becomes zero or negative
          return state.filter((item) => item.id !== id);
        }
      } else {
        const itemclone = {
          ...action.payload,
          quantity,
        };
        state.push(itemclone);
      }
      saveCartToLocalStorage(state);
    },
    deleteCart: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload.id);
      saveCartToLocalStorage(newState);
      return newState;
    },
    clearCart: (state) => {
      const newState = [];
      saveCartToLocalStorage(newState);
      return newState;
    },
  },
});

export const { addCart, deleteCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
