import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isAuth: false,
  isError: false,
  data:{}
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isAuth = true;
    },
    logoutSuccess: (state) => {
      state.isAuth = false;
      state.data = {}
    },
    loginFailure: (state) => {
      state.isError = true;
    },
    setUserData: (state,action) => {
      state.data = action.payload
    }
  },
});

export const { loginSuccess, logoutSuccess, loginFailure, setUserData } = authSlice.actions;

export const getRefreshToken = () => async (dispatch) => {
  try {
    const response = await axios.get("https://carboncredit-api.azurewebsites.net/user/getRefreshToken",{withCredentials:true});
    if(response.data.status === 200) {
      dispatch(loginSuccess());
      dispatch(setUserData(response.data.data))
    }
  } catch (error) {
    console.log(error);
  }
};

export default authSlice.reducer;
