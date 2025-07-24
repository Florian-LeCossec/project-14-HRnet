import Select from "react-select";
import React from "react";

export type OptionType = {
  label: string;
  value: string;
};

interface SelectFieldProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
  label: string;
  options: OptionType[];
  placeholder?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  field,
  label,
  options,
  placeholder,
}) => {
  const selected = options.find((opt) => opt.value === field.state.value) ?? null;

  return (
    <div className="form-group">
      <label htmlFor={field.name}>{label}</label>
      <Select
        className="form-select"
        inputId={field.name}
        name={field.name}
        options={options}
        value={selected}
        isSearchable={true}
        isClearable={true}
        onChange={(option) => field.handleChange(option?.value ?? "")}
        placeholder={placeholder ?? `Select ${label}`}
        styles={{
          control: (provided) => ({
            ...provided,
            border: "1px solid #ccc",
            width: "100%",
            borderRadius: 0,
            boxShadow: "none",
          }),
        }}
      />
      {field.state.meta.errors.filter(Boolean).length > 0 && (
        <em className="text-red-500">
          {field.state.meta.errors.filter(Boolean).join(", ")}
        </em>
      )}
    </div>
  );
};
