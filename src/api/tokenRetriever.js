import { createAsyncThunk } from '@reduxjs/toolkit'


export const fetchAuthData = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      var LOGIN_URL = "http://127.0.0.1:8000/api/token/";
      const TIMEOUT_DURATION = 1000;
  
      const response = await fetch(
        LOGIN_URL, 
        {
          method: "POST",
          body: JSON.stringify({username: credentials.username, password: credentials.password}),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
          signal: AbortSignal.timeout(TIMEOUT_DURATION)
        }
      )
      if (!response.ok) {
        return thunkAPI.rejectWithValue(
          response.status === 401 ? 
          "Unknown credentials" : 
          "Error " + response.status + " : " + response.statusText
        )
      }
      const json_response = await response.json();
      const access_token = json_response["access"];
      const refresh_token = json_response["refresh"];
      return thunkAPI.fulfillWithValue({
        "access_token": access_token,
        "refresh_token": refresh_token,
      })
    } catch (err) {
      return thunkAPI.rejectWithValue(err.name + " : " + err.message)
    }
  }
)


export default fetchAuthData;
