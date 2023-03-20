import { TData } from "@/types/data.type";

export const DATA_SET = 'DATA_SET';

export interface IDataSet {
    type: typeof DATA_SET;
    payload: TData[];
}


export type TDataListActions = IDataSet;
