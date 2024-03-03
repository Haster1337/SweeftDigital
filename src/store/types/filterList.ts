import { ItemState, getItemsSuccessPayload } from "./items"

export type filterListType = string[]

export type filterObject = {
    [key: string]: ItemState
}

export interface filterPayload{
    key: string
    value: ItemState
}