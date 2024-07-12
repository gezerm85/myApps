import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
  },
})

export const { } = mainSlice.actions

export default mainSlice.reducer