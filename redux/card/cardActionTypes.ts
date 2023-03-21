import { TData } from "@/types/data.type";

export const CARD_ADD = "CARD_ADD";

export interface ICardAdd {
  type: typeof CARD_ADD;
  payload: TData;
}
export const CARD_DELL = "CARD_DELL";

export interface ICardDel {
  type: typeof CARD_DELL;
  payload: TData;
}

export type TActionsTypes = ICardAdd | ICardDel;
