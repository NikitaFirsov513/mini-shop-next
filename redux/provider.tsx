"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import { DATA_SET } from "./dataList/dataListActionType";

export function Providers({
  children,
  data,
}: {
  children: React.ReactNode;
  data: any;
}) {
  store.dispatch({
    type: DATA_SET,
    payload: data,
  });

  return <Provider store={store}>{children}</Provider>;
}
