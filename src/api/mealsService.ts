import { axiosInstance } from '../config/axiosInstance'

export const getAllFoodRequest = () => {
  return axiosInstance.get('/foods.json')
}

type MealsItemTypes = {
  title: string
  description: string
  price: number
}

export const postFoodRequest = (data: MealsItemTypes) => {
  return axiosInstance.post('/foods.json', data)
}
