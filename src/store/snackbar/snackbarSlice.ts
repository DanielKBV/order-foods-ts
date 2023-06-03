import { createSlice } from '@reduxjs/toolkit'
import { AlertColor } from '@mui/material/Alert/Alert'

interface InitialType {
  open: boolean
  severity: AlertColor
  message: string
}

const initialState: InitialType = {
  open: false,
  severity: 'success',
  message: '',
}

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    doSuccess(state) {
      state.severity = state.severity = 'success'
      state.message = state.message = 'Successfully'
      state.open = state.open = true
    },
    doError(state, action) {
      state.severity = state.severity = 'error'
      state.message = state.message = action.payload
      state.open = state.open = true
    },
    closeSnackbar(state) {
      state.open = false
    },
  },
})

export const ActionsTypeSnackbar = snackbarSlice.actions
