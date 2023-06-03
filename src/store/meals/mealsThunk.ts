import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllFoodRequest } from '../../api/mealsService'
import { MealsItemType } from './mealsSlice'

export const getFoods = createAsyncThunk(
  'meals/getFoods',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllFoodRequest()
      const { data } = response

      const result: MealsItemType[] = []

      for (const key in data) {
        result.push({
          id: key,
          title: data[key].title,
          description: data[key].description,
          price: data[key].price,
        })
      }

      return result
    } catch (error: unknown) {
      return rejectWithValue(error)
    }
  }
)


