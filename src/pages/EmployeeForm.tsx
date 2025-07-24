import { states } from "../data/states";
import { departments } from "../data/departments";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/reduxHooks";
import { addEmployee } from "../features/employee/employeeSlice";
import { useForm } from "@tanstack/react-form";
import { SelectField } from "../components/Select";
import { Datepicker } from "../components/Datepicker";
import type { Employee } from "../types/Employee";
import "../App.css";
import { format } from "date-fns";

export const EmployeeForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: null,
      startDate: null,
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    } as Omit<Employee, "dateOfBirth" | "startDate"> & { dateOfBirth: Date | null, startDate: Date | null },
    onSubmit: ({ value }) => {
      dispatch(
        addEmployee({
          ...value,
          dateOfBirth: value.dateOfBirth ? format(value.dateOfBirth, "yyyy-MM-dd") : "",
          startDate: value.startDate ? format(value.startDate, "yyyy-MM-dd") : "",
        })
      );
    },
  });

  const handleViewEmployees = () => {
    navigate("/employee-list");
  };

  const stateOptions = states.map((state) => ({
    value: state.abbreviation,
    label: state.name,
  }));

  const departmentOptions = departments.map((department) => ({
    value: department,
    label: department,
  }));

  return (
    <>
      <h1 className="title text-2xl font-bold text-blue-600">HRnet</h1>
      <div className="container">
        <h2>Create Employee</h2>
        <button
          type="button"
          onClick={handleViewEmployees}
          className="view-employees-btn"
        >
          View Current Employees
        </button>
        <form
          className="form-container"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <form.Field
            name="firstName"
            validators={{
              onChange: ({ value }) => {
                return value.trim() === ""
                  ? "First name is required"
                  : undefined;
              },
            }}
          >
            {(field) => (
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  className="form-input"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.length > 0 && (
                  <em>{field.state.meta.errors.join(", ")}</em>
                )}
              </div>
            )}
          </form.Field>

          <form.Field
            name="lastName"
            validators={{
              onChange: ({ value }) => {
                return value.trim() === ""
                  ? "Last name is required"
                  : undefined;
              },
            }}
          >
            {(field) => (
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="form-input"
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.length > 0 && (
                  <em>{field.state.meta.errors.join(", ")}</em>
                )}
              </div>
            )}
          </form.Field>
          <div className="date-group">
            <form.Field
              name="dateOfBirth"
              validators={{
                onChange: ({ value }) => {
                  return !value ? "Date of birth is required" : undefined;
                },
              }}
            >
              {(field) => (
                <div className="form-group">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <Datepicker
                    value={field.state.value ?? null}
                    onChange={field.handleChange}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <em>{field.state.meta.errors.join(", ")}</em>
                  )}
                </div>
              )}
            </form.Field>
            <form.Field
              name="startDate"
              validators={{
                onChange: ({ value }) => {
                  return !value ? "Start date is required" : undefined;
                },
              }}
            >
              {(field) => (
                <div className="form-group">
                  <label htmlFor="startDate">Start Date</label>
                  <Datepicker
                    value={field.state.value ?? null}
                    onChange={field.handleChange}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <em>{field.state.meta.errors.join(", ")}</em>
                  )}
                </div>
              )}
            </form.Field>
          </div>

          <fieldset className="address">
            <legend>Address</legend>
            <form.Field
              name="street"
              validators={{
                onChange: ({ value }) => {
                  return value.trim() === "" ? "Street is required" : undefined;
                },
              }}
            >
              {(field) => (
                <div className="form-group">
                  <label htmlFor="street">Street</label>
                  <input
                    className="form-input"
                    type="text"
                    id="street"
                    name="street"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <em>{field.state.meta.errors.join(", ")}</em>
                  )}
                </div>
              )}
            </form.Field>
            <form.Field
              name="city"
              validators={{
                onChange: ({ value }) => {
                  return value.trim() === "" ? "City is required" : undefined;
                },
              }}
            >
              {(field) => (
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    className="form-input"
                    type="text"
                    id="city"
                    name="city"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <em>{field.state.meta.errors.join(", ")}</em>
                  )}
                </div>
              )}
            </form.Field>

            <form.Field
              name="state"
              validators={{
                onChange: ({ value }) => {
                  return value === "" ? "State is required" : undefined;
                },
              }}
            >
              {(field) => (
                <SelectField
                  field={field}
                  label="State"
                  options={stateOptions}
                />
              )}
            </form.Field>

            <form.Field
              name="zipCode"
              validators={{
                onChange: ({ value }) => {
                  return value === "" ? "Zip code is required" : undefined;
                },
              }}
            >
              {(field) => (
                <div className="form-group">
                  <label htmlFor="zipCode">Zip Code</label>
                  <input
                    className="form-input"
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <em>{field.state.meta.errors.join(", ")}</em>
                  )}
                </div>
              )}
            </form.Field>
          </fieldset>
          <form.Field
            name="department"
            validators={{
              onChange: ({ value }) => {
                return value === "" ? "Department is required" : undefined;
              },
            }}
          >
            {(field) => (
              <SelectField
                field={field}
                label="Department"
                options={departmentOptions}
              />
            )}
          </form.Field>
          <form.Subscribe
            selector={(state) => [
              state.canSubmit,
              state.isSubmitting,
              state.isSubmitted,
            ]}
            children={([canSubmit, isSubmitting, isSubmitted]) => (
              <button type="submit" disabled={!canSubmit || isSubmitting}>
                {isSubmitting ? "Saving..." : isSubmitted ? "Saved" : "Save"}
              </button>
            )}
          />
        </form>
      </div>
    </>
  );
};
