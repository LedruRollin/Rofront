import { createSlice } from '@reduxjs/toolkit'


const pageSlice = createSlice({
  name: 'page',
  initialState: {
    pageNumber: 1,
  },
  reducers: {
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload
    },
  }
})

export const { setPageNumber } = pageSlice.actions

export default pageSlice.reducer