import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slices/AuthSlice";


const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

