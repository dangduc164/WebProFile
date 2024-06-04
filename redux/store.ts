import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import inforReducer from "./infor";

export const store = configureStore({
  reducer: { inforReducer: inforReducer },
});

export type RootState = ReturnType<typeof store.getState>;
