import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import AuthStatus from "@/firebase/AuthState";
import axios from "axios";

const initialState = {
  Auth: null,
};

export const getAuth = createAsyncThunk("charity/auth", async (value: any) => {
  console.log("sndps");
  console.log(AuthStatus());
  return await AuthStatus();
});

const CharitySlice = createSlice({
  name: "Charity",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAuth.fulfilled, (state, action) => {
      state.Auth = action.payload;
    });
  },
});

export const store = configureStore({
  reducer: {
    charity: CharitySlice.reducer,
  },
});
