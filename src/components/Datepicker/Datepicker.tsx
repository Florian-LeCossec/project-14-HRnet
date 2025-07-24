import {
  DatePicker,
  type DatePickerProps,
} from "@mui/x-date-pickers/DatePicker";

export function Datepicker(props: DatePickerProps) {
  return (
    <DatePicker
      {...props}
      views={["year", "month", "day"]}
      format="yyyy/MM/dd"
      slotProps={{
        textField: {
          sx: {
            "& .MuiPickersSectionList-root": {
              padding: "0.5rem 0",
              borderRadius: 0,
            },
          },
        },
      }}
    />
  );
}

export default Datepicker;
