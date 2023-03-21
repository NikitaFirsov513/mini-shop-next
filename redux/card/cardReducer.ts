import { TData } from "@/types/data.type";
import { CARD_ADD, CARD_DELL, TActionsTypes } from "./cardActionTypes";

export interface ICard {
  card: TData[];
}

export const initialState: ICard = { card: [] };

export default function cardReducer(
  state: ICard = initialState,
  action: TActionsTypes
) {
  switch (action.type) {
    case CARD_ADD: {
      return { card: [...state.card, action.payload] };
    }
    case CARD_DELL: {
      

      return {
        card: state.card.filter((elem) => elem.name !== action.payload.name),
      };
    }
    default:
      return state;
  }
}
