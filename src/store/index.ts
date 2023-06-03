import { configureStore } from '@reduxjs/toolkit'
import { mealsSlice } from './meals/mealsSlice'
import { basketSlice } from './basket/basketSlice'
import { snackbarSlice } from './snackbar/snackbarSlice'

export const store = configureStore({
  reducer: {
    [mealsSlice.name]: mealsSlice.reducer,
    [basketSlice.name]: basketSlice.reducer,
    [snackbarSlice.name]: snackbarSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
