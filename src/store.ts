import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./features/employee/employeeSlice";

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;