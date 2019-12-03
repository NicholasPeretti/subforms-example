import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

export default function InputSelect({
  options,
  onChange,
  value,
  label,
  error,
  id,
  ...props
}) {
  const hasNoOptions = !options.length;

  return (
    <FormControl error={!!error} fullWidth>
      {label && <InputLabel id={id}>{label}</InputLabel>}
      <Select value={value} onChange={onChange} labelId={id} {...props}>
        {options.map(({ value, label }) => (
          <MenuItem value={value} key={value}>
            {label}
          </MenuItem>
        ))}
        {hasNoOptions && <MenuItem>No options</MenuItem>}
      </Select>
      {!!error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
