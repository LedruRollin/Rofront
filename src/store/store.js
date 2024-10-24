import { configureStore } from '@reduxjs/toolkit'
import panelReducer from 'store/sidePanel/openPanel'
import pageReducer from 'store/pageSelector/selectPage'
import dataReducer from 'store/dataRetriever/searchTargetRetriever'
import authReducer from 'store/auth/authSlice'

const store = configureStore({
  reducer: {
    panel: panelReducer,
    page: pageReducer,
    data: dataReducer,
    auth: authReducer,
  }
})

export default store;
