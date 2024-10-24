// authSlice.js
import { createSlice } from '@reduxjs/toolkit'
import fetchAuthData from '../../api/tokenRetriever'

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  loading: false,
  errorMessage: null,
  isAuthenticated: false,
  userToken: userToken,
  userTokenExpiration: null,
  userId: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAuthData.pending, (state, action) => {
      return {
        ...state,
        loading: true,
        errorMessage: null,
      }
    })
    .addCase(fetchAuthData.fulfilled, (state, action) => {
      let userToken = action.payload.access_token;
      let tokenData = JSON.parse(atob(userToken.split(".")[1]));
      const userTokenExpiration = new Date(tokenData.exp*1000).getTime();
      localStorage.setItem("userToken", userToken);
      localStorage.setItem("userTokenExpiration", userTokenExpiration);
      return {
        ...state,
        loading: false,
        errorMessage: null,
        userToken: userToken,
        userTokenExpiration: userTokenExpiration,
        userId: tokenData.user_id,
        isAuthenticated: true,
      }
    })
    .addCase(fetchAuthData.rejected, (state, action) => {
      localStorage.setItem("userToken", null);
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
        userToken: null,
        userTokenExpiration: null,
        userId: null,
        isAuthenticated: false,
      }
    })
  },
})

export const { authReducer } = authSlice.actions;

export default authSlice.reducer;
