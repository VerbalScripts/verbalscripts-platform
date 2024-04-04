import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const headerSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
  },
  reducers: {
    setAuthState(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export default headerSlice.reducer;
