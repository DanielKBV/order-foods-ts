import { createSlice } from '@reduxjs/toolkit'
import { getFoods } from './mealsThunk'
import { addPutItem } from '../basket/basketThunk'

export type MealsItemType = {
  id: string
  title: string
  description: string
  price: number
}

interface InitialSateType {
  isLoading: boolean
  items: MealsItemType[]
  isError: unknown
}

const initialState: InitialSateType = {
  isLoading: false,
  items: [],
  isError: '',
}

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFoods.fulfilled, (state, action) => {
        state.items = action.payload
        state.isLoading = false
        state.isError = ''
      })
      .addCase(getFoods.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getFoods.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.payload
      })
    builder
      .addCase(addPutItem.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(addPutItem.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addPutItem.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.payload
      })
  },
})
