import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FormikProps } from 'formik';

type Option = {
  value: string;
  label: string;
}

export const SelectInput = <FormValues,>({ formik, accessor, label, options }: {
  formik: FormikProps<FormValues>,
  accessor: keyof FormValues & string
  label: string
  options: Option[]
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={label}>{label}</InputLabel>
      <Select
        labelId={label}
        id={accessor}
        value={formik.values[accessor]}
        label={label}
        onChange={(e) => {
          formik.setFieldValue(accessor, e.target.value)
        }}
      >
        {options.map(option => (
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}

      </Select>
    </FormControl>
  )
}

