import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import { DataTable } from "../components/DataTable";
import type { ColumnDef } from "@tanstack/react-table";
import type { Employee } from "../types/Employee";
import { format } from "date-fns";
import { states } from "../data/states";
import "../App.css";


const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
    cell: info => {
      const value = info.getValue();
      if (!value || typeof value !== 'string') return '';
      const date = new Date(value);
      return format(date, "yyyy/MM/dd");
    }
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "dateOfBirth",
    header: "Date of Birth",
    cell: info => {
      const value = info.getValue();
      if (!value || typeof value !== 'string') return '';
      const date = new Date(value);
      return format(date, "yyyy/MM/dd");
    }
  },
  {
    accessorKey: "street",
    header: "Street",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "state",
    header: "State",
    cell: info => {
      const abbr = info.getValue();
      const stateObj = states.find(s => s.abbreviation === abbr);
      return stateObj ? stateObj.name : abbr;
    }
  },
  {
    accessorKey: "zipCode",
    header: "Zip Code",
  },
];

export const EmployeeList = () => {
  const navigate = useNavigate();
  const employees = useAppSelector((state) => state.employees.employees);


  return (
    <>
      <h1 className="title">HRnet</h1>
      <div className="button-container">
        <button onClick={() => navigate("/")}>Home</button>
      </div>
      <DataTable  
        data={employees}
        columns={columns}
      />
    </>
  );
};
