import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  isVerified: false,
};

export type User = typeof initialState;

const userSlice = createSlice({
  name: 'user',

  initialState,

  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.email = action.payload.email;
      state.isVerified = action.payload.isVerified;
    },
    clearUser: (state) => {
      state.email = initialState.email;
      state.isVerified = initialState.isVerified;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const reducer = userSlice.reducer;
