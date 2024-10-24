import { createSlice } from '@reduxjs/toolkit'


const panelSlice = createSlice({
  name: 'panel',
  initialState: {
    panelOpened: false,
    panelData: {},
  },
  reducers: {
    openPanel: (state, action) => {
      state.panelOpened = true
      state.panelData = action.payload
    },
    closePanel: state => {
      state.panelOpened = false
    },
  }
})

export const { openPanel, closePanel } = panelSlice.actions

export default panelSlice.reducer