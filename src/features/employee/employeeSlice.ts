import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { mockEmployees } from "../../data/mock";
import type { Employee } from "../../types/Employee";

type EmployeeState = {
  employees: Employee[];
};

const initialState: EmployeeState = {
  employees: mockEmployees,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;