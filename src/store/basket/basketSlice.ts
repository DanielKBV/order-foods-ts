import { createSlice } from '@reduxjs/toolkit'
import { getBasket } from './basketThunk'

interface BasketType {
  id: string
  title: string
  amount: number
  price: number
}

interface InitialSateType {
  isLoading: boolean
  items: BasketType[]
  isError: unknown
}

const initialState: InitialSateType = {
  isLoading: false,
  items: [],
  isError: '',
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBasket.fulfilled, (state, action) => {
        state.items = action.payload
        state.isLoading = false
      })
      .addCase(getBasket.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBasket.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.payload
      })
  },
})
