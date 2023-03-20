export const ADD_COUNTER = "ADD_COUNTER";

export interface IAddCounter {
  type: typeof ADD_COUNTER;
  payload: string;
}

export type ICounterActions = IAddCounter;
