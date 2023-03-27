// src/features/auth/authSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {RootState} from '@/app/store';

// 定义一个接口，用来描述state的数据结构
interface AuthState {
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      console.log("loginStart");
      
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.token = action.payload;
      localStorage.setItem('token', state.token);
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      console.log("logout")
      state.token = null;
      localStorage.removeItem('token');
    },
  },
});

export const {loginStart, loginSuccess, loginFailure, logout} = authSlice.actions;

export const selectToken = (state: RootState) => state.auth.token;

export const login = (username: string, password: string) => async (dispatch: any) => {
  try {
    dispatch(loginStart());
    const response = await axios.post('https://example.com/login', {username, password});
    const token = response.data.token;
    dispatch(loginSuccess(token));
  } catch (error: any) {
    dispatch(loginFailure(error.message));
  }
};

export default authSlice.reducer;
