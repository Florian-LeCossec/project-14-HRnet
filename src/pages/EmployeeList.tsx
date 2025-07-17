import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import { DataTable } from "../components/DataTable";
import type { ColumnDef } from "@tanstack/react-table";
import type { Employee } from "../types/Employee";


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
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "dateOfBirth",
    header: "Date of Birth",
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
      <button onClick={() => navigate("/")}>Home</button>
      
      <DataTable  
        data={employees}
        columns={columns}
      />
    </>
  );
};
