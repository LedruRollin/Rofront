import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import SearchTargetAPI from "api/searchTargets"


export const fetchSearchTargetData = createAsyncThunk(
  'data/fetchSearchTargets',
  async (arg, thunkAPI) => {
    try {
      const response = await SearchTargetAPI.getAll(arg.search, arg.page, arg.jwtToken)
      if (!response.ok) {
        return thunkAPI.rejectWithValue(
          "Error " + response.status + " : " + response.statusText
        )
      }
      const jsonResponse = await response.json()
      return jsonResponse
    } catch (err) {
      return thunkAPI.rejectWithValue(err.name + " : " + err.message)
    }
  },
)

const dataSlice = createSlice({
  name: 'data',
  initialState: { status: "idle", loading: false, searchTargets: {"total-count": 0, "data": {}}, error: ""},
  extraReducers: (builder) => {
    builder
    .addCase(fetchSearchTargetData.pending, (state, action) => {
      return {
        status: "loading",
        loading: true,
        searchTargets: {"total-count": 0, "data": {}}, 
        error: "",
      }
    })
    .addCase(fetchSearchTargetData.fulfilled, (state, action) => {
      return {
        status: "success",
        loading: false,
        searchTargets: action.payload, 
        error: ""
      }
    })
    .addCase(fetchSearchTargetData.rejected, (state, action) => {
      return {
        status: "failure",
        loading: false,
        searchTargets: {"total-count": 0, "data": {}}, 
        error: action.payload,
      }
    })
  },
})

export const { fetchSearchTargetReducer } = dataSlice.actions;

export default dataSlice.reducer;
