import React from "react";
import TextField from "@material-ui/core/TextField";

export default function InputText({ label, error, ...props }) {
  return (
    <div>
      <TextField
        error={!!error}
        helperText={error}
        label={label}
        fullWidth
        {...props}
      />
    </div>
  );
}
