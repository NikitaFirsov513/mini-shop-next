import { TData } from "@/types/data.type";
import {
  createAction,
  createReducer,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { DATA_SET, TDataListActions } from "./dataListActionType";
export interface IDataList {
  data: TData[];
}

export const initialState: IDataList = { data: [] };


export default function dataListReducer(
  state: IDataList = initialState,
  action: TDataListActions
) {
  switch (action.type) {
    case DATA_SET: {
      return { data: action.payload }
    }
    default:
      return state;
  }
}