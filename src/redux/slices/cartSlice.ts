import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

interface CartState {
  cartItems: ProductData[];
  length: number;
  totalPrice: number;
  paid: boolean;
}

const initialState: CartState = {
  cartItems: [],
  length: 0,
  totalPrice: 0,
  paid: false,
};

const calculateTotalPrice = (cartItems: ProductData[]) => {
  const totalPrice = (
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0) +
    4.95
  ).toFixed(2);

  return parseFloat(totalPrice);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity, price, name, primary } = action.payload || {};
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity || 1;
        action.payload = {};
      } else {
        state.cartItems.push({
          id,
          primary,
          price,
          name,
          quantity: quantity || 1,
        });
      }
      state.length = state.cartItems.length;
      state.totalPrice = calculateTotalPrice(state.cartItems); // Update total price
      state.paid = false;
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.length = state.cartItems.length;
      state.totalPrice = calculateTotalPrice(state.cartItems); // Update total price
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const product = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (product) {
        product.quantity += 1;
        state.totalPrice = calculateTotalPrice(state.cartItems); // Update total price
      }
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const product = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.totalPrice = calculateTotalPrice(state.cartItems); // Update total price
      }
    },

    clearCartItems: (state) => {
      state.cartItems = []; // Clear the cartItems array
      state.totalPrice = 0; // Reset the totalPrice
    },

    togglePaid: (state) => {
      state.paid = true;
    },
  },
});

const persistConfig = {
  key: "cart",
  storage,
};

export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  clearCartItems,
  togglePaid,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
export default persistReducer(persistConfig, cartSlice.reducer);
