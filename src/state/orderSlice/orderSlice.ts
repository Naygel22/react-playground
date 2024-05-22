import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../../api/getAllOrders";

type SelectedOrder = Pick<Order, "id" | "name">

interface OrderState {
  selectedOrders: SelectedOrder[]; // Przechowuje ID wybranych zamówień
}

const initialState: OrderState = {
  selectedOrders: [],
}

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<SelectedOrder>) => {
      state.selectedOrders.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<SelectedOrder["id"]>) => {
      state.selectedOrders = state.selectedOrders.filter(order => order.id !== action.payload);
    }
  }
});

export const { addToCart, removeFromCart } = orderSlice.actions;

export default orderSlice.reducer;
