import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/home/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
