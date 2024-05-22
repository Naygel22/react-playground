import { configureStore } from '@reduxjs/toolkit'
import moneyReducer from "./money/moneySlice"
import orderReducer from "./orderSlice/orderSlice"
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {
    money: moneyReducer,
    order: orderReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;