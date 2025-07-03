import { createSlice } from "@reduxjs/toolkit";


const AuthSlice= createSlice({
  name: "auth",
  initialState: {
    userData:null,
  },
  reducers: {
    setData:(state, action) => {
      state.userData=action.payload
    }
  },
});

export const { setData} = AuthSlice.actions;
export default AuthSlice.reducer;