import { configureStore } from '@reduxjs/toolkit'
import panelReducer from 'store/sidePanel/openPanel'
import pageReducer from 'store/pageSelector/selectPage'
import dataReducer from 'store/dataRetriever/searchTargetRetriever'

const store = configureStore({
  reducer: {
    panel: panelReducer,
    page: pageReducer,
    data: dataReducer,
  }
})

export default store;
