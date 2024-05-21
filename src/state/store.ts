import { configureStore } from '@reduxjs/toolkit'
import moneyReducer from "./money/moneySlice"
import orderReducer from "./orderSlice/orderSlice"

export const store = configureStore({
  reducer: {
    money: moneyReducer,
    order: orderReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch