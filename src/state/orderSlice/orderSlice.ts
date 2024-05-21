import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderState {
  selectedOrders: string[]; // Przechowuje ID wybranych zamówień
}

const initialState: OrderState = {
  selectedOrders: [],
}

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      state.selectedOrders.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.selectedOrders = state.selectedOrders.filter(orderId => orderId !== action.payload);
    }
  }
});

export const { addToCart, removeFromCart } = orderSlice.actions;

export default orderSlice.reducer;
