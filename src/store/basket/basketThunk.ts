import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  deleteAmountFoodRequest,
  getBasketRequest,
  putAmountToAddBasket,
  putDecrementAmountFoodRequest,
  putIncrementAmountFoodRequest,
} from '../../api/basketService'

export interface BasketType {
  id: string
  title: string
  amount: number
  price: number
}

export const getBasket = createAsyncThunk(
  'basket/getBasket',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getBasketRequest()
      const { data } = response

      const result: BasketType[] = []

      for (const key in data) {
        result.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
          price: data[key].price,
        })
      }

      return result
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const addPutItem = createAsyncThunk(
  'meals/putAddItem',
  async (payload: BasketType, { dispatch, rejectWithValue }) => {

    try {
      const response = await putAmountToAddBasket(payload)
      const { data } = response

      const result: BasketType[] = []

      for (const key in data) {
        result.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
          price: data[key].price,
        })
      }

      dispatch(getBasket())

      return result
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const putIncrementAmountFood = createAsyncThunk(
  'basket/putIncrementAmountFood',
  async (payload: BasketType, { dispatch, rejectWithValue }) => {
    try {
      const response = await putIncrementAmountFoodRequest(payload)
      const { data } = response

      const result: BasketType[] = []

      for (const key in data) {
        result.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
          price: data[key].price,
        })
      }

      dispatch(getBasket())

      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const putDecrementAmountFood = createAsyncThunk(
  'basket/putDecrementAmountFood',
  async (payload: BasketType, { dispatch, rejectWithValue }) => {
    try {
      const response = await putDecrementAmountFoodRequest(payload)
      const { data } = response

      const result: BasketType[] = []

      for (const key in data) {
        result.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
          price: data[key].price,
        })
      }

      dispatch(getBasket())

      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const deleteAmountFood = createAsyncThunk(
  'basket/deleteAmountFood',
  async (payload: BasketType, { dispatch, rejectWithValue }) => {
    try {
      const response = await deleteAmountFoodRequest(payload)
      const { data } = response

      const result: BasketType[] = []

      for (const key in data) {
        result.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
          price: data[key].price,
        })
      }

      dispatch(getBasket())

      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
