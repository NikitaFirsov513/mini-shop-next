import { ADD_COUNTER, IAddCounter } from "./counterActionType";
import {
  createAction,
  createReducer,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
import dataListReducer from "./dataList/dataListReducer";

export interface ICounterState {
  count: number;
}

const initialState: ICounterState = {
  count: 0,
};

export const counterReducer = createReducer(initialState, (builder) => {
  builder.addCase(ADD_COUNTER, (state, action) => {
    state.count++;
  });
});

export const rootReducer = combineReducers({
  counter: counterReducer,
  dataList: dataListReducer
});

