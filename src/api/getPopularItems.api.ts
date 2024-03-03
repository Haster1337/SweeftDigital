import { AxiosResponse } from "axios"
import { $api } from "../axios"
import { Item } from "../types/Item.type"

export const getPopularItemsRequest = async (): Promise<Item[]> => {
    try {
        const photos: AxiosResponse<Item[]> = await $api.get('/photos?per_page=20')
        return photos.data
    } catch (e) {
        throw Error()
    }
}