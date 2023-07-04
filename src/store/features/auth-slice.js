import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isAuth: false,
  isError: false
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
    },
    loginFailure: (state) => {
      state.isError = true;
    }
  },
});

export const { loginSuccess, logoutSuccess, loginFailure } = authSlice.actions;

export const getRefreshToken = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5001/user/getRefreshToken",{withCredentials:true});
    if(response.data.status === 200) {
      dispatch(loginSuccess());
    }
  } catch (error) {
    console.log(error);
  }
};

export default authSlice.reducer;
