"use client";

import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

const persistedState = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("tasks") || "[]") : [];

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  preloadedState: { tasks: { tasks: persistedState } },
});

store.subscribe(() => {
  localStorage.setItem("tasks", JSON.stringify(store.getState().tasks.tasks));
});

// Infer RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;