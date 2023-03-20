"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import { ADD_COUNTER } from "./counterActionType";

export function Providers({ children }: { children: React.ReactNode }) {
  store.dispatch({
    type: ADD_COUNTER,
    payload: ADD_COUNTER,
  });
  return <Provider store={store}>{children}</Provider>;
}
