import { configureStore } from "@reduxjs/toolkit";
import { POST_NAVHIDE_SHOW } from "./dataSlice";



export const store = configureStore({
  reducer: {
    POS: POST_NAVHIDE_SHOW,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
