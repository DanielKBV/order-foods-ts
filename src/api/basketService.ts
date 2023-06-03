import { axiosInstance } from '../config/axiosInstance'
import { BasketType } from '../store/basket/basketThunk'

export const getBasketRequest = () => {
  return axiosInstance.get('/basket.json')
}

export const putAmountToAddBasket = (data: BasketType) => {
  return axiosInstance.put(`/basket/${data.id}.json`, data)
}

export const putIncrementAmountFoodRequest = (data: BasketType) => {
  return axiosInstance.put(`/basket/${data.id}.json`, data)
}

export const putDecrementAmountFoodRequest = (data: BasketType) => {
  return axiosInstance.put(`/basket/${data.id}.json`, data)
}

export const deleteAmountFoodRequest = (data: BasketType) => {
  return axiosInstance.delete(`/basket/${data.id}.json`)
}
