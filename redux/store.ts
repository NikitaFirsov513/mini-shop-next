import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { TypedUseSelectorHook } from "react-redux/es/types";
import cardReducer from "./card/cardReducer";
import dataListReducer from "./dataList/dataListReducer";

export const rootReducer = combineReducers({
  dataList: dataListReducer,
  card: cardReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
