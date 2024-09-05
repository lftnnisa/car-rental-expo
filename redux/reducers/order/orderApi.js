import { createSlice } from '@reduxjs/toolkit';
import { postLogin } from './authApi';
import * as SecureStore from 'expo-secure-store';

const loginSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    carId: null,
    startRent: null,
    endRent: null,
    data: {},
    paymentCountdown: null,
    paymentMethod: null,
    verificationCountdown: null,
    errorMessage: null,
  },
  reducers: {
    setCarId: (state, { payload }) => {
      state.carId = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      (state.isLogin = true), (state.data = action.payload);
      setStore(action.payload);
      state.isModalVisible = true;
    });
    builder.addCase(postLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
      state.isModalVisible = true;
    });
  },
});

export { postLogin };
export const { closeModal, logout } = loginSlice.actions;
export const selectUser = (state) => state.user; //selector
export default loginSlice.reducer;
